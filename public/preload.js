const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electronAPI', {
    minimizeMainWindow: () => ipcRenderer.send('minimizeMainWindow'),
    maximizeMainWindow: () => ipcRenderer.send('maximizeMainWindow'),
    closeMainWindow: () => ipcRenderer.send('closeMainWindow'),
    getDirectoryData: () => ipcRenderer.invoke('getDirectoryData'),
    getFileContent: (fileName) => ipcRenderer.invoke('getFileContent', fileName)
})
