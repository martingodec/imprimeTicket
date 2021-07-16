const {
    ipcRenderer
} = require('electron')

const monto = document.querySelector('form');
monto.addEventListener('submit', (e) => {
    const total = document.querySelector('#monto').value;
    console.log(total)
    const totalImprimir = {
        total: total
    }
ipcRenderer.send('total-imprimir', totalImprimir)

    e.preventDefault();
});