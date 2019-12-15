const command = require('commander');
const path = require('path');
const fs = require('fs')
const ora = require('ora');
const glob = require('glob');
const downloadRepo = require('download-git-repo')
const inquirer = require('inquirer');
const handlebars = require('handlebars')
const metalSmith = require('metalsmith')

const args = command.parse(process.argv).args
let projectName = args[0];
let list = glob.sync('*');
if(list.length) {
  if(list.filter(fileName => {
    return fileName === projectName
    console.log(fileName)
  }).length !== 0) {
    console.log(`项目已存在${projectName}`);
    return;
  }
}
go();
function go() {
  const loading = ora('正在下载项目').start();
  download()
  .then(() => {
    loading.succeed()
    return inquirer.prompt([
      {
        name:'projectName',
        message:'项目名称',
        default:projectName
      },
      {
        name:'css',
        message:'使用css预处理器',
        choices:['less','stylus'],
        default:'less',
        type:'list'
      },
      {
        name:'router',
        message:'是否使用router',
        type:'confirm'
      }
    ])
  })
  .then(meta => {
    console.log(meta);
    return new Promise((resolve,reject) => {
      metalSmith(process.cwd())
      .metadata(meta)
      .clean(false)
      .source(`${projectName}/.temp`)
      .destination(`${projectName}`)
      .use((file,metas,done) => {
        // console.log(file)
        const fileNames = Object.keys(file);
        fileNames.forEach((fname) => {
          const content = file[fname].contents.toString();
          const compliedContent = handlebars.compile(content)(meta);
          file[fname].contents = Buffer.from(compliedContent)
        })
        done()
      })
      .build((err) => {
        if(!err) {
          resolve()
        }else{
          reject()
        }
      })
    })
  })
  .catch(() => {
    loading.fail();
  })
}
function download() {
  /// git clone
  return new Promise((resolve,reject) => {
    downloadRepo('github:MengZhaoFly/my-cli-test#master',`${projectName}/.temp`,{ clone:true },(err) => {
      if(err) {
        reject(err)
      }else{
        resolve(`${projectName}/.temp`)
      }
    })
  })
}
