#!/usr/bin/env node

const path = require('path')
const pkg = require('../package.json')
const { Command } = require('commander')

const program = new Command()

program
  .name('xyy')
  .description('Execute Command')
  .version(pkg.version)
  .argument('<command>', 'save | publish | git')
  .argument('[commit]', 'git commit -m [commit]')
  .option(
    '--newVersion <newVersion>',
    'npm run [newVersion] =>  major | minor | patch | premajor | prepathch | prerelease',
  )
  .action(async (command, commit, options) => {
    // console.log({ command, commit, options })
    const { newVersion } = options || {}
    if (!command) {
      return
    }
    if (command.toLowerCase() === 'save') {
      require('./save.cjs').SaveCommand(commit)
      return
    }
    if (command.toLowerCase() === 'publish') {
      require('./publish.cjs').PublishCommand(commit, newVersion)
      return
    }
    if (command.toLowerCase() === 'git') {
      require('./git.cjs').GitCommand(newVersion)
      return
    }
  })

program.parse(process.argv)
