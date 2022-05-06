const express = require("express");
const app = express();
const path = require('path');

app.listen(3030, () => console.log("El servidor esta corriendo en puerto 3030"))

app.use(express.static(path.join(__dirname, "./public")))

app.get ("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})
app.get ("/ayuda", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/ayuda.html"))
})
app.get ("/creatucuenta", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/creatucuenta.html"))
})
app.get ("/ingresa", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/ingresa.html"))
})
app.get ("/miscompras", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/miscompras.html"))
})
app.get ("/ofertas", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/ofertas.html"))
})
app.get ("/tiendasoficiales", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/tiendasoficiales.html"))
})
app.get ("/vender", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/vender.html"))
})

