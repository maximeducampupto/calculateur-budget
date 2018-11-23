function getRecettesTotal()
{
    let temp = 0;

    for (let recette of recettes)
    {
        temp += recette.montant;
    }

    return temp;
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
        }
    }

    recettesTotal.innerHTML = `Total: ${getRecettesTotal()}`;
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








let epargneInput = document.getElementById('epargne'),
    recetteSource = document.getElementById('recette-source'),
    recetteMontant = document.getElementById('recette-montant'),
    recetteAjout = document.getElementById('recettes-ajout'),
    recettesTotal = document.getElementById('recettes-total'),
    depenseSource = document.getElementById('depense-source'),
    depenseMontant = document.getElementById('depense-montant'),
    depenseAjout = document.getElementById('depense-ajout'),
    epargne = null,

    depenses = [],

    recettes = [];









epargneInput.addEventListener('blur', function(e) {
    epargne = e.target.value;
    alert(epargne);
});

recetteAjout.addEventListener('click', function(){

    let source = recetteSource.value,
        montant = parseInt(recetteMontant.value),
        temp = {source, montant};


    recettes.push(temp);
    updateRecettesTotal();
});

depenseAjout.addEventListener('click', function(){

    let source = depenseSource.value,
        montant = parseInt(depenseMontant.value),
        temp = {source, montant};

    depenses.push(temp);
    updateDepensesTotal();
});


/*

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


 */