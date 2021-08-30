function checkCashRegister(price, cash, cid) {
  let diff = (cash - price).toFixed(2); //find the difference of cash received from customer minus the price of goods sold, set to 2 decimal places
  let change = [];
  let cidCopy = cid.slice(0); //about the simplest way to copy an array to a new array which can be altered
  let moneyArr = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  
  for(let i = 8; i >= 0; i--) { //used to iterate through moneyArr, from ONE HUNDRED to PENNY
      let j = 0;
      let k = cid[i][1];
      for(diff; diff >= moneyArr[i][1] && k > 0; diff = (diff - moneyArr[i][1]).toFixed(2)) { //loop runs while diff is greater or equal to the current denomination in moneyArr and the cash in drawer for current denomination hasn't ran out. Subtract one denom from diff per loop
        j++;
        change[i] = [moneyArr[i][0], Number((moneyArr[i][1] * j).toFixed(2))]; //set value for current denom in change array. i.e., when i = 5, change[5] = ["FIVE", 15]; Number value is determined by current denom multiplied by the number of loops counted by j
        cid[i] = [cid[i][0], (cid[i][1] - moneyArr[i][1]).toFixed(2)]; //cash in drawer gets decremented by one denomination per iteration of the inner loop
        k -= moneyArr[i][1]; //k is also decremented to show if/when cash in drawer has ran out. This could be consolidated with code above
      }
  }
  
  change = (change.filter(function(x) { return x })).reverse(); //filter out null or empty values from the change array and reverse the order. Could have been mitigated earlier, but easy enough to do here
  
  if(diff == 0) { //if diff = 0 we know correct change was distributed, but still need to determine OPEN or CLOSED scenario
    for(let l = 0; l < cid.length; l++) { //iterate through cash in drawer array
      if(cid[l][1] > 0) { //if any denomination is left in drawer, return OPEN
        console.log(JSON.stringify({status: "OPEN", change: change}));
        //return {status: "OPEN", change: change}; //this is the original FCC answer, included for completeness
      }
      else if(cid[l][1] == 0 && l == cid.length -1) { //if cash in drawer is still 0 at the end of the loop, then you're out of cash, return CLOSED
        console.log(JSON.stringify({status: "CLOSED", change: cidCopy}))
        //return {status: "CLOSED", change: cidCopy}; //this is the original FCC answer, included for completeness
      }
    }
  }
  else { //if diff doesn't equal 0, return INSUFFICIENT_FUNDS because correct change was not given
    console.log(JSON.stringify({status: "INSUFFICIENT_FUNDS", change: []}));
    //return {status: "INSUFFICIENT_FUNDS", change: []} //this is the original FCC answer, included for completeness
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
/*should return {status: "OPEN", change: [["QUARTER", 0.5]]}

//change values below to test code (price, cash, cid). Please see browser console for response
/*checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.00], ["DIME", 3.10], ["QUARTER", 4.00], ["ONE", 30], ["FIVE", 15], ["TEN", 50], ["TWENTY", 60], ["ONE HUNDRED", 100]]);*/


//cash-register
//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/

/*function checkCashRegister(price, cash, cid) {
  //reference for currency values
  const currency = {
    'ONE HUNDRED': 100.00,
    'TWENTY': 20.00,
    'TEN': 10.00,
    'FIVE': 5.00,
    'ONE': 1.00,
    'QUARTER': 0.25,
    'DIME': 0.10,
    'NICKEL': 0.05,
    'PENNY': 0.01
  };

  //get register total
  const regTotal = () => {
    const total = cid.reduce((acc, cur) => acc + cur[1], 0).toFixed(2);
    return total;
  }
  
  //debugging
  console.log('register total is: ' + regTotal());

  //object constructors
  const change = (status, change) =>({
    status,
    change
  })
  const customerHand = {
    status: 'OPEN',
    change: []
  };

  //pre-check
  let changeDue = cash - price;
  if(changeDue == regTotal()) {
    return change("CLOSED", cid);
  }
  if(changeDue > regTotal()) {
    return change("INSUFFICIENT_FUNDS", []);
  }

  //iterate thru cid array right to left
  for(var i = cid.length - 1; i >= 0; i--) {
    let denomination = cid[i][0];
    let amount = cid[i][1];
    let count = 0;
    //find the right currency amount
    while(changeDue >= amount && amount > 0) {
      changeDue -= changeDue;
      amount -= amount;
      count++;
    }
    if(count > 0) {
      customerHand.status = 'OPEN'
      customerHand.change.push([denomination, (count * currency[denomination])]);
    } else { 
      customerHand.status = 'INSUFFICIENT_FUNDS'
    }
  }
  console.log(customerHand);
  
  return customerHand;
}

//checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}*/