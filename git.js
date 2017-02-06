const shelljs = require('shelljs')

if (!shelljs.which('git')) {
  echo('Sorry, this script requires git')
  exit(1)
}

exports.addFile = (file) => {
  shelljs.exec(`git add ${file}`)
}

exports.commitFile = (msg) => {
  shelljs.exec(`git commit -m "${msg}"`)
}

exports.pushFile = () => {
  shelljs.exec('git push')
}
