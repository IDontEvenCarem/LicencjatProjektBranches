const fs = require('fs').promises
const path = require('path')
const simpleGit = require('simple-git')

const installsFolder = 'branch_installs'

async function Main () {
    const originPath = path.resolve(__dirname, '../') 
    const containingGit = simpleGit.simpleGit(originPath)
    const branchesAvailable = await containingGit.branch()
    const deployableBranches = branchesAvailable.all.filter(name => name.startsWith('ver'))

    for(const branch of deployableBranches) {
        const localPath = path.resolve(__dirname, '..', installsFolder, branch)
        await fs.mkdir(localPath, {recursive: true})
        fs.cp(originPath, localPath, {filter: (source, dest) => !source.includes(installsFolder)})
        const localGit = simpleGit.simpleGit(localPath)
        await localGit.checkoutLocalBranch(branch)
    }
}

Main()