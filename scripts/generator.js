const fs = require('fs')
const inquirer = require('inquirer')
const pluralize = require('pluralize')

const action = require('./templates/action')
const reducer = require('./templates/reducer')
const view = require('./templates/view')
const list = require('./templates/list')
const create = require('./templates/create')
const update = require('./templates/update')

const entityQuestion = [{
    type: 'input',
    name: 'name',
    message: 'What\'s entity name? (user, article):',
    validate: (text) => {
        if (!text) {
            return 'Cannot be empty'
        }
        if (text.length < 2) {
            return 'More than one letter'
        }
        if (text.includes(' ')) {
            return 'No spaces please'
        }
        return true
    }
}]

const filesQuestion = [{
    type: 'checkbox',
    message: 'What do you want to generate?',
    name: 'files',
    choices: [
        new inquirer.Separator(' = Redux stuff = '),
        {
            name: 'Actions',
            checked: true
        },
        {
            name: 'Reducer',
            checked: true
        },
        new inquirer.Separator(' = Redux actions (CRUD flow) = '),
        {
            name: 'Create actions',
            checked: true
        },
        {
            name: 'Read actions',
            checked: true
        },
        {
            name: 'Update actions',
            checked: true
        },
        {
            name: 'Delete actions',
            checked: true
        },
        new inquirer.Separator(' = React stuff (Components) = '),
        {
            name: 'View',
            checked: true
        },
        {
            name: 'List',
            checked: true
        },
        {
            name: 'Create',
            checked: true
        },
        {
            name: 'Update',
            checked: true
        }
    ]
}]

inquirer.prompt(entityQuestion).then((answer) => {

    const singular = pluralize.singular(answer.name)
    const plural = pluralize.plural(answer.name)
    const singularCap = singular.charAt(0).toUpperCase() + singular.slice(1)
    const pluralCap = plural.charAt(0).toUpperCase() + plural.slice(1)
    const singularUpper = singular.toUpperCase()
    const pluralUpper = plural.toUpperCase()

    const strings = {singular, plural, singularCap, pluralCap, singularUpper, pluralUpper}

    inquirer.prompt(filesQuestion).then((answer) => {
        const root = process.cwd()
        answer.files.forEach(item => {
            switch (item) {
            case 'Actions':
                createFile(`${root}/source/scripts/${strings.singular}`, `${strings.singularCap}${item}.js`, action(strings, answer.files))
                break
            case 'Reducer':
                createFile(`${root}/source/scripts/${strings.singular}`, `${strings.singularCap}${item}.js`, reducer(strings, answer.files))
                break
            case 'View':
                createFile(`${root}/source/scripts/${strings.singular}`, `${strings.singularCap}${item}.jsx`, view(strings))
                break
            case 'List':
                createFile(`${root}/source/scripts/${strings.singular}`, `${strings.singularCap}${item}.jsx`, list(strings))
                break
            case 'Create':
                createFile(`${root}/source/scripts/${strings.singular}`, `${strings.singularCap}${item}.jsx`, create(strings))
                break
            case 'Update':
                createFile(`${root}/source/scripts/${strings.singular}`, `${strings.singularCap}${item}.jsx`, update(strings))
                break
            }
        })
    })
})

const createFile = (path, file, content) => {
    if (!fs.existsSync(path)){
        fs.mkdirSync(path)
    }
    fs.writeFile(`${path}/${file}`, content, (err) => {
        if (err) {
            // eslint-disable-next-line no-console
            return console.error(err)
        }
        // eslint-disable-next-line no-console
        console.log('Created: ', `${path}/${file}`)
    })
}
