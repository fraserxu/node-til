const fs = require('fs')
const inquirer = require('inquirer')

const Git = require('./git')

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What have you learned?'
  },
  {
    type: 'editor',
    name: 'description',
    message: 'Tell me more about it.'
  }
]).then((answers) => {
  writeNotes(answers, () => {
    Git.addFile('README.md')
    Git.commitFile(`TIL: ${answers.title}`)
    Git.pushFile()
  })
})

const writeNotes = ({
  title,
  description
}, cb) => {
  let writeStream = fs.createWriteStream('fixture.md', {
    flags: 'a'
  })
  const msg = `
<details>
  <summary>${title}</summary>
${description}
</details>`
  writeStream.write(msg)
  writeStream.end('\n')
  writeStream.on('end', cb)
}
