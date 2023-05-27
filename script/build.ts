/**
 * 1. git 拉取 keystone admin 仓库并安装依赖
 *
 */

import { simpleGit } from 'simple-git'

const main = async () => {
  const git = simpleGit()
  await git.clone()
  await git.checkout('master')
  await git.deleteLocalBranch('auto/release', true)
  await git.checkoutBranch('auto/release', 'origin/master')
  await cb()
  await git.add('.')
  await git.commit('release new articles')
  await git.checkout('master')
  await git.mergeFromTo('', 'auto/release')
}

main()
