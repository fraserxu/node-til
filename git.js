require('shelljs/global')

if (!which('git')) {
  echo('Sorry, this script requires git')
  exit(1)
}

exports.addFile = (file) => {
  exec(`git add ${file}`)
}

exports.commitFile = (msg) => {
  exec(`git commit -m "${msg}"`)
}

exports.pushFile = () => {
  exec('git push')
}
