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

    if (this.age < 7) {
        discount = 1.00;
    } else if (this.age <= 15 || this.age >= 65 || this.isSoldier) {
        discount = 0.50;
    } else {
        if (this.isStudent) {
            discount = 0.45;
        }
        if (this.isMtkMember) {
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



