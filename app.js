

//Ajout de fontAwesome sur Gmail
var cdnFontAwesome = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css">';
document.querySelector("head").insertAdjacentHTML('afterbegin', cdnFontAwesome);


//Insertion du bouton de lecture vidéo
var playerButton = '<div id="addButton" class="T-I J-J5-Ji aQv T-I-ax7 L3"><i class="fa fa-play" aria-hidden="true" style="color:#FFFFFF; font-size:10px;"></i></div>';

// Détection d'un click sur un mail
function insertVideoPlayer(){
	document.querySelectorAll("div.ae4.aDM.nH.oy8Mbf")[0].addEventListener('click', event => {
		setTimeout(() => {
			if(!document.querySelector('#addButton')){
				document.querySelector('div.aQw').insertAdjacentHTML('beforeend', playerButton);
				document.getElementById("addButton").addEventListener('click', event => {
					// Récupére le lien de la vidéo du mail ouvert
					var videoLink = document.querySelector("a.aQy.aZL.e").getAttribute("href");
					// Injecte le lien dans un player, et injecte le player dans le mail
					var videoPlayer = '<video controls width="250"><source src=' + videoLink + ' type="video/webm"> </video>';
					document.querySelector('div.aQH').insertAdjacentHTML('beforeend', videoPlayer);
				});
			}
		}, 500);
	});
}

// S'assurer du chargement complet pour éviter les classes inexistantes
window.onload = insertVideoPlayer;