let taches = [];
let termine = [];

function ajouterTache() {
    const champTexte = document.querySelector('input');
    const description = champTexte.value.trim();

    if (description === "") {
        alert("Veuillez entrer une description de tâche.");
        return;
    }

    taches.push(description);
    termine.push(false);
    champTexte.value = '';
    ajouterTacheHTML(taches.length - 1);
}

function ajouterTacheHTML(index) {
    const tbody = document.querySelector('table tbody');
    const nouvelleLigne = `
        <tr>
            <td>
                <input type="checkbox" id="${index}" ${termine[index] ? "checked" : ""} onchange="cocher(event)">
            </td>
            <td>${index + 1}</td>
            <td ${termine[index] ? 'class="barre"' : ''}>${taches[index]}</td>
            <td><button onclick="supprimerTache(${index})">Supprimer</button></td>
        </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', nouvelleLigne);
}

function cocher(event) {
    const caseId = parseInt(event.target.id);
    termine[caseId] = event.target.checked;
    majTableau();
}

function supprimerTache(index) {
    taches.splice(index, 1);
    termine.splice(index, 1);
    majTableau();
}

function filtrerTaches(terminees) {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = "";
    taches.forEach((tache, index) => {
        if (terminees === null || termine[index] === terminees) {
            ajouterTacheHTML(index);
        }
    });
}

function majTableau() {
    filtrerTaches(null);
}

function afficherToutes() {
    filtrerTaches(null);
}

function afficherTerminees() {
    filtrerTaches(true);
}

function afficherNonTerminees() {
    filtrerTaches(false);
}
