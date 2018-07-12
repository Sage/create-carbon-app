#! /usr/bin/env node

const path = require('path')
const fs = require('fs-extra')
const execSync = require('child_process').execSync;

const dest = path.resolve(process.argv[2])
const scaffold = `${__dirname}/scaffold`

console.log(`Creating a new Carbon app in \x1b[32m${dest}\x1b[0m`)

function install() {
  console.log('Installing dependencies...')
  execSync('npm install', { cwd: dest, stdio: 'ignore' })
  console.log(`
Done!

You can now run the app:
$ \x1b[32mcd ${dest}\x1b[0m
$ \x1b[32mnpm start\x1b[0m

Your app will be available at \x1b[36mhttp://localhost:8080/\x1b[0m`)
}

fs.copy(scaffold, dest)
  .then(install)
  .catch(err => console.error(err))
