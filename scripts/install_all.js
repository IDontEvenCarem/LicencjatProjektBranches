const path = require('path')
const simpleGit = require('simple-git')


async function Main () {
    const containingGit = simpleGit.simpleGit(path.resolve(__dirname), '../')
    const branchesAvailable = await containingGit.branch()
    console.dir(branchesAvailable.all)
}

Main()