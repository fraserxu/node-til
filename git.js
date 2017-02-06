require('shelljs/global')

if (!which('git')) {
  echo('Sorry, this script requires git')
  exit(1)
}

// Run external tool synchronously
// if (exec('git diff').code !== 0) {
//   echo('Error: Git commit failed');
//   exit(1);
// }

// console.log('diff', exec('git diff').stdout)


const addFile = () => {
  exec('git commit -am "Add new TIL"')
}

addFile()
