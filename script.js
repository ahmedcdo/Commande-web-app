let produits = [];

function ajouterProduit() {
    const produit = document.getElementById("produit").value.trim();
    const quantite = document.getElementById("quantite").value;

    if (produit === "" || quantite === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    produits.push({
        produit: produit,
        quantite: quantite
    });

    afficherProduits();

    document.getElementById("produit").value = "";
    document.getElementById("quantite").value = "";
}

function afficherProduits() {
    const liste = document.getElementById("listeProduits");
    liste.innerHTML = "";

    produits.forEach((item, index) => {
        liste.innerHTML += `
        <tr>
            <td>${item.produit}</td>
            <td>${item.quantite}</td>
            <td>
                <button class="supprimer" onclick="supprimerProduit(${index})">
                    Supprimer
                </button>
            </td>
        </tr>`;
    });

    localStorage.setItem("produits", JSON.stringify(produits));
}

function supprimerProduit(index) {
    produits.splice(index, 1);
    afficherProduits();
}

window.onload = function () {
    const data = localStorage.getItem("produits");

    if (data) {
        produits = JSON.parse(data);
        afficherProduits();
    }
};
