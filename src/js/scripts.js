async function main() {
  // Assignment 2.
  // A cashier program.

  // Input of the total cost of goods
  let totalCost = Number(await input("Enter the total cost of goods: "));
  
  // Input of the cash payment from the customer
  let cashPayment = Number(await input("Enter the cash payment from the customer: "));

  // Discount codes (Using switch)
  let discountCode = Number(await input("Enter the discount code: "));
  switch(discountCode){
    case 0:
      totalCost = totalCost;
      output("You chose 0 as a discount code, No discount.");
      break;

    case 1:
      totalCost = totalCost - ((10/100) * totalCost);
      output("You chose 1 as a discount code, You got a 10% discount.");
      break;

    case 2:
      totalCost = totalCost - ((15/100) * totalCost);
      output("You chose 2 as a discount code, You got a 15% discount.");
      break;  

    case 3:
      totalCost = totalCost - ((25/100) * totalCost);
      output("You chose 3 as a discount code, You got a 25% discount.");
      break;  

    case 4:
      totalCost = totalCost - ((35/100) * totalCost);
      output("You chose 4 as a discount code, You got a 35% discount.");
      break;  

    case 5:
      totalCost = totalCost - ((40/100) * totalCost);
      output("You chose 5 as a discount code, You got a 40% discount.");
      break;  

    default: // for any errors
      output("Invalid input, try again later!");
  }

  // Creating a new variable to check the amount of change status.
  let amountOfChange = Number(cashPayment - totalCost); 

  if(amountOfChange < 0){
    output("Insufficient Payment!");
  }
  else{
    output("The amount of change: " + (Math.round(amountOfChange * 100) / 100) + "$"); 
    // rounding to get only two numbers after the decimal point.
  }
}
