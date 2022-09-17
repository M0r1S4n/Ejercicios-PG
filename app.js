const express = require ('express');

const app = express ();

const path = require ('path')

const staticsPath = path.resolve ( __dirname, './publics');

app.use ( express.static (staticsPath))

app.listen ( 3000, () => {
    console.log ('SERVIDOR INICIADO')
})

app.get ( '/', ( req,res) => {
    res.sendFile ( path.join ( __dirname, 'views/index.html'))
})