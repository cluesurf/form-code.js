#!/usr/bin/env node

import { updateExtensions, updateSettings } from './host/code/update.js'

Promise.all([updateSettings(), updateExtensions()]).catch(() => {
  process.exit(1)
})
