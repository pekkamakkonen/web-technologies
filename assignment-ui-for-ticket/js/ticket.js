function Customer() {
    this.firstName = document.getElementById("firstName").value;
    this.lastName = document.getElementById("lastName").value;
    this.age = document.getElementById("age").value;
    this.isSoldier = document.getElementById("isSoldier").checked;
    this.isStudent = document.getElementById("isStudent").checked;
    this.isMtkMember = document.getElementById("isMtkMember").checked;
}

function calculatePrice() {

    var amount = 16.00;
    var discount = 0.00;

    if (age < 7) {
        discount = 1.00;
    } else if (age <= 15 || age >= 65 || isSoldier == true) {
        discount = 0.50;
    } else {
        if (isStudent == true) {
            discount = 0.45;
        }
        if (isMtkMember == true) {
            discount += 0.15;
        }
    }

    amount = amount - (amount * discount);
    document.getElementById("finalPrice").innerHTML = amount.toFixed(2) + " €";
}

function showPrices() {
    var content = document.getElementById("prices");

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}



