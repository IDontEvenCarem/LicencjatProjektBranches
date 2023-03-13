const os = require('os')
const fs = require('fs').promises
const path = require('path')
const simpleGit = require('simple-git')

const installsFolder = 'branch_installs'

async function Main () {
    const originPath = path.resolve(__dirname, '../') 
    const containingGit = simpleGit.simpleGit(originPath)
    const branchesAvailable = await containingGit.branch()
    const deployableBranches = branchesAvailable.all.filter(name => name.startsWith('ver'))

    const tempPath = await fs.mkdtemp(path.join(os.tmpdir(), 'kolpb-'))
    await fs.cp(originPath, tempPath, {recursive: true, filter: (source, dest) => !source.includes(installsFolder)})

    for(const branch of deployableBranches) {
        console.log("Setting up", branch);
        const localPath = path.resolve(__dirname, '..', installsFolder, branch)
        await fs.mkdir(localPath, {recursive: true})
        await fs.cp(tempPath, localPath, {recursive: true})
        const localGit = simpleGit.simpleGit(localPath)
        await localGit.checkout(branch);
    }

    await fs.rmdir(tempPath, { recursive: true, force: true });
}

Main()