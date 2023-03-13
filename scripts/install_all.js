const path = require('path')
const simpleGit = require('simple-git')


async function Main () {
    const containingGit = simpleGit.simpleGit(path.resolve(__dirname), '../')
    const branchesAvailable = await containingGit.branch()
    const deployableBranches = branchesAvailable.all.filter(name => name.startsWith('ver'))
    console.log(deployableBranches)
}

Main()