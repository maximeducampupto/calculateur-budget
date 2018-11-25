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
    let temp = 0;
    for (let depense of depenses)
    {
      temp += depense.montant;
    }

    return temp;
}

function getTotal()
{
    console.log(getRecettesTotal());
    console.log(getDepensesTotal());
    if (epargne == null)
    {
        return getRecettesTotal() - getDepensesTotal();
    } else {
        return (epargne + getRecettesTotal()) - getDepensesTotal();
    }
}

function displayScreenTotal()
{
    h2_total.innerHTML = `Total des opérations: ${getTotal()}`;

   for (let recette of recettes)
   {
       let li = document.createElement('li');
       li.innerHTML = `${recette.source} : ${recette.montant}`;
       recettesRecapList.appendChild(li);
   }

    for (let depense of depenses)
    {
        let li = document.createElement('li');
        li.innerHTML = `${depense.source} : ${depense.montant}`;
        depensesRecapList.appendChild(li);
    }

    recapRecettesTotal.innerHTML = `Total des recettes: ${getRecettesTotal()}`;
    recapDepensesTotal.innerHTML = `Total des dépenses: ${getDepensesTotal()}`;

    handleAnimations();
}

function handleAnimations()
{
    document.getElementById('screen-calculateur').classList.add('calculateurToLeft');
    document.getElementById('screen-total').classList.add('screenTotalToLeft');
}

let epargneInput = document.getElementById('epargne'),
    recetteSource = document.getElementById('recette-source'),
    recetteMontant = document.getElementById('recette-montant'),
    recetteAjout = document.getElementById('recettes-ajout'),
    recettesTotal = document.getElementById('recettes-total'),
    recettesRecapList = document.getElementById('recettes-recap-list'),
    recapRecettesTotal = document.getElementById('recap-recettes-total'),
    depenseSource = document.getElementById('depense-source'),
    depenseMontant = document.getElementById('depense-montant'),
    depenseAjout = document.getElementById('depense-ajout'),
    depenseTotal = document.getElementById('depenses-total'),
    depensesRecapList = document.getElementById('depenses-recap-list'),
    recapDepensesTotal = document.getElementById('recap-depenses-total'),
    buttonGetTotal = document.getElementById('get-total'),
    h2_total = document.getElementById('h2-total'),

    epargne = null,

    depenses = [],

    recettes = [];



epargneInput.addEventListener('blur', function(e) {
    epargne = parseInt(e.target.value);
});

recetteAjout.addEventListener('click', function(){

    let source = recetteSource.value,
        montant = parseInt(recetteMontant.value),
        temp = {source, montant};


    recettes.push(temp);
    recettesTotal.innerHTML = `Total des recettes: ${getRecettesTotal()}`;
});

depenseAjout.addEventListener('click', function(){

    let source = depenseSource.value,
        montant = parseInt(depenseMontant.value),
        temp = {source, montant};

    depenses.push(temp);
    depenseTotal.innerHTML = `Total des dépenses: ${getDepensesTotal()}`;
});

buttonGetTotal.addEventListener('click', function() {
   displayScreenTotal();
});