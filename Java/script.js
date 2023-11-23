
const checkAge = (age) => (age > 18) ? true : confirm('Did parents allow you?');
const checkAg = (age) => age > 18 || confirm('Did parents allow you?');
function min(a, b) {
  return (a < b) ? a : b;
}

const min = (a, b) => (a < b) ? a : b;

function pow(x, n) {
    return Math.pow(x, n);
  }

  function calculatePower() {
    
    const x = (prompt("Enter the base (x):"));
    const n = (prompt("Enter the exponent (n):"));

    
    if (!isNaN(x) && !isNaN(n)) {
     
      const result = pow(x, n);
      alert(`Result: ${result}`);
    } else {
      
      alert("Please enter valid numbers for x and n.");
    }
  }

  
  calculatePower();

const pow = (x, n) => Math.pow(x, n);


const pow = (x, n) => x ** n;



const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => { alert("You agreed."); },
  () => { alert("You canceled the execution."); }
);




function supplyCalculator(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
   console.log(message);
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);