const { print } = require('./print');

const helloWorld = (name) => {
    print(`Hello ${name ? name : 'World'}!`)
}

const name = 'Germano';

helloWorld(name);