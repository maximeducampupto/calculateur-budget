/*
Makes the sum of all incomes
Returns a number
 */
function getRecettesTotal()
{
    let temp = 0;
    for (let recette of recettes)
    {
        temp += recette.montant;
    }

    return temp;
}

/*
Makes the sum of all expenses
Returns a number
 */
function getDepensesTotal()
{
    let temp = 0;
    for (let depense of depenses)
    {
      temp += depense.montant;
    }

    return temp;
}

/*
If user hasn't specified a savings value, returns the total value of all incomes minus all expenses
Else it returns a new savings value based on (savings + income) - expenses
Returns a number
 */
function getTotal()
{
    if (epargne == null)
    {
        return getRecettesTotal() - getDepensesTotal();
    } else {
        return (epargne + getRecettesTotal()) - getDepensesTotal();
    }
}

/*
Handles the display of the "total" screen
Creates list items based on the recettes and depenses arrays to be appended onto existing uls
 */
function displayScreenTotal()
{
    h1_total.innerHTML = `Total des opérations: ${getTotal()}`;

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

    document.getElementById('screen-calculateur').classList.remove('calculateurToRight');
    document.getElementById('screen-total').classList.remove('screenTotalToRight');

    document.getElementById('screen-calculateur').classList.add('calculateurToLeft');
    document.getElementById('screen-total').classList.add('screenTotalToLeft');
}

/*
Handles the display of the "calculateur" screen
 */
function displayScreenCalculateur()
{
    document.getElementById('screen-calculateur').classList.remove('calculateurToLeft');
    document.getElementById('screen-total').classList.remove('screenTotalToLeft');

    document.getElementById('screen-calculateur').classList.add('calculateurToRight');
    document.getElementById('screen-total').classList.add('screenTotalToRight');
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
    h1_total = document.getElementById('h1-total'),
    calculateurResetButton= document.getElementById('calculateur-reset'),
    retourButton = document.getElementById('retour'),

    epargne = null,

    depenses = [],

    recettes = [];


/*
Updates the "savings" (var name: epargne) variable base on user input
 */
epargneInput.addEventListener('blur', function(e) {
    let reg = /^[0-9]*$/,
        value = e.target.value;

    if (value.match(reg))
    {
        epargne = parseInt(e.target.value);
    } else {
        alert('Must be a number');
    }
});

/*
Creates and add an "income" (fr: "recette") object based on user input and pushes it into the recettes array
 */
recetteAjout.addEventListener('click', function(){

    let  reg = /^[0-9]*$/;

    if (recetteMontant.value.match(reg))
    {
        let source = recetteSource.value,
            montant = parseInt(recetteMontant.value),
            temp = {source, montant};

        recettes.push(temp);
        recettesTotal.innerHTML = `Total des recettes: ${getRecettesTotal()}`;
    } else {
        alert('Must be a number');
    }
});

/*
Creates and add an "expense" (fr: "depense") object based on user input and pushes it into the depenses array
 */
depenseAjout.addEventListener('click', function(){

    let  reg = /^[0-9]*$/;

    if (depenseMontant.value.match(reg))
    {
        let source = depenseSource.value,
            montant = parseInt(depenseMontant.value),
            temp = {source, montant};

        depenses.push(temp);
        depenseTotal.innerHTML = `Total des dépenses: ${getDepensesTotal()}`;
    } else {
        alert('Must be a number');
    }


});

/*
Reset function, clears all input fields, resets all variables
 */
calculateurResetButton.addEventListener('click', function() {
    depenses = [];
    recettes = [];
    epargne = 0;

    recettesTotal.innerHTML = "";
    depenseTotal.innerHTML = "";
    h1_total.innerHTML = "";
    recapRecettesTotal.innerHTML = "";
    recapDepensesTotal.innerHTML = "";

    recetteSource.value = "";
    recetteMontant.value = "";
    depenseSource.value = "";
    depenseMontant.value = "";

    while (recettesRecapList.firstChild) {
        recettesRecapList.removeChild(recettesRecapList.firstChild);
    }

    while (depensesRecapList.firstChild) {
        depensesRecapList.removeChild(depensesRecapList.firstChild);
    }
});

/*
Calls for the display of the "total" screen
 */
buttonGetTotal.addEventListener('click', function() {
   displayScreenTotal();
});

/*
Calls for the display of the "calculateur" screen
 */
retourButton.addEventListener('click', function() {
    displayScreenCalculateur();
});