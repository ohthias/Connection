const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 350,
        height: 430,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
        icon: path.join(__dirname, 'favicon_io', 'favicon-32x32'),
        resizable: false,   // Impede o redimensionamento da janela
        frame: false,       // Remove a barra de título
        transparent: true,  // Torna a janela transparente
    })

    win.loadFile('index.html')

    // Adiciona bordas arredondadas
    win.setBounds({
        x: 0,
        y: 0,
        width: 350,
        height: 430
    })

    // Mover a janela
    ipcMain.on('move-window', (event, { x, y }) => {
        win.setBounds({ x, y });
    });

    // Minimize window
    ipcMain.on('minimize-window', () => {
        win.minimize();
    });

    // Maximize window
    ipcMain.on('maximize-window', () => {
        if (win.isMaximized()) {
            win.restore();
        } else {
            win.maximize();
        }
    });

    // Close window
    ipcMain.on('close-window', () => {
        win.close();
    });
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
