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
app.get ("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})
app.get ("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
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

