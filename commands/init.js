const {prompt} = require('inquirer')
const {writeFile} = require('fs')
const {resolve} = require('path')
const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')

let tplList = require(`${__dirname}/../templates`)

const question = [
  {
    type: 'list',
    name: 'name',
    message: '选择模板:',
    choices: ['react-koa2', 'react', 'vue-koa2', 'vue', 'koa2-server', 'express-server']
  }, {
    type: 'input',
    name: 'project',
    message: '输入项目名称:',
    validate(val) {
      if (val !== '') {
        return true
      }
      return '项目名称不能为空!'
    }
  }, {
    type: 'input',
    name: 'place',
    message: '输入项目名称:',
    default: './'
  }
]

module.exports = prompt(question).then(({name, project, place}) => {
  const gitPlace = tplList[name]['GitHub']
  const gitBranch = tplList[name]['branch']
  const spinner = ora('模板下载中，请稍候...')

  spinner.start()
  download(`${gitPlace}#${gitBranch}`, `${place}/${project}`, (err) => {
    if (err) {
      console.log(chalk.red(err))
      process.exit()
    }
    spinner.stop()
    if (`${name}` == 'react') {
      console.log(chalk.green('\n   新的' + `${name}` + '项目已经成功初始化'));
      console.log(chalk.green('\n   如需开始请输入以下命令：'));
      console.log(chalk.blue('\n           cd ' + `${project}` + '\n           npm install\n           npm start'));
      console.log(chalk.green('\n   文档  https://github.com/shifeng1993/react-start/blob/master/README.md\n'));
    } else if(`${name}` == 'react-koa2'){
      console.log(chalk.green('\n   新的' + `${name}` + '项目已经成功初始化'));
      console.log(chalk.green('\n   如需开始请输入以下命令：'));
      console.log(chalk.blue('\n           cd ' + `${project}` + '\n           npm install\n           cd webapp\n           npm start/npm run build\n           cd ..\n           node ' + `${name}`));
      console.log(chalk.green('\n   文档  https://github.com/shifeng1993/react-koa2/blob/master/README.md\n'));
    }else if (`${name}` == 'vue') {
      console.log(chalk.green('\n   新的' + `${name}` + '项目已经成功初始化'));
      console.log(chalk.green('\n   如需开始请输入以下命令：'));
      console.log(chalk.blue('\n           cd ' + `${project}` + '\n           npm install\n           npm run dev'));
      console.log(chalk.green('\n   文档  https://github.com/shifeng1993/vue-start/blob/master/README.md\n'));
    } else if(`${name}` == 'vue-koa2'){
      console.log(chalk.green('\n   新的' + `${name}` + '项目已经成功初始化'));
      console.log(chalk.green('\n   如需开始请输入以下命令：'));
      console.log(chalk.blue('\n           cd ' + `${project}` + '\n           npm install\n           cd webapp\n           npm start/npm run build\n           cd ..\n           node ' + `${name}`));
      console.log(chalk.green('\n   文档  https://github.com/shifeng1993/vue-koa2/blob/master/README.md\n'));
    }
  })
})
