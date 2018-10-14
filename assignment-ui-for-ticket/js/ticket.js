function calculatePrice() {

    var amount = 16.00;
    var discount = 0.00;
    var age = document.getElementById("age").value;
    var isSoldier;
    var isStudent;
    var isMtkMember;

    if (age < 7) {
        discount = 1.00;
    } else if (age <= 15 || age >= 65 || document.getElementById("isSoldier").checked) {
        discount = 0.50;
    } else {
        if (document.getElementById("isStudent").checked) {
            discount = 0.45;
        }
        if (document.getElementById("isMtkMember").checked) {
            discount += 0.15;
        }
    }

    amount = amount - (amount * discount);
    document.getElementById("finalPrice").innerHTML = amount.toFixed(2) + " €";
}





