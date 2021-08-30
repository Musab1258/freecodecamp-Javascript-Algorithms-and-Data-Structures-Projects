const regex_tv = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

function telephoneCheck(str) {
  // body...
  if (regex_tv.test(str)) {
    return "True";
  } else {
    return "False";
  }
}

let them = telephoneCheck("1 555-555-5555")
console.log(them);