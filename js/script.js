function getRecettesTotal()
{
    let recettesTotal = 0;

    for (let recette of recettes)
    {
        recettesTotal += recette.montant;
    }

    return recettesTotal;
}

function getDepensesTotal()
{
    let depensesTotal = 0;

    for (let depense of depenses)
    {
        depensesTotal += depense.montant;
    }

    return depensesTotal;
}


function updateRecettesTotal(nom, valeur)
{
    for (let recette of recettes)
    {
        if (recette.nom === nom)
        {
            recette.montant = parseInt(valeur);
            console.log(recette.montant);
        }
    }

    document.getElementById('recettes-total').innerHTML = `Total: ${getRecettesTotal()}`;
}


function updateDepensesTotal(nom, valeur)
{
    for (let depense of depenses)
    {
        if (depense.nom === nom)
        {
            depense.montant = parseInt(valeur);
            console.log(depense.montant);
        }
    }

    document.getElementById('depenses-total').innerHTML = `Total: ${getDepensesTotal()}`;
}


function updateTotal()
{
    let sum = getRecettesTotal() - getDepensesTotal();
    total.innerHTML = sum;
}


let depensesContainer = document.getElementById('depenses'),
    recettesContainer = document.getElementById('recettes'),
    total = document.getElementById('resultat'),
    inputsRecettes = document.getElementsByClassName('input-recettes'),
    inputsDepenses = document.getElementsByClassName('input-depenses'),

    depenses = [
        {
            nom: "Loyer",
            montant: 0,
        },
        {
            nom: "Eau",
            montant: 0,
        },
        {
            nom: "Electricité",
            montant: 0,
        },
        {
            nom: "Gaz",
            montant: 0,
        },
        {
            nom: "Loyer",
            montant: 0,
        },
        {
            nom: "Internet et Téléphone",
            montant: 0,
        },
        {
            nom: "Assurance Maison",
            montant: 0,
        },
        {
            nom: "Assurance Véhicule",
            montant: 0,
        },
        {
            nom: "Frais de garde",
            montant: 0,
        },
        {
            nom: "Courses",
            montant: 0,
        },
        {
            nom: "Essence",
            montant: 0,
        },
        {
            nom: "Sorties",
            montant: 0,
        },
],

    recettes = [
        {
            nom: "Salaires",
            montant: 0,
        },
        {
            nom: "Aides",
            montant: 0,
        },
        {
            nom: "Rentes",
            montant: 0,
        },
        {
            nom: "Autres",
            montant: 0,
        }
    ],

    epargne = null;


for (let recette of recettes)
{
    let div = document.createElement('div'),
        span = document.createElement('span'),
        input = document.createElement('input');

    span.innerHTML = recette.nom;
    input.value = recette.montant;
    input.id = recette.nom;
    input.classList.add('input-recettes');

    div.appendChild(span);
    div.appendChild(input);

    recettesContainer.appendChild(div);
}

for (let depense of depenses)
{
    let div = document.createElement('div'),
        span = document.createElement('span'),
        input = document.createElement('input');

    span.innerHTML = depense.nom;
    input.value = depense.montant;
    input.id = depense.nom;
    input.classList.add('input-depenses');

    div.appendChild(span);
    div.appendChild(input);

    depensesContainer.appendChild(div);
}

document.getElementById('recettes-total').innerHTML = `Total: ${getRecettesTotal()}`;
document.getElementById('depenses-total').innerHTML =`Total: ${getDepensesTotal()}`;


for (let i = 0; i < inputsRecettes.length; i++)
{
    inputsRecettes[i].addEventListener('blur', function()
    {
        updateRecettesTotal(this.id, this.value);
        updateTotal();
    });
}

for (let o = 0; o < inputsDepenses.length; o++)
{
    inputsDepenses[o].addEventListener('blur', function()
    {
        updateDepensesTotal(this.id, this.value);
        updateTotal();
    });
}

