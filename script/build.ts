/**
 * 1. git 拉取 keystone admin 仓库并安装依赖
 *
 */

import execSh from 'exec-sh'
let count = 0
const isAdminRun = () => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      execSh('yarn healthcheck', { cwd: './admin' }, (err) => {
        if (err) {
          if (count === 5) {
            reject(err)
          } else {
            count++
            resolve(isAdminRun())
          }
        }
        resolve('')
      })
      clearTimeout(timer)
    }, 2000)
  })
}
const main = async () => {
  await execSh
    .promise('gh repo clone marsk6/blog-admin admin')
    .catch(() => console.log('000000'))

  await execSh.promise('git pull origin master', { cwd: './admin' })
  const childProcess = execSh('yarn && yarn deploy', { cwd: './admin' })
  await isAdminRun()
  console.log('to next deploy')
  await execSh.promise('yarn next:build')
  console.log('finish build')
  childProcess.kill()
}

main()
