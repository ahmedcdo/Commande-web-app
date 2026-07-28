let produits = JSON.parse(localStorage.getItem("produits")) || [];

function ajouterProduit() {

    const categorie = document.getElementById("categorie").value;
    const produit = document.getElementById("produit").value;
    const quantite = document.getElementById("quantite").value;

    if(produit==="" || quantite===""){
        alert("Veuillez remplir tous les champs");
        return;
    }

    produits.push({
        categorie,
        produit,
        quantite
    });

    sauvegarder();
    afficher();

    document.getElementById("produit").value="";
    document.getElementById("quantite").value="";
}

function afficher(){

    let html="";

    produits.forEach((p,index)=>{

        html += `
        <tr>
            <td>${p.categorie}</td>
            <td>${p.produit}</td>
            <td>${p.quantite}</td>
            <td>
                <button class="supprimer" onclick="supprimer(${index})">
                Supprimer
                </button>
            </td>
        </tr>
        `;

    });

    document.getElementById("listeProduits").innerHTML=html;

}

function supprimer(index){

    produits.splice(index,1);

    sauvegarder();

    afficher();

}

function sauvegarder(){

    localStorage.setItem("produits",JSON.stringify(produits));

}

afficher();
