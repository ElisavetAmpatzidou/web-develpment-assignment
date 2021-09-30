let cost;
function gId(name) {
    return document.getElementById(name);
}
function gQS(name) {
    return document.querySelector(name);
}

function changeFunc() {
    var selectBox = document.getElementById("selectBox");
    if(selectBox.options[selectBox.selectedIndex].value == "0"){
        gQS('img').src = "";
    }
    else{
        var selectedId = selectBox.options[selectBox.selectedIndex].id;
        gQS('img').src = "./iconsExercise/"+selectedId+".png";
    }
   }
//sweet radio button clicked
gId('sweet').addEventListener('click', function () {
    gId('sw').style.display = 'block';
    gId('sav').style.display = 'none';
    //enable sweet inputs
    let sws = gId('sw').getElementsByTagName('input');
    for (let i = 0; i < sws.length; i++) {
        if (sws[i].type == 'radio' && sws[i].disabled) {
            sws[i].disabled = false;
        }
    }
    //clear savory inputs
    let sav = gId('sav').getElementsByTagName('input');
    for (let i = 0; i < sav.length; i++) {
        if (sav[i].checked) {
            sav[i].checked = false;
        }
    }
    gQS('h4').innerHTML = " ";
});

//savory radio button clicked
gId('savory').addEventListener('click', function () {
    gId('sav').style.display = 'block';
    gId('sw').style.display = 'none';
    //enable savory inputs
    let sav = gId('sav').getElementsByTagName('input');
    for (let i = 0; i < sav.length; i++) {
        if (sav[i].type == 'radio' && sav[i].disabled) {
            sav[i].disabled = false;
        }
    }
    //clear sweet inputs
    let sws = gId('sw').getElementsByTagName('input');
    for (let i = 0; i < sws.length; i++) {
        if (sws[i].checked) {
            sws[i].checked = false;
        }
    }

    gQS('h4').innerHTML = " ";
});

//when a choco selection clicked
function selChoco(){
    let sws = gId('sw').getElementsByTagName('input');
    for (let i = 0; i < sws.length; i++) {
        if (sws[i].type == 'checkbox' && sws[i].disabled) {
            sws[i].disabled = false;
        }
    }
    let sav = gId('sav').getElementsByTagName('input');
    for (let i = 0; i < sav.length; i++) {
        if (sav[i].type == 'checkbox' && sav[i].disabled == false) {
            sav[i].disabled = true;
        }
    }
}

//when a cheese selection clicked
function selCheese(){
    let sav = gId('sav').getElementsByTagName('input');
    for (let i = 0; i < sav.length; i++) {
        if (sav[i].type == 'checkbox' && sav[i].disabled) {
            sav[i].disabled = false;
        }
    }
    let sws = gId('sw').getElementsByTagName('input');
    for (let i = 0; i < sws.length; i++) {
        if (sws[i].type == 'checkbox' && sws[i].disabled== false) {
            sws[i].disabled = true;
        }
    }
}

//cost culculator
gId('calculate').addEventListener('click', function () {
    cost = 0;

    if (gQS('select').value == "0") {
        gQS('h4').innerHTML = "Δεν είναι εφικτός ο υπολογισμός του κόστους. Πρέπει να επιλέξετε μέγεθος.";
    }
    else {
        x = gQS('select').value;

        let inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                cost += Number(inputs[i].value);
            }
        }
        // total result after culculating cost
        gQS('h4').innerHTML = "ΚΟΣΤΟΣ: " + (Number(cost) + Number(x)).toFixed(2);

    }

});

//clear all 
gId('clear').addEventListener('click', function (ev) {
    gQS('select').options.selectedIndex = 0;
    gQS('img').src = "";
    gQS('h4').innerHTML = " ";
    gId('sw').style.display = 'block';
    gId('sav').style.display = 'block';

    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            inputs[i].checked = false;
        }
    }
    let savIn = gId('sav').getElementsByTagName('input')
    for (let i = 0; i < savIn.length; i++) {
        if (!savIn[i].disabled) {
            savIn[i].disabled = true;
        }
    }
    let swIn = gId('sw').getElementsByTagName('input')
    for (let i = 0; i < swIn.length; i++) {
        if (!swIn[i].disabled) {
            swIn[i].disabled = true;
        }
    }
});