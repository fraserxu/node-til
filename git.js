require('shelljs/global')

if (!which('git')) {
  echo('Sorry, this script requires git')
  exit(1)
}

exports.addFile = (commitMsg) => {
  exec(`git commit -am "${commitMsg}"`)
}

exports.pushFile = () => {
  exec('git push')
}
