/*  */
import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

/*page acceuil */
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

/* soumis*/
app.post("/soumetre",(req,res)=>{
    const nom = req.body.nom;
    const carte = req.body.numero;
    const mois = req.body.mois;
    const annee = req.body.annee;
    const codecvc = req.body.cv;
    const tout = nom +(" ")+carte +(" ")+mois+(" ")+annee+(" ")+codecvc
    res.render("finish.ejs",{
        nom:nom,
        numero:carte,
        mois:mois,
        annee :annee,
        cvc : codecvc
    })
})
/* creation su serveur */
app.listen(port,()=>{
    console.log(`le sertveur est en cour  d execution au port ${port}`)
})
