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

    ipcMain.handle('getDirectoryData', async () => {
        const result = await dialog.showOpenDialog(mainWindow, {
            properties: ['openDirectory'],
          })
        
          if (!result.canceled) {
            const directoryPath = result.filePaths[0]
            const directoryName = path.basename(directoryPath)
            
            const depth = 0
            return {
                depth: depth,
                type: 'directory',
                path: directoryPath,
                name: directoryName,
                contents: await getDirectoryContents(depth, directoryPath)
            }
          }
        
          return []
    })

    ipcMain.handle('getFileContent', async(event, filePath) => {
        try {
            const content = await fs.promises.readFile(filePath, 'utf-8')
            return content
        } catch (error) {
            console.log('Error Reading File :', error)
            return `Error Reading File : ${error}`
        }
    })

}


// selectDirectory 요청 관련 함수
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
                path: contentPath,
                name: content,
                contents: await getDirectoryContents(depth+1, contentPath)
            })
        } else {
            directoryContents.push({
                depth: depth + 1,
                type: 'file',
                path: contentPath,
                name: content
            })
        }
    }

    return directoryContents


    // const responseData = 
    // {
    //     index: 1,
    //     type: 'directory',
    //     path: ~~~,
    //     name: 'electron-react-app',
    //     contents: [
    //         {
    //             index: 1,
    //             type: 'directory',
    //             path: ~~~,
    //             name: 'public',
    //             contents: [
    //                 {
    //                     index: 1,
    //                     type: 'file',
    //                     path: ~~~,
    //                     name: 'electron.js'
    //                 },
    //                 {
    //                     index: 2,
    //                     type: 'file',
    //                     path: ~~~,
    //                     names: 'eventHandler.js'
    //                 },
    //                 {
    //                     index: 3,
    //                     type: 'file',
    //                     path: ~~~,
    //                     names: 'preload.js'
    //                 }
    //             ]
    //         }
    //     ]
    // }
}



module.exports = activateEventHandler