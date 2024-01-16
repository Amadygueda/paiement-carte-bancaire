
var numerocarte= document.getElementById("ragex2");
numerocarte.addEventListener("input" ,function(e){
    var nomremplis= document.getElementById("ragex2").value
    document.getElementById("numero_cb").innerHTML=nomremplis
    
})
var nomclien= document.getElementById("ragex1");
nomclien.addEventListener("input" ,function(e){
    var nomremplis= document.getElementById("ragex1").value
    document.getElementById("nom_clien").innerHTML=nomremplis
    
})
var Mois= document.getElementById("ragex3");
Mois.addEventListener("input" ,function(e){
    var nomremplis= document.getElementById("ragex3").value
    document.getElementById("date_carte").innerHTML=nomremplis
    
})
var annee= document.getElementById("ragex4");
annee.addEventListener("input" ,function(e){
    var nomremplis= document.getElementById("ragex4").value
    document.getElementById("mois_carte").innerHTML=nomremplis
    
})
var cvc= document.getElementById("ragex5");
cvc.addEventListener("input" ,function(e){
    var nomremplis= document.getElementById("ragex5").value
    document.getElementById("dos_carte").innerHTML=nomremplis
    
})

var formulaire = document.getElementById("formulaire")

formulaire.addEventListener("submit",function(e){
 var nom= document.getElementById("ragex1").value
var carte= document.getElementById('ragex2').value
var mois= document.getElementById('ragex3').value
var annees= document.getElementById('ragex4').value
var code_dos= document.getElementById('ragex5').value
 var ragex1=/^[a-zA-z\s]+$/
 var ragex2=/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/
 var ragex3=/^0[1-9]|1[0-2]$/
 var ragex4 =/^2[4-9]|3[0-9]$/
 var ragex5 =/^[0-9]{3}$/
const dateActuelle = new Date();

const anneeComplete = dateActuelle.getFullYear().toString();
const deuxDerniersChiffres = anneeComplete.substring(anneeComplete.length - 2);
 var nom2= document.getElementById("ragex1")

  if(ragex1.test(nom)===false){
    var span1 = document.getElementById("span1")
    span1.innerHTML="Format non valide"
    span1.style.color="red"
    nom2.style.borderColor='red'
    e.preventDefault();
  } 
if(ragex2.test(carte)===false){
    var span2=document.getElementById("span2")
    span2.innerHTML="Format non valide &nbsp"
    span2.style.color="red"
    document.getElementById('ragex2').style.borderColor="red"
    e.preventDefault();
  }
   if(ragex3.test(mois)===false){
    var span2=document.getElementById("span3")
    span3.innerHTML="Format non valide &nbsp"
    span3.style.color="red"
    document.getElementById('ragex3').style.borderColor="red"
    e.preventDefault();
  }
 if(ragex4.test(annees)===false){
    var span4=document.getElementById("span4")
    span4.innerHTML="Format non valide &nbsp"
    span4.style.color="red"
    document.getElementById('ragex4').style.borderColor="red"
    e.preventDefault();
  }
  if(ragex5.test(code_dos)===false){
    var span5=document.getElementById("span5")
    span5.innerHTML="Format non valide &nbsp"
    span5.style.color="red"
    document.getElementById('ragex5').style.borderColor="red"
    e.preventDefault();
  }
 
}
)