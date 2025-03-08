document.getElementById("add-money").addEventListener("click",function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount)
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const account = document.getElementById("Account-number").value;
    let mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // console.log(typeof mainBalance);
    if (amount && pin){
        if (convertedPin===1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;

            const container = document.getElementById("transaction-container");
            const p = document.createElement("p");
            p.innerText = `
            added ${convertedAmount} from ${account} account`
            container.appendChild(p);
        }
        else{
            alert('Incorrect Pin');
        }
    }
    else{
        alert("enter amount")
    }
})