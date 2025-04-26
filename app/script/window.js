function minimizeWindow() {
    window.electron.minimizeWindow();
}

function closeWindow() {
    window.electron.closeWindow();
}

window.addEventListener('dblclick', (e) => {
    if (e.target === document.body) {
        e.preventDefault();
    }
});