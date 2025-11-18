// --- FACTEURS D'ÉMISSIONS ---
// utilisation (par heure)
const em_tel = 0.04;
const em_ordi = 0.05;
const em_tablette = 0.08;

// fabrication totale (kg CO2)
const emf_tel = 80;
const emf_ordi = 100;
const emf_tablette = 60;

// réseau (kg CO2 / Go)
const em_fibre = 0.02;
const em_ADSL  = 0.05;
const em_4G    = 0.10;
const em_5G    = 0.15;

// récupère une valeur -> renvoie 0 si vide
function lire(id) {
    let v = parseFloat(document.getElementById(id).value);
    return isNaN(v) ? 0 : v;
}

// lire réseau -> renvoie 0 si pas choisi
function lireReseau(name) {
    let r = document.querySelector(`input[name="${name}"]:checked`);
    if (!r) return 0; 
    switch (r.value) {
        case "fibre": return em_fibre;
        case "ADSL":  return em_ADSL;
        case "4G":    return em_4G;
        case "5G":    return em_5G;
        default: return 0;
    }
}

function traiterValeur() {

    // ---------- TELEPHONE ----------
    let tps_tel = lire("tps_téléphone");
    let vie_tel = lire("duré_vie_tel");
    let go_tel = lire("go_utilisé_tel");

    let facteur_tel = lireReseau("reseau_tel");

    let fab_tel_annuelle = vie_tel > 0 ? (emf_tel / vie_tel) : 0;
    let utilisation_tel = tps_tel * em_tel * 365;
    let reseau_tel_em = go_tel * 12 * facteur_tel;

    let total_tel = utilisation_tel + fab_tel_annuelle + reseau_tel_em;


    // ---------- ORDINATEUR ----------
    let tps_ordi = lire("tps_ordinateur");
    let vie_ordi = lire("duré_vie_ordi");
    let go_ordi = lire("go_utilisé_ordi");

    let facteur_ordi = lireReseau("reseau_ordi");

    let fab_ordi_annuelle = vie_ordi > 0 ? (emf_ordi / vie_ordi) : 0;
    let utilisation_ordi = tps_ordi * em_ordi * 365;
    let reseau_ordi_em = go_ordi * 12 * facteur_ordi;

    let total_ordi = utilisation_ordi + fab_ordi_annuelle + reseau_ordi_em;


    // ---------- TABLETTE ----------
    let tps_tab = lire("tps_tablette");
    let vie_tab = lire("duré_vie_tablette");
    let go_tab = lire("go_utilisé_tablette");

    let facteur_tab = lireReseau("reseau_tablette");

    let fab_tab_annuelle = vie_tab > 0 ? (emf_tablette / vie_tab) : 0;
    let utilisation_tab = tps_tab * em_tablette * 365;
    let reseau_tab_em = go_tab * 12 * facteur_tab;

    let total_tab = utilisation_tab + fab_tab_annuelle + reseau_tab_em;


    // ---------- AFFICHAGE ----------
    document.getElementById("affichage").innerHTML =
        "Téléphone : " + total_tel.toFixed(2) + " kg CO₂/an<br>" +
        "Ordinateur : " + total_ordi.toFixed(2) + " kg CO₂/an<br>" +
        "Tablette : " + total_tab.toFixed(2) + " kg CO₂/an<br><br>" +
        "<strong>Total : " + (total_tel + total_ordi + total_tab).toFixed(2) + " kg CO₂/an</strong>";
}
