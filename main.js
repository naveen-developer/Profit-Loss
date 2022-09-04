const initialPrice = document.querySelector('#initial-price');
const quantityOfStocks = document.querySelector('#quantity');
const currentPrice = document.querySelector('#current-price');
const tellMeButton = document.querySelector('#tell-me-button');
const errorMessage = document.querySelector('.error');
const outputMessage = document.querySelector('.output');
const sadTheme = document.querySelector('.container');

tellMeButton.addEventListener('click', function tellMeHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(quantityOfStocks.value);
    var cp = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, cp);
});

function calculateProfitAndLoss(initial, quantity, current) {
    if (initialPrice.value == "" || quantityOfStocks.value == "" || currentPrice.value == "") {
        outputMessage.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.innerText = "Please fill out all the required fields!";
    } else {
        if(initial>0 && quantity>0 && current>0){
            if (initial < current) {
                var profit = (current - initial) * quantity;
                var profitPercentage = (profit / (initial * quantity)) * 100;
                errorMessage.style.display = "none";
                outputMessage.style.display = "block";
                outputMessage.style.color = 'green';
                outputMessage.innerText = `Hey, the Profit is ${profit.toFixed(2)} and the profit percentage is ${profitPercentage.toFixed(2)}% 😇`;
                sadTheme.style.backgroundColor = "#white"
            } else if (initial > current) {
                var loss = (initial - current) * quantity;
                var lossPercentage = (loss / (initial * quantity)) * 100;
                errorMessage.style.display = "none";
                outputMessage.style.display = "block";
                outputMessage.style.color = 'orange';
                outputMessage.innerText = `Oops!, the Loss is ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)}% 😥`;
                if(lossPercentage>50){
                    sadTheme.style.backgroundColor = "#white";
                }
            } else {
                errorMessage.style.display = "none";
                outputMessage.style.display = "block";
                outputMessage.style.color = 'blue';
                outputMessage.innerText = "No pain no gain and no gain no pain :)";
                sadTheme.style.backgroundColor = "white";
            }
        } else {
            outputMessage.style.display = "none";
            errorMessage.style.display = "block";
            errorMessage.innerText = "Please enter positive values!";
        }
    }
}