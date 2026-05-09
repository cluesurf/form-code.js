import fs from 'fs/promises'
import path from 'path'
import deepMerge from './merge.js'
import SHARED_SETTINGS from './data/settings.json' with { type: 'json' }
import SHARED_EXTENSIONS from './data/extensions.json' with { type: 'json' }

export async function updateSettings() {
  await update({ type: 'settings', shared: SHARED_SETTINGS })
}

export async function updateExtensions() {
  await update({ type: 'extensions', shared: SHARED_EXTENSIONS })
}

export async function update({
  type,
  shared,
}: {
  type: 'settings' | 'extensions'
  shared: Record<string, unknown>
}) {
  const localPath = path.resolve(`.vscode/${type}.json`)

  let local: any = {}

  try {
    const file = await fs.readFile(localPath, 'utf-8')
    local = JSON.parse(file)
  } catch (_err) {
    // No existing file (or unreadable) — start fresh.
  }

  const merged = deepMerge(shared, local)

  await fs.mkdir(path.dirname(localPath), { recursive: true })
  await fs.writeFile(localPath, JSON.stringify(merged, null, 2))
}
