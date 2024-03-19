const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('electronAPI', {
    minimizeMainWindow: () => ipcRenderer.send('minimizeMainWindow'),
    maximizeMainWindow: () => ipcRenderer.send('maximizeMainWindow'),
    closeMainWindow: () => ipcRenderer.send('closeMainWindow'),
    selectDirectory: () => ipcRenderer.invoke('selectDirectory'),
    getFileContent: (fileName) => ipcRenderer.invoke('getFileContent', fileName)
})
