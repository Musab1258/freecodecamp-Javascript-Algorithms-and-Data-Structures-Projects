function checkCashRegister(price, cash, cid) {
  const cidO = {
    "ONE HUNDRED": 10000,
    "TWENTY": 2000,
    "TEN": 1000,
    "FIVE": 500,
    "ONE": 100,
    "QUARTER": 25,
    "DIME": 10,
    "NICKEL": 5,
    "PENNY": 1
  }
  let changeDue = cash * 100 - price * 100;
  let answer = {
    status: null,
    change: []
  };

  for (let x = cid.length - 1; x >= 0; x--) {
    let currency = cid[x];
    let amount = 0;
    let currencyAvailable = currency[1] * 100
    while (changeDue >= cidO[currency[0]] && currencyAvailable >= cidO[currency[0]]) {
      currencyAvailable -= cidO[currency[0]];
      changeDue -= cidO[currency[0]];
      amount += cidO[currency[0]];
    }
    console.log(cidO[currency[0]])
    
    if (currencyAvailable == 0) {
      answer.status = "CLOSED";
    } else {
      answer.status = "OPEN"
    };
    if (amount > 0) {
      answer.change.push([currency[0], amount / 100]);
    }
  }
  if (changeDue > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  } else if (answer.status == "CLOSED") {
    answer.change = cid;
  }
  return answer;
};
