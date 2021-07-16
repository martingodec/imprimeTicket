'use strict';
const path = require('path');
const escpos = require('escpos');
escpos.USB = require('escpos-usb');
const device  = new escpos.USB();

// const device  = new escpos.Network('localhost');
// const device  = new escpos.Serial('/dev/usb/lp0');
const printer = new escpos.Printer(device);



const sub = '20.000'

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

console.log(dateTime)

const tux = path.join(__dirname, 'tux.png');
escpos.Image.load('Logos66.png', function(image){

  device.open(async function(){

   await printer.align('ct')
           .image(image, 's24')
           
           .then(() => { 
              printer
              .model('qsprinter')
    .encode('UTF-16BE')
    .font('a')
    .size(0,0)
    .align('ct')
    .text('')
    .text('Calle 49 629, La Plata')
    .text('Fecha:  '+dateTime)
    .align('lt')
    .text('')
    .text('--------------------------------')
    .text(`Sub Total:              $ ${sub}`)
    .text(`Efectivo:               $ ${sub}`)
    .text('--------------------------------')
    .text(`Total:                  $ ${sub}`)
    .text('--------------------------------')
    .text('')
    .align('ct')
    .size(1, 1)
    .text('¡Gracias!')
    .size(0, 0)
    .text('')
    .text('www.briganti.com.ar')
    .text('Lun a Sab  9:30 a 18:30hs. ')
    .text('Recibo sin valor fiscal')
    .text('')
    .text('')
    .text('')
              .close(); 
           });

    // OR non-async .raster(image, "mode") : printer.text("text").raster(image).cut().close();

  });

  });







  