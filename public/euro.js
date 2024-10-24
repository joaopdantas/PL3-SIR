
document.addEventListener('DOMContentLoaded', (e) => {
    button = document.getElementById("genBtn");

    button.addEventListener('click', (e) => {
        // genNewBet();
        // genJSONBet();

        getNewBet();
    });


    function getNewBet() {
        fetch('http://localhost:3000/euro')
            .then((response) => response.json())
            .then (bet => {
                //debugger;
                console.log(bet.numbers);


    theOLNumbers = document.getElementById('olMain');
    theOLNumbers.innerHTML = "";

    bet.numbers.forEach(number => {
        newLi = document.createElement("li");
        newLi.innerHTML = number;
        theOLNumbers.appendChild(newLi);
    });

    

    theOLStars = document.getElementById('olStars');
    theOLStars.innerHTML = "";

    bet.stars.forEach(star => {
        newLi = document.createElement("li");
        newLi.innerHTML = star;
        theOLStars.appendChild(newLi);
    });

                console.log(response);
    })
            .catch((error) => console.error(error))
    }

    /*
    button.addEventListener('click', function (e) {
        console.log("same event, another handle");
    });
     button.addEventListener('click', addtext);
    */
});


function genRandomNumbers(n, min, max) {
    // return an array with n unique integers between min and max
    let setOfNumbers = new Set();
    while (setOfNumbers.size < n) {
        newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setOfNumbers.add(newNumber);
    }
    return [...setOfNumbers].sort((a,b) => a-b);
}

function genJSONBet() {

    let numbers = genRandomNumbers(5, 1, 50);
    let stars = genRandomNumbers(2, 1, 12);

    let newBet = {
        timeStamp: new Date(),
        numbers: numbers,
        stars: stars,
    }

    console.log(newBet);

    JSONBet = JSON.stringify(newBet);

    console.log(JSONBet);

    return JSONBet;

}

function genNewBet() {

    //numbers = genRandomNumbers(5, 1, 50);
    //stars = genRandomNumbers(2, 1, 12);

    //console.log(numbers, stars);

    let JSONbet = genJSONBet();
    let bet = JSON.parse(JSONbet);

    console.log(bet);
   
    theOLNumbers = document.getElementById('olMain');
    theOLNumbers.innerHTML = "";

    bet.numbers.forEach(number => {
        newLi = document.createElement("li");
        newLi.innerHTML = number;
        theOLNumbers.appendChild(newLi);
    });

    

    theOLStars = document.getElementById('olStars');
    theOLStars.innerHTML = "";

    bet.stars.forEach(star => {
        newLi = document.createElement("li");
        newLi.innerHTML = star;
        theOLStars.appendChild(newLi);
    });

    // for each number
        // create a new li with the number
        // add it to the list of numbers
    
    // do the same for the stars


}




/*
function addtext() {
    listofnumbers = document.getElementById("olMain");
    listofnumbers.innerHTML = "";

    newli = document.createElement("li");
    newli.innerText= "99";

    listofnumbers.appendChild(newli);
}
*/

// Math.random() 0..1;
// Math.floor() turn a real into an integer

// Arrays
// indexOf() to check if an object exists in the array


