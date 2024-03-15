const { ipcMain, dialog} = require('electron/main')
const path = require('path')
const fs = require('fs')

function activateEventHandler(mainWindow) {

    ipcMain.on('minimizeMainWindow', () => {
        mainWindow.minimize()
    })

    ipcMain.on('maximizeMainWindow', () => {
        if (mainWindow.isMaximized()) {
            mainWindow.restore()
        } else {
            mainWindow.maximize()
        }
    })

    ipcMain.on('closeMainWindow', () => {
        mainWindow.close()
    })



    ipcMain.handle('selectDirectory', async () => {
        const result = await dialog.showOpenDialog(mainWindow, {
            properties: ['openDirectory'],
          })
        
          if (!result.canceled) {
            const selectedDirectory = result.filePaths[0]
            const directoryName = path.basename(selectedDirectory)
            
            const depth = 0
            return {
                depth: depth,
                type: 'directory',
                name: directoryName,
                contents: await getDirectoryContents(depth, selectedDirectory)
            }
          }
        
          return []
    })

    ipcMain.on('searchClick', () => {
        console.log('searchClick')
    })

    ipcMain.on('settingClick', () => {
        console.log('settingClick')
    })

}


async function getDirectoryContents(depth, directoryPath) {
    const contents = await fs.readdirSync(directoryPath)
    const directoryContents = []

    for (const content of contents) {
        const contentPath = path.join(directoryPath, content)
        const stats = fs.statSync(contentPath)
        const isDirectory = stats.isDirectory()

        if (isDirectory) {
            directoryContents.push({
                depth: depth + 1,
                type: 'directory',
                name: content,
                contents: await getDirectoryContents(depth+1, contentPath)
            })
        } else {
            directoryContents.push({
                depth: depth + 1,
                type: 'file',
                name: content
            })
        }
    }

    return directoryContents
}

// const responseData = 
// {
//     index: 1,
//     type: 'directory',
//     name: 'electron-react-app',
//     contents: [
//         {
//             index: 1,
//             type: 'directory',
//             name: 'public',
//             contents: [
//                 {
//                     index: 1,
//                     type: 'file',
//                     name: 'electron.js'
//                 },
//                 {
//                     index: 2,
//                     type: 'file',
//                     names: 'eventHandler.js'
//                 },
//                 {
//                     index: 3,
//                     type: 'file',
//                     names: 'preload.js'
//                 }
//             ]
//         }
//     ]
// }

module.exports = activateEventHandler