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

    var discountGroup1 = discounts[1].discountPercent;
    var discountGroup2 = discounts[2].discountPercent;
    var discountGroup3 = discounts[3].discountPercent;
    var discountGroup4 = discounts[4].discountPercent;
    var discountGroup5 = discounts[5].discountPercent;
    var discountGroup6 = discounts[6].discountPercent;
    var discountGroup7 = discountGroup5 + discountGroup6;

    if (this.age < 7) {
        discount = discountGroup1;
    }
    if (this.age <= 15 && discountGroup2 > discount) {
        discount = discountGroup2;
    }
    if (this.age >= 65 && discountGroup3 > discount) {
        discount = discountGroup3;
    }
    if (this.isSoldier && this.age >= 18 && discountGroup4 > discount) {
        discount = discountGroup4;
    }
    if (this.isStudent && discountGroup5 > discount) {
        discount = discountGroup5;
    }
    if (this.isMtkMember && discountGroup6 > discount) {
        discount = discountGroup6;
    }
    if (this.isStudent && this.isMtkMember && discountGroup7 >= discount) {
        discount = discountGroup7;
    }

    amount = amount - (amount * discount);
    document.getElementById("finalPrice").innerHTML = amount.toFixed(2) + " €";
}

function showPrices() {

    var listOfPrices = "";
    listOfPrices = listOfPrices + "<li>" + discounts[0].category + " " + discounts[0].amount.toFixed(2) + " €</li>";

    for (var i = 1; i < discounts.length; i++) {

        var discountInfo = discounts[i].discountPercent * 100 + " % alennus";
        var discountPercent = discounts[i].discountPercent;

        if (discountPercent == 1.00) {
            discountInfo = "ilmaiseksi";
        }
        listOfPrices = listOfPrices + "<li>" + discounts[i].category + " " + discountInfo + " </li>";
    }

    listOfPrices = listOfPrices + "</ul>";
    document.getElementById("listOfPrices").innerHTML = listOfPrices;

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
        "amount": 16.00
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
        "category": "Eläkeläiset",
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






