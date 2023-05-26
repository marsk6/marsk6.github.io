import { simpleGit } from 'simple-git'

const autoRelease = async (cb: () => Promise<void>) => {
  if (process.env.__DEV__ || true) {
    cb()
    return
  }
  const git = simpleGit()
  await git.checkout('master')
  await git.deleteLocalBranch('auto/release', true)
  await git.checkoutBranch('auto/release', 'origin/master')
  await cb()
  await git.add('.')
  await git.commit('release new articles')
  await git.checkout('master')
  await git.mergeFromTo('', 'auto/release')
}

export default autoRelease
