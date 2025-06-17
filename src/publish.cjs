const { runCommand } = require('./util/index.cjs')

/**
 * @title PublishCommand
 * @description 发布命令
 * @param {string} [commit='feat: dev']  
 * @param {major|minor|patch|premajor|prepathch|prerelease|string} [newVersion='']
 * npm version major      # 主版本号（不兼容的改动，如 1.2.3 → 2.0.0）
 * npm version minor      # 次版本号（向后兼容的功能新增，如 1.2.3 → 1.3.0）
 * npm version patch      # 修订号（向后兼容的问题修复，如 1.2.3 → 1.2.4）
 * npm version premajor   # 预发布主版本（如 1.2.3 → 2.0.0-beta.0）
 * npm version preminor   # 预发布次版本（如 1.2.3 → 1.3.0-beta.0）
 * npm version prepatch   # 预发布修订号（如 1.2.3 → 1.2.4-beta.0）
 * npm version prerelease # 递增预发布号（如 1.2.3-beta.0 → 1.2.3-beta.1）
 */
async function PublishCommand(commit = 'feat: dev', newVersion = '') {
  try {
    await runCommand('npm run build')
    await runCommand('git add .')
    await runCommand(`git commit -m "${commit}"`)
    newVersion && await runCommand(`npm version ${newVersion}`)
    await runCommand('npm publish')
    await runCommand(`git push`)
    console.log('All command execution completed')
  } catch (error) {
    console.error('Execution error:', error)
  }
}

module.exports = {
	PublishCommand
}