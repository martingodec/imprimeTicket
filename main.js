const {ipcRenderer} = require('electron')

const monto = document.querySelector('form');
monto.addEventListener('submit', (e) => {
    const total = document.querySelector('#monto').value;
    console.log(total)

    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
        
        console.log(parts.join(","))
        return parts.join(",");
        
        }





    const totalImprimir = {
        total:numberWithCommas(total)
    }
ipcRenderer.send('total-imprimir', totalImprimir)

    //e.preventDefault();
});

