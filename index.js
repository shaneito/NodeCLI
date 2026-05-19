#!/usr/bin/env node
import pkgJSON from './package.json' with { type: 'json' };
import welcome from 'cli-welcome';

// Use it.
welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, nice to meet ya'll!!!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Shaneito

Enjoys trying out the latest software and tools be it Desktop Apps or the command line.
Loves coding, learning and creating new things.
Currently learning JavaScript and Shell scripting to improve my workflow. If
I am not doing that it is tweaking some config file.

🐤 Twitter: https://x.com/shaneito_on_x
🗄️  GitHub:  https://github.com/shaneito
🌐 Blog:    https://www.shaneito.me
`);
