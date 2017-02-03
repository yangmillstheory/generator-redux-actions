const path = require('path')
const fs = require('fs')
const glob = require('glob')
const chalk = require('chalk')
const yosay = require('yosay')
const camelCase = require('lodash.camelCase')
const Generator = require('yeoman-generator')

const optionKeys = {
  asyncActions: 'async-actions',
}
const promptKeys = { 
  actions: 'actions',
}

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options)
    this.argument('moduleName', { description: 'Name of your Redux application module.', type: String, required: true })
    this.option(optionKeys.asyncActions, { description: 'Install async action creators?', type: Boolean, default: false })
  }

  initializing() {
    const { moduleName } = this.options
    if (!fs.existsSync(moduleName)) {
      this._info(`No ${moduleName} directory found; creating it.`)
      fs.mkdirSync(moduleName)
    }
    process.chdir(moduleName)
  }

  _error(message) {
    this.log(chalk.red(message))
  }

  _info(message) {
    this.log(chalk.yellow(message))
  }

  _success(message) {
    this.log(chalk.green(message))
  }

  _yosay(message) {
    this.log(yosay(message))
  }

  prompting() {
    const { moduleName } = this.options
    const cwd = path.basename(process.cwd())

    this._yosay(`Generating Redux module ${chalk.red(moduleName)}!`)

    return this.prompt([
      {
        type: 'input',
        name: promptKeys.actions,
        message: 'Enter comma-separated action names (will be converted to upper-case):',
      },
    ]).then(answers => this.actions = this._getActions(answers))
  }

  _getActions(answers) {
    const separatorPattern = /\s*,\s*/
    return answers.actions.split(separatorPattern)
      .map(answer => answer.trim())
      .map(answer => ({ upperCase: answer.toUpperCase(), camelCase: camelCase(answer) }) 
  }

  writing() {
    const { moduleName } = this.options
    const files = glob.sync(this.templatePath('**/*'), { dot: true })
    const destinationPath = this.destinationPath(moduleName) 
    const variables = { 
      moduleName,
      actions: this.actions,
      installAsync: this.options[optionKeys.asyncActions],  
    }
    this.fs.copyTpl(files, destinationPath, variables)
  }

  end() {
    const { moduleName } = this.options
    this.log()
    this.log('Your Redux module is ready.')
    this.log()
    this._success(`\tcd ${moduleName}`)
    this.log()
  }
}

