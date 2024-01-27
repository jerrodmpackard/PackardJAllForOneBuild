let sayHelloDiv = document.getElementById("sayHelloDiv");
let sayHelloInput = document.getElementById("sayHelloInput");
let sayHelloButton = document.getElementById("sayHelloButton");
let sumTwoNumbersDiv = document.getElementById("sumTwoNumbersDiv");
let sumTwoNumbersInput1 = document.getElementById("sumTwoNumbersInput1");
let sumTwoNumbersInput2 = document.getElementById("sumTwoNumbersInput2");
let sumTwoNumbersButton = document.getElementById("sumTwoNumbersButton");
let askingQuestionsDiv = document.getElementById("askingQuestionsDiv");
let askingQuestionsNameInput = document.getElementById("askingQuestionsNameInput");
let askingQuestionsTimeInput = document.getElementById("askingQuestionsTimeInput");
let askingQuestionsButton = document.getElementById("askingQuestionsButton");
let greaterOrLessDiv = document.getElementById("greaterOrLessDiv");
let greaterOrLessNumber1Input = document.getElementById("greaterOrLessNumber1Input");
let greaterOrLessNumber2Input = document.getElementById("greaterOrLessNumber2Input");
let greaterOrLessButton = document.getElementById("greaterOrLessButton");
let madLibsDiv = document.getElementById("madLibsDiv");
let madLibsHeroName = document.getElementById("madLibsHeroName");
let madLibsPlanetName = document.getElementById("madLibsPlanetName");
let madLibsSpeciesName = document.getElementById("madLibsSpeciesName");
let madLibsPluralNoun = document.getElementById("madLibsPluralNoun");
let madLibsSingularNoun1 = document.getElementById("madLibsSingularNoun1");
let madLibsSingularNoun2 = document.getElementById("madLibsSingularNoun2");
let madLibsVerb1 = document.getElementById("madLibsVerb1");
let madLibsVerb2 = document.getElementById("madLibsVerb2");
let madLibsAdjective1 = document.getElementById("madLibsAdjective1");
let madLibsAdjective2 = document.getElementById("madLibsAdjective2");
let madLibsButton = document.getElementById("madLibsButton");
let oddOrEvenDiv = document.getElementById("oddOrEvenDiv");
let oddOrEvenNumberInput = document.getElementById("oddOrEvenNumberInput");
let oddOrEvenButton = document.getElementById("oddOrEvenButton");
let reverseWordsDiv = document.getElementById("reverseWordsDiv");
let reverseWordsInput = document.getElementById("reverseWordsInput");
let reverseWordsButton = document.getElementById("reverseWordsButton");
let reverseNumbersDiv = document.getElementById("reverseNumbersDiv");
let reverseNumbersInput = document.getElementById("reverseNumbersInput");
let reverseNumbersButton = document.getElementById("reverseNumbersButton");
let magic8BallDiv = document.getElementById("magic8BallDiv");
let magic8BallQuestionInput = document.getElementById("magic8BallQuestionInput");
let magic8BallButton = document.getElementById("magic8BallButton");
let restaurantPickerDiv = document.getElementById("restaurantPickerDiv");
let restaurantPickerFastFoodButton = document.getElementById("restaurantPickerFastFoodButton");
let restaurantPickerPizzaButton = document.getElementById("restaurantPickerPizzaButton");
let restaurantPickerRestaurantButton = document.getElementById("restaurantPickerRestaurantButton");

let userName;
let number1;
let number2;
let wakeUpTime;
let heroName;
let planetName;
let speciesName;
let pluralNoun;
let singularNoun1;
let singularNoun2;
let verb1;
let verb2;
let adj1;
let adj2;
let something;
let question;

const sayHelloCall = async (userName) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/SayHello/SayHello/${userName}`);
    const data = await promise.text();

    sayHelloDiv.innerText = data;
}

if (sayHelloButton) {
    sayHelloButton.addEventListener("click", function () {
        userName = sayHelloInput.value;
        sayHelloCall(userName);
    });
}

const sumTwoNumbersCall = async (number1, number2) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/SumTwoNumbers/SumTwoNumbers/${number1}/${number2}`);
    const data = await promise.text();

    sumTwoNumbersDiv.innerText = data;
}

if (sumTwoNumbersButton) {
    sumTwoNumbersButton.addEventListener("click", function () {
        number1 = sumTwoNumbersInput1.value;
        number2 = sumTwoNumbersInput2.value;
        sumTwoNumbersCall(number1, number2);
    });
}

const askingQuestionsCall = async (userName, wakeUpTime) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/AskingQuestions/AskingQuestions/${userName}/${wakeUpTime}`);
    const data = await promise.text();

    askingQuestionsDiv.innerText = data;
}

if(askingQuestionsButton){
    askingQuestionsButton.addEventListener("click", function () {
        userName = askingQuestionsNameInput.value;
        wakeUpTime = askingQuestionsTimeInput.value;
        askingQuestionsCall(userName, wakeUpTime);
    })
}

const greaterOrLessCall = async (number1, number2) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/GreaterOrLess/GreaterOrLess/${number1}/${number2}`);
    const data = await promise.text();

    greaterOrLessDiv.innerText = data;
}

if(greaterOrLessButton){
    greaterOrLessButton.addEventListener("click", function () {
        number1 = greaterOrLessNumber1Input.value;
        number2 = greaterOrLessNumber2Input.value;
        greaterOrLessCall(number1, number2);
    })
}

const madLibsCall = async (heroName, planetName, speciesName, pluralNoun, singularNoun1, singularNoun2, verb1, verb2, adj1, adj2) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/MadLibs/MadLibs/${heroName}/${planetName}/${speciesName}/${pluralNoun}/${singularNoun1}/${singularNoun2}/${verb1}/${verb2}/${adj1}/${adj2}`);
    const data = await promise.text();

    madLibsDiv.innerText = data;
}

if(madLibsButton){
    madLibsButton.addEventListener("click", function() {
        heroName = madLibsHeroName.value;
        planetName = madLibsPlanetName.value;
        speciesName = madLibsSpeciesName.value;
        pluralNoun = madLibsPluralNoun.value;
        singularNoun1 = madLibsSingularNoun1.value;
        singularNoun2 = madLibsSingularNoun2.value;
        verb1 = madLibsVerb1.value;
        verb2 = madLibsVerb2.value;
        adj1 = madLibsVerb1.value;
        adj2 = madLibsVerb2.value;
        madLibsCall(heroName, planetName, speciesName, pluralNoun, singularNoun1, singularNoun2, verb1, verb2, adj1, adj2);
    })
}

const oddOrEvenCall = async (number1) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/OddOrEven/OddOrEven/${number1}`);
    const data = await promise.text();

    oddOrEvenDiv.innerText = data;
}

if(oddOrEvenButton){
    oddOrEvenButton.addEventListener("click", function() {
        number1 = oddOrEvenNumberInput.value;
        oddOrEvenCall(number1);
    })
}

const reverseWordsCall = async (something) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/ReverseWords/ReverseWords/${something}`);
    const data = await promise.text();

    reverseWordsDiv.innerText = data;
}

if(reverseWordsButton){
    reverseWordsButton.addEventListener("click", function() {
        something = reverseWordsInput.value;
        reverseWordsCall(something);
    })
}

const reverseNumbersCall = async (number1) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/ReverseNumbers/ReverseNumbers/${number1}`);
    const data = await promise.text();

    reverseNumbersDiv.innerText = data;
}

if(reverseNumbersButton){
    reverseNumbersButton.addEventListener("click", function() {
        number1 = reverseNumbersInput.value;
        reverseNumbersCall(number1);
    })
}

const magic8BallCall = async (question) => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/Magic8Ball/Magic8Ball/${question}`);
    const data = await promise.text();

    magic8BallDiv.innerText = data;
}

if(magic8BallButton){
    magic8BallButton.addEventListener("click", function () {
        question = magic8BallQuestionInput.value;
        magic8BallCall(question);
    })
}

const fastFoodCall = async () => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/RestaurantPicker/RestaurantPicker/fast food`);
    const data = await promise.text();

    restaurantPickerDiv.innerText = data;
}

if(restaurantPickerFastFoodButton){
    restaurantPickerFastFoodButton.addEventListener("click", function() {
        fastFoodCall();
    })
}

const pizzaCall = async () => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/RestaurantPicker/RestaurantPicker/pizza`);
    const data = await promise.text();

    restaurantPickerDiv.innerText = data;
}

if(restaurantPickerPizzaButton){
    restaurantPickerPizzaButton.addEventListener("click", function () {
        pizzaCall();
    })
}

const restaurantCall = async () => {
    const promise = await fetch(`https://packardjallforonewebapi.azurewebsites.net/RestaurantPicker/RestaurantPicker/restaurant`);
    const data = await promise.text();

    restaurantPickerDiv.innerText = data;
}

if(restaurantPickerRestaurantButton){
    restaurantPickerRestaurantButton.addEventListener("click", function() {
        restaurantCall();
    })
}