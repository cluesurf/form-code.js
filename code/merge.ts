// Deep-merge for VS Code settings/extensions JSON.
//
// Behavior:
//   - Two primitive arrays merge into a deduplicated union
//     (so user `recommendations` arrays add up).
//   - Two non-primitive (object/mixed) arrays favor `b`
//     (the local override wins outright).
//   - Two plain objects merge recursively.
//   - Anything else: `b` wins.
//
// `any` is used liberally here because the inputs are
// arbitrary JSON. Boundary code; real types would be
// noise.

const PRIMITIVE_TYPES = [
  'string',
  'number',
  'boolean',
  'symbol',
  'bigint',
  'undefined',
]

type StrictPrimitive =
  | string
  | number
  | boolean
  | null
  | undefined
  | symbol
  | bigint

const isStrictPrimitive = (val: any): val is StrictPrimitive =>
  val === null || PRIMITIVE_TYPES.includes(typeof val)

const isStrictPrimitiveArray = (arr: any[]): boolean =>
  arr.every(isStrictPrimitive)

const isObject = (val: any): val is Record<string, any> =>
  val && typeof val === 'object' && !Array.isArray(val)

export default function deepMerge<T = any>(a: T, b: any): T {
  if (Array.isArray(a) && Array.isArray(b)) {
    return isStrictPrimitiveArray(a) && isStrictPrimitiveArray(b)
      ? (Array.from(new Set([...a, ...b])) as any)
      : (b as T)
  }

  if (isObject(a) && isObject(b)) {
    const out: Record<string, any> = { ...a }
    for (const key in b) {
      out[key] = key in a ? deepMerge((a as any)[key], b[key]) : b[key]
    }
    return out as T
  }

  return b
}
