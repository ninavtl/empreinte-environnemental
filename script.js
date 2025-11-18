// Cette fonction sera appelée quand l'utilisateur clique sur le bouton
        function traiterValeur() {
            // On récupère la valeur saisie dans le champ
            var valeur = document.getElementById('champ').value;
            // Exemple de calcul avec la valeur
            var resultat = parseInt(valeur) * 2;
            // On affiche le résultat
            document.getElementById('affichage').textContent = "Résultat x2 : " + resultat;
        }
