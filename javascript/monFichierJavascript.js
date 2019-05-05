var abonnements = function() {	
	document.getElementById('calculer').addEventListener('click', calculer);
}
window.addEventListener("load",abonnements);

var k = 0;
var vrai = 0;
var question = 0;

var calculer = function(){
	k = k+1;
	table = document.getElementById('table').value;
	resultat = document.getElementById('resultat');
	entree = document.getElementById('nombre').value;
	if(table == ""){
		resultat.innerHTML = "<span id='erreur'>Veuillez choisir une table à travailler</span>";
	}
	if (entree == "" ) {
		if(table < 10 && table > 0){
			nombreAleatoire = Math.round(Math.random()*10);
			multiplication = table * nombreAleatoire;
			resultat.innerHTML = "<span id='question'>Question " + k + "</span></br>" +table +" * "+ nombreAleatoire + " = " + "?? ";
			k = k-1;} else{resultat.innerHTML = "<span id='erreur'>Veuillez choisir une table comprise entre 0 et 10 !</span>";
	}
		}		
	if(k < 10){
		if(entree == multiplication ){
		 	vrai = vrai+1;
			resultat.innerHTML="<span id='vrai'>Vrai " + table +" * "+ nombreAleatoire + " = " + "<b>"+multiplication+"</b></span>";
			document.getElementById('nombre').value = "";
			} else if(entree != multiplication && entree != "" ){ 
				resultat.innerHTML= "<span id='faux'>Faux " + table +" * "+ nombreAleatoire + " = " + "<b>"+multiplication+"</b></span>";
				document.getElementById('nombre').value = "";
				}
		} else{
		resultat.innerHTML="finiii tu a eu <b>" +vrai+"</b> bonnes reponses sur <b>10</b>" ;
			}
}
