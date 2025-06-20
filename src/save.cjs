const { runCommand } = require('./util/index.cjs')

/**
 * @title SaveCommand
 * @description git 保存代码
 * @param {string} [commit='feat: dev']  
 */
async function SaveCommand(commit = 'feat: dev') {
  try {
    await runCommand('npm run build')
    await runCommand('git add .')
    await runCommand(`git commit -m "${commit}"`)
    await runCommand(`git push`)
    console.log('All command execution completed')
  } catch (error) {
    console.error('Execution error:', error)
  }
}

/**
 * @title OnlySaveCommand
 * @description git 保存代码
 * @param {string} [commit='feat: dev']  
 */
async function OnlySaveCommand(commit = 'feat: dev') {
  try {
    // await runCommand('npm run build')
    await runCommand('git add .')
    await runCommand(`git commit -m "${commit}"`)
    await runCommand(`git push`)
    console.log('All command execution completed')
  } catch (error) {
    console.error('Execution error:', error)
  }
}

module.exports = {
  SaveCommand,
  OnlySaveCommand,
}
