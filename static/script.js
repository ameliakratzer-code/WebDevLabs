let x = 5;
let y = 7;
let z = x + y;
console.log(z);
let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z)
} else {
    console.log("good job!")
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array1) {
    array1.forEach(val => {
        if (val == "Banana") {
            alert("Found a banana in the array");
        }
    });
}

// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let E = document.getElementById("SiteIntro");
    if (5 <= h && h < 12) {
        console.log("Good morning");
        E.innerHTML = "Good morning, my name is Amelia";
    }
    else if (12 <= h && h < 18) {
        console.log("Good afternoon");
        E.innerHTML = "Good afternoon, my name is Amelia";
    }
    else if (18 <= h && h < 20) {
        console.log("Good evening");
        E.innerHTML = "Good evening, my name is Amelia";
    }
    else if ((20 <= h && h < 24) || (0 < h && h < 5)) {
        console.log("Good night");
        E.innerHTML = "Good night, my name is Amelia";
    }
}

if (window.location.href.endsWith("index.html")) {
    greetingFunc();
}

// Lab 4
function addYear() {
    let newD = new Date();
    let currYear = newD.getFullYear();
    let T = document.getElementById("copyYear");
    T.innerHTML = `&copy; ${currYear}`;
}

// function showList() {
//     let funList = document.getElementById("funItems");
//     funList.style.display = "block";
//     let showButton = document.getElementById("showButton");
//     showButton.style.display = "none";
// }

if (window.location.href.endsWith("index.html")) {
    // jQuery
    $("#readMore").click(function() {
        $("#longerBio").show()
        $("#readMore").hide()
        $("#readLess").show()
    });

    $("#readLess").click(function() {
        $("#longerBio").hide()
        $("#readMore").show()
        $("#readLess").hide()
    });
}

function validateForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let errorMsg = document.getElementById("missingRequired");
    if (!name.checkValidity() && !email.checkValidity() && !message.checkValidity()) {
        errorMsg.innerHTML = "Please fill out the form correctly, so I can get back to you :)"
    }
    else if (!name.checkValidity()) {
        errorMsg.innerHTML = "Please enter a valid name."
    }
    else if (!email.checkValidity()) {
        errorMsg.innerHTML = "Please enter a valid email."
    }
    else if (!message.checkValidity()) {
        errorMsg.innerHTML = "Please enter a valid message."
    }
}

// Lab 5
function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
        console.error("There was an error fetching advice", error);
        document.getElementById("adviceText").innerText = "Something went wrong. Please try again.";
    });
}