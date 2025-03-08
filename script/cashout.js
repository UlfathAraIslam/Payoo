document.getElementById("cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    const pin = document.getElementById("chashout-pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);
    const account = document.getElementById("Account-number").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin ===1234){
        const sum = convertedMainBalance - convertedAmount;
        console.log(sum);
        document.getElementById("main-balance").innerText = sum;

        const container = document.getElementById("transaction-container");
        const p = document.createElement("p");
        p.innerText = `
        cashout ${convertedAmount} from this ${account} account`
        container.appendChild(p);

    }
    else{
        alert("enter vaid pin")
    }
})