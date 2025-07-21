const { runCommand } = require('./util/index.cjs')

/**
 * @title NoteCommand
 * @description git 保存代码
 * @param {string} [commit='feat: dev']  
 */
async function NoteCommand(commit = 'docs: edit document') {
  try {
    await runCommand('git add .')
    await runCommand(`git commit -m "${commit}"`)
    await runCommand(`git push`)
    console.log('All command execution completed')
  } catch (error) {
    console.error('Execution error:', error)
  }
}

module.exports = {
  NoteCommand,
}
