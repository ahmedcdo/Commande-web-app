let produits = JSON.parse(localStorage.getItem("produits")) || [];

const liste = document.getElementById("listeProduits");
const nbProduits = document.getElementById("nbProduits");
const nbCommandes = document.getElementById("nbCommandes");

function ajouterProduit(){

    const categorie = document.getElementById("categorie").value;
    const produit = document.getElementById("produit").value.trim();
    const quantite = document.getElementById("quantite").value;

    if(produit=="" || quantite==""){
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

    liste.innerHTML="";

    produits.forEach((item,index)=>{

        liste.innerHTML +=`
        <tr>
        <td>${item.categorie}</td>
        <td>${item.produit}</td>
        <td>${item.quantite}</td>

        <td>

        <button onclick="modifier(${index})">
        ✏️
        </button>

        <button class="supprimer" onclick="supprimer(${index})">
        🗑️
        </button>

        </td>

        </tr>
        `;

    });

    nbProduits.innerHTML=produits.length;
    nbCommandes.innerHTML=produits.length;

}

function supprimer(index){

    if(confirm("Supprimer ce produit ?")){

        produits.splice(index,1);

        sauvegarder();

        afficher();

    }

}

function modifier(index){

    document.getElementById("categorie").value=produits[index].categorie;

    document.getElementById("produit").value=produits[index].produit;

    document.getElementById("quantite").value=produits[index].quantite;

    produits.splice(index,1);

    sauvegarder();

    afficher();

}

function sauvegarder(){

    localStorage.setItem("produits",JSON.stringify(produits));

}

afficher();
