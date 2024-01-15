function checkForSpam(message) {
    const badWord1 = "spam";
    const badWord2 = "sale";
    const result = !message.toLowerCase().includes(badWord1) && !message.toLowerCase().includes(badWord2);
    if (result) {
        return result;
    }
    else {
        return result;
    }
}


console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
