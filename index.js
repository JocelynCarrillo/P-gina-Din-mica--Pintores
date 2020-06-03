//Se importan los paquetes
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//definimos el motor de plantillas
app.set('view engine', 'hbs');

//Vamo a generar los partials
hbs.registerPartials(__dirname + '/views/partials/');

//Se generó el sitio estático
app.use(express.static(__dirname + '/public'));

//Mis rutas
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/frida', (req, res)=>{
    res.render('frida', {
        autor:'Jocelyn Aide Carrillo Andrew 4-E',
        year: new Date().getFullYear(),
        title:'Frida Kahlo'
    });
});

app.get('/van', (req, res)=>{
    res.render('van', {
        autor:'Jocelyn Aide Carrillo Andrew 4-E',
        year: new Date().getFullYear(),
        title:'Vincent Van Gogh'
    });
});

app.get('/tamara', (req, res)=>{
    res.render('tamara', {
        autor:'Jocelyn Aide Carrillo Andrew 4-E',
        year: new Date().getFullYear(),
        title:'Tamara de Lempicka'
    });
});

app.get('/da', (req, res)=>{
    res.render('da', {
        autor:'Jocelyn Aide Carrillo Andrew 4-E',
        year: new Date().getFullYear(),
        title:'Leonardo Da Vinci '
    });
});

app.get('acerca', (req, res)=>{
    res.render('acerca');
});


//arrancar el servidor web
app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000");
});
