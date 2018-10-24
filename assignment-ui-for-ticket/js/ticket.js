function Customer() {
    this.firstName = document.getElementById("firstName").value;
    this.lastName = document.getElementById("lastName").value;
    this.age = document.getElementById("age").value;
    this.isSoldier = document.getElementById("isSoldier").checked;
    this.isStudent = document.getElementById("isStudent").checked;
    this.isMtkMember = document.getElementById("isMtkMember").checked;
}

function calculatePrice() {

    var amount = discounts[0].amount;
    var discount = 0.00;

    if (this.age < 7) {
        discount = discounts[1].discountPercent;
    } else if (this.age <= 15) {
        discount = discounts[2].discountPercent;
    } else if (this.age >= 65) {
        discount = discounts[3].discountPercent;
    } else if (this.isSoldier) {
        discount = discounts[4].discountPercent;
    }
    else {
        if (this.isStudent) {
            discount = discounts[5].discountPercent;
        }
        if (this.isMtkMember) {
            discount += discounts[6].discountPercent;
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

var discounts = [
    {
        "category": "Normaalihinta",
        "amount": 16
    },
    {
        "category": "Lapset alle 7 v",
        "discountPercent": 1.00
    },
    {
        "category": "Lapset 7-15 v",
        "discountPercent": 0.50
    },
    {
        "category": "Yli 65-vuotiaat",
        "discountPercent": 0.50
    },
    {
        "category": "Varusmiehet",
        "discountPercent": 0.50
    },
    {
        "category": "Opiskelijat",
        "discountPercent": 0.45
    },
    {
        "category": "Mtk-jäsenet",
        "discountPercent": 0.15
    },
];






