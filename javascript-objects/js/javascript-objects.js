var product1 = new Object();
product1.title = "Pizzoja";
product1.price = 5.00;
product1.count = 0;

var product2 = new Object();
product2.title = "Juomia";
product2.price = 3.00;
product2.count = 0;

function increase(product) {

    if (product == product1) {
        product1.count++;
    }
    else if (product == product2) {
        if (product1.count == 0 || product1.count <= product2.count) {
            alert("Juomia ei voi tilata ilman pizzan tilausta. Juomia ei voi myöskään olla enempää kuin pizzoja.");
        }
        else {
            product2.count++;
        }
    }
    show();
}

function decrease(product) {

    if (product == product1) {
        if (product1.count <= 0) {
            alert("Tuotteen määrä ei voi olla pienempi kuin 0!");
        } else if (product2.count >= product1.count) {
            alert("Juomien määrä ei voi olla suurempi kuin pizzojen! Voit vähentää pizzojen määrää vasta, kun olet ensin vähentänyt juomia.");
        }
        else {
            product1.count--;
        }
    }
    else if (product == product2) {
        if (product2.count <= 0) {
            alert("Tuotteen määrä ei voi olla pienempi kuin 0!");
        }
        else {
            product2.count--;
        }
    }

    show();
}

function show() {
    document.getElementById("pizzas").innerHTML = "<h3> " + product1.count + "</h3>";
    document.getElementById("drinks").innerHTML = "<h3> " + product2.count + "</h3>";

    let finalPrice = product1.price * product1.count + product2.price * product2.count;
    document.getElementById("finalPrice").innerHTML = "<h3>Yhteensä " + finalPrice.toFixed(2) + " €</h3>";
}

