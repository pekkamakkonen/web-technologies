var product1 = new Object();
product1.title = "Pizzoja";
product1.price = 5.00;
product1.count = 0;

var product2 = new Object();
product2.title = "Juomia";
product2.price = 3.00;
product2.count = 0;

    function increase() {
        product1.count++;
        console.log(product1.count);
    }

    function decrease() {
        if (product1.count <= 0) {
            alert("Tuotteen määrä ei voi olla pienempi kuin 0!");
        } else {
            product1.count--;
        }
        console.log(product1.count)
    }

    let finalPrice = product1.price * product1.count;
    console.log(finalPrice.toFixed(2));

    function show() {
        
    }