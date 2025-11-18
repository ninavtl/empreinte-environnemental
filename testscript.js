// Cette fonction sera appelée quand l'utilisateur clique sur le bouton
        function traiterValeur() {
            // On récupère la valeur saisie dans le champ
            var valeur = document.getElementById('tps_téléphone').value;
            // Exemple de calcul avec la valeur
            var resultat = parseInt(valeur) * 2;
            // On affiche le résultat
            document.getElementById('affichage').textContent = "Résultat x2 : " + resultat;
        }

//  emission_appareil = (temps_utilisation × facteur_utilisation) + (stockage_cloud × facteur_stockage) + Emission_fabrication_annuelle

emission_tel = 0,04 //kg CO₂ / h
emission_ordi = 0,05 //kg CO₂ / h
emission_tablette = 0,08 //kg CO₂ / h

// emission_fabrication_annuelle = Emission_totale_fabrication / Durée_de_vie emf

emf_tel = 80 //kg CO₂
emf_ordi = 100 //kg CO₂
emf_tablette = 60 //kg CO₂

// emission_reseau_annuelle = Go_annuel_total × facteur_reseau

em_fibre = 0,02 //kgCO₂/Go
em_ADSL = 0,05 //kgCO₂/Go
em_4G = 0,10 //kgCO₂/Go
em_5G = 0,15 //kgCO₂/Go

function emission_appareil() {
        var valeur = document.getElementById('tps_téléphone').value;
        var résultat = 


                // --- FACTEURS D'ÉMISSIONS ---
// utilisation (par heure)
const em_tel = 0.04;      // kg CO2 / h
const em_ordi = 0.05;     // kg CO2 / h
const em_tablette = 0.08; // kg CO2 / h

// fabrication totale (kg CO2)
const emf_tel = 80;
const emf_ordi = 100;
const emf_tablette = 60;

// réseau (kg CO2 / Go)
const em_fibre = 0.02;
const em_ADSL  = 0.05;
const em_4G    = 0.10;
const em_5G    = 0.15;

// -------------------------

// fonction pour lire le réseau sélectionné
function lireReseau(nom) {
    let r = document.querySelector(`input[name="${nom}"]:checked`);
    if (!r) return null;
    return r.value;
}

// transforme le réseau en facteur CO₂
function facteurReseau(type) {
    switch(type) {
        case "fibre": return em_fibre;
        case "ADSL": return em_ADSL;
        case "4G": return em_4G;
        case "5G": return em_5G;
        default: return 0;
    }
}

function traiterValeur() {

    // ---------- TELEPHONE ----------
    let tps_tel = parseFloat(document.getElementById("tps_téléphone").value);
    let cloud_tel = parseFloat(document.getElementById("stockage_cloud_tel").value);
    let vie_tel = parseFloat(document.getElementById("duré_vie_tel").value);
    let go_tel = parseFloat(document.getElementById("go_utilisé_tel").value);

    let reseau_tel = lireReseau("reseau_tel");
    let facteur_tel = facteurReseau(reseau_tel);

    let fab_tel_annuelle = emf_tel / vie_tel;
    let utilisation_tel = tps_tel * em_tel * 365; // par an
    let reseau_tel_em = go_tel * 12 * facteur_tel;

    let total_tel = utilisation_tel + fab_tel_annuelle + reseau_tel_em;


    // ---------- ORDINATEUR ----------
    let tps_ordi = parseFloat(document.getElementById("tps_ordinateur").value);
    let cloud_ordi = parseFloat(document.getElementById("stockage_cloud_ordi").value);
    let vie_ordi = parseFloat(document.getElementById("duré_vie_ordi").value);
    let go_ordi = parseFloat(document.getElementById("go_utilisé_ordi").value);

    let reseau_ordi = lireReseau("reseau_ordi");
    let facteur_ordi = facteurReseau(reseau_ordi);

    let fab_ordi_annuelle = emf_ordi / vie_ordi;
    let utilisation_ordi = tps_ordi * em_ordi * 365;
    let reseau_ordi_em = go_ordi * 12 * facteur_ordi;

    let total_ordi = utilisation_ordi + fab_ordi_annuelle + reseau_ordi_em;


    // ---------- TABLETTE ----------
    let tps_tab = parseFloat(document.getElementById("tps_tablette").value);
    let cloud_tab = parseFloat(document.getElementById("stockage_cloud_tablette").value);
    let vie_tab = parseFloat(document.getElementById("duré_vie_tablette").value);
    let go_tab = parseFloat(document.getElementById("go_utilisé_tablette").value);

    let reseau_tab = lireReseau("reseau_tablette");
    let facteur_tab = facteurReseau(reseau_tab);

    let fab_tab_annuelle = emf_tablette / vie_tab;
    let utilisation_tab = tps_tab * em_tablette * 365;
    let reseau_tab_em = go_tab * 12 * facteur_tab;

    let total_tab = utilisation_tab + fab_tab_annuelle + reseau_tab_em;


    // ---------- AFFICHAGE ----------
    document.getElementById("affichage").innerHTML = 
        "Téléphone : " + total_tel.toFixed(2) + " kg CO₂/an<br>" +
        "Ordinateur : " + total_ordi.toFixed(2) + " kg CO₂/an<br>" +
        "Tablette : " + total_tab.toFixed(2) + " kg CO₂/an<br>" +
        "<br><strong>Total : " + (total_tel + total_ordi + total_tab).toFixed(2) + " kg CO₂/an</strong>";
}



