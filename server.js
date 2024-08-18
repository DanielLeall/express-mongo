import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/":"Curso de express API",
    "/livros":"Entrei na rota livros",
    "/autores":"Entrei na rota Autores"
}

app.listen(PORT, ()=>{
    console.log("servidor escutando!");
});