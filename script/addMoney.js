document.getElementById("add-money").addEventListener("click",function(event){
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount)
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    let mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    console.log(typeof mainBalance);
    if (amount && pin){
        if (convertedPin===1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        else{
            alert('Incorrect Pin');
        }
    }
    else{
        alert("enter amount")
    }
})