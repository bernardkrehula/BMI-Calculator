const intOne = document.querySelector('.intOne');
const intTwo = document.querySelector('.intTwo');
const intResult = document.querySelector('.intResult');
const btn = document.querySelector('.main ul button');
const result = document.querySelector('.main h3');

let height;
let weight;
let bmi;
let squareMeter;

intOne.addEventListener('input', () => {
    height = intOne.value;
})
intTwo.addEventListener('input', () => {
    weight = intTwo.value;
})
btn.addEventListener('click', () => {
    calculateBmi();
})

function calculateBmi() {
    squareMeter = (height/100)**2;
    bmi = weight/squareMeter;
    if(bmi < 18.55){
        result.innerHTML = 'Underweight';
        console.log(bmi);
    }
    if(bmi >= 18.55) {
        result.innerHTML = 'Normal weight';
    }
    if(bmi >= 25.2){
        result.innerHTML = 'Overweight';
    }
    if(bmi >= 30.19){
        result.innerHTML = 'Obesity';
    }
}
