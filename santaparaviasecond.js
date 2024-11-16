let playerGrain = 0; // Initial amount of grain for the player
let playerLand = 0; // Initial amount of land for the player
let playerFlorins = Math.floor(Math.random() * 5000) + 5000; // Initial amount of florins for the player
let playerName = prompt("Enter your name:");

function BeginningOfYear() {
    let mainWindow = document.getElementById("mainWindow");
   
    if (!playerName) {
        playerName = "Chandan"; // Default name if user doesn't provide one
    }

    let message = "";
    message += "<h1>Sir " + playerName + " of Santa Paravia</h1> <br />";
    let ratsEaten = Math.floor(Math.random() * 20); // Random amount of grain eaten by rats (0-19%)
    let grainReserve = Math.floor(Math.random() * 50000) + 30000; // Random grain reserve between 30000 and 79999
    let grainDemand = Math.floor(Math.random() * 10000) + 10000; // Random grain demand between 10000 and 19999
    let grainPrice = (Math.random() * 3 + 1).toFixed(2); // Random grain price between 1.00 and 3.99
    let landPrice = (Math.random() * 3 + 1).toFixed(2); // Random land price between 1.00 and 3.99
    let treasuryGold = Math.floor(Math.random() * 10000) + 5000; // Random treasury gold between 5000 and 14999

    playerGrain += grainReserve * (1 - ratsEaten / 100); // Update player's grain reserve after rat consumption
    playerFlorins += treasuryGold; // Add treasury gold to player's florins

    message += "Rats ate " + ratsEaten + "% of your grain reserves!<br />";
    message += "Good weather, Fine Harvest<br />";
    message += "(" + grainReserve + " steres)<br /><br />";
    message += "<table border='1'>";
    message += "<tr><th>Grain Reserve</th><th>Grain Demand</th><th>Price of Grain</th><th>Price of Land</th><th>Treasury Gold</th></tr>";
    message += "<tr><td>" + grainReserve.toFixed(0) + "</td><td>" + grainDemand + "</td><td>" + grainPrice + "</td><td>" + landPrice + "</td><td>" + treasuryGold + "</td></tr>";
    message += "</table><br /><br /><br />";
    message += "<button id='continueBtn'>Continue</button><br />";
    message += "<button id='grainBtn'>Grain Market</button><br />";
    message += "<button id='landBtn'>Land Market</button><br />";
    mainWindow.innerHTML = message;

    document.getElementById("continueBtn").addEventListener("click", continueBtn);
    document.getElementById("grainBtn").addEventListener("click", grainBtn);
    document.getElementById("landBtn").addEventListener("click", landBtn);
}

function continueBtn() {
    let mainWindow = document.getElementById("mainWindow");

    let message = "<h1>Year 1400</h1>";
    message += "<h2>Sir "+playerName+" of Santa Paravia</h2><br />";
    message += "You have " + playerGrain.toFixed(0) + " st. of grain.<br />";
    message += "Grain demand is " + Math.floor(Math.random() * 10000) + " steres<br />";
    message += "How much grain will you release for consumption? <br/>";
    message += "<input type='text' id='inputid'> </input>";
    message += "<button id='nextBtn'>Continue</button><br />";
    mainWindow.innerHTML = message;

    document.getElementById("nextBtn").addEventListener("click", nextBtn);
}

function nextBtn() {
    let mainWindow = document.getElementById("mainWindow");

    let message = "<h2>Sir "+playerName+" of Santa Paravia</h2><br />";
    message += "137 serfs born this year <br />";
    message += "44 serfs died this year<br />";
    message += "14 serfs moved to the city<br />";
    message += "<button id='nextBtn'>Continue</button><br />";
    mainWindow.innerHTML = message;

    document.getElementById("nextBtn").addEventListener("click", () => {
        let message = "<h2>Sir "+playerName+" of Santa Paravia</h2><br />";
        message += "You paid your soldiers 75.00 florins <br />";
        message += "<button id='MainBtn'>Continue</button><br />";
        mainWindow.innerHTML = message;
        document.getElementById("MainBtn").addEventListener("click", SalesData);
    });}


   
    
    function SalesData() {
        let mainWindow = document.getElementById("mainWindow");
    
        let message = "<h1>State Revenue</h1><br />";
        message += "Percent levied last year: " + (Math.random() * 1000).toFixed(2) + " fl.<br />";
        message += "<table border='1'><br />";
        message += "<tr><th>Customs Duty</th><th>Sales Tax</th><th>Income Tax</th><th>Justice</th></tr>";
        message += "<tr><td>25%</td><td>10%</td><td>5%</td><td>Moderate</td></tr></table>";
        message += "<h1>Indicate Tax to Change or 0 to Exit</h1><br />";
        message += "<button id='customs'>Customs Duty</button> <button id='sales'>Sales Tax</button> <button id='income'>Income Tax</button> <button id='justice'>Justice</button></br>";
        message += "<button id='continue'>Continue</button>";
    
        mainWindow.innerHTML = message;
    
        document.getElementById("continue").addEventListener("click", getCathedral);
    
        document.getElementById("customs").addEventListener("click", () => {
            let message = "NOBLE PERSON<br />";
            message += "WHAT CUSTOMS TAX FOR YOUR PEOPLE? <br/><br/>";
            message += "CUSTOMS TAX: 25<br />";
            message += "New customs duty (0 to 100): <input/><br />";
            message += "<button id='continue'>Continue</button>";
            mainWindow.innerHTML = message;
            document.getElementById("continue").addEventListener("click", SalesData);
        });
    
        document.getElementById("sales").addEventListener("click", () => {
            let message = "<h1>TAX OFFICE</h1><br/>";
            message += "WELCOME, NOBLE PERSON!<br/>";
            message += "WHAT TAX WILL THEE CHANGE ? <br/><br/>";
            message += "Taxes              Taxes<br/>";
            message += "Sales Tax 10%          Income Tax  %  <br/>";
            message += "New sales tax (0 to 50):  <input/><br/>";
            message += "<button id='continue'>Continue</button>";
            mainWindow.innerHTML = message;
            document.getElementById("continue").addEventListener("click", SalesData);
        });
    
        document.getElementById("income").addEventListener("click", () => {
            let message = "<h1>TAX OFFICE</h1><br>";
            message += "WELCOME, NOBLE PERSON!<br/>";
            message += "WHAT TAX WILL THEE CHANGE ? <br/><br/>";
            message += "Taxes              Taxes<br/>";
            message += "Sales Tax %          Income Tax  10%  <br/>";
            message += "New income tax (0 to 25):<input> <br/>";
            message += "<button id='continue'>Continue</button>";
            mainWindow.innerHTML = message;
            document.getElementById("continue").addEventListener("click", SalesData);
        });
    
        document.getElementById("justice").addEventListener("click", () => {
            let message = "NOBLE PERSON!<br/>";
            message += "WHAT JUSTICE FOR YOUR PEOPLE?<br/><br/>";
            message += "1. VERY FAIR<br/>";
            message += "2. FAIR<br/>";
            message += "3. HARSH<br/>";
            message += "4. OUTRAGEOUS <br/>";
            message += "New Justice : <input><br/>";
            message += "<button id='continue'>Continue</button>";
            mainWindow.innerHTML = message;
            document.getElementById("continue").addEventListener("click", SalesData);
        });
    }
    
    function getCathedral() {
        let mainWindow = document.getElementById("mainWindow");
    
        let message = "<h2>Year 1400</h2>";
        message += "<h2>Treasury: " + playerFlorins.toFixed(2) + "</h2>";
        message += "0 Cathedral Pieces<br/>";
        message += "0 Markets<br/>";
        message += "0 Palace pieces<br/>";
        message += "0 Mills<br/>";
        message += "Defense is O.K.<br/>";
    
        message += "<table border='1' ><br/>";
        message += "<tr><th>1. One Palace Piece</th><th>2.One Cathedral Piece</th><th>3. One Hill</th><th>4. One Market</th><th>5. Equip One Platoon</th></tr>";
        message += "<tr><th>3000 Florins</th><th>5000 Florins</th><th>2000 Florins</th><th>1000 Florins</th><th>500 Florins</th></tr>";
        message += "<button id='continue'>Continue</button> <button id='standing'>Standings</button>";
        mainWindow.innerHTML = message;
    
        document.getElementById("continue").addEventListener("click", BeginningOfYear);
        document.getElementById("standing").addEventListener("click", () => {
            let message = "<h2>Sir "+playerName+" of Santa Paravia</h2><br/>";
            message += "Nobles  Soldiers  Clergy  Merch'ts  Serfs  Land  Treasury<br/>";
            message += "4   25   6   25   1816   10000   " + playerFlorins.toFixed(2) + "<br/>";
            message += "<button id='ok'>OK</button>";
            mainWindow.innerHTML = message;
            document.getElementById("ok").addEventListener("click", getCathedral);
        });
    }
    
    function grainBtn() {
        let mainWindow = document.getElementById("mainWindow");
    
        let grainPrice = (Math.random() * 50 + 50).toFixed(2); // Random grain price between 50.00 and 99.99
    
        let message = "<h1>Grain Market</h1>";
        message += "You have " + playerFlorins.toFixed(2) + " florins<br/>";
        message += "Grain price is " + grainPrice + " fl. per 1000 st.<br/>";
        message += "<button id='grainexit'>Exit</button> <button id='grainbuy'>Buy</button> <button id='grainsell'>Sell</button>";
        mainWindow.innerHTML = message;
    
        document.getElementById("grainexit").addEventListener("click", BeginningOfYear);
        document.getElementById("grainbuy").addEventListener("click", () => {
            let message = "Enter amount to buy:<br/>";
            message += "<input type='number' id='grainBuyAmount'></input>";
            message += "<button id='buycontinue'>Buy</button>";
            mainWindow.innerHTML = message;
            document.getElementById("buycontinue").addEventListener("click", () => {
                let buyAmount = parseInt(document.getElementById("grainBuyAmount").value);
                let totalPrice = buyAmount * grainPrice / 1000;
                if (totalPrice <= playerFlorins ) {
                    playerGrain += buyAmount;
                    playerFlorins -= totalPrice;
                } else {
                    alert("You don't have enough florins to buy that amount of grain!");
                }
                grainBtn();
            });
        });
        document.getElementById("grainsell").addEventListener("click", () => {
            let message = "Enter amount to sell:<br/>";
            message += "<input type='number' id='grainSellAmount'></input>";
            message += "<button id='sellcontinue'>Sell</button>";
            mainWindow.innerHTML = message;
            document.getElementById("sellcontinue").addEventListener("click", () => {
                let sellAmount = parseInt(document.getElementById("grainSellAmount").value);
                if (sellAmount <= playerGrain) {
                    playerGrain -= sellAmount;
                    playerFlorins += sellAmount * grainPrice / 1000;
                } else {
                    alert("You don't have enough grain to sell that amount!");
                }
                grainBtn();
            });
        });
    }
    
    function landBtn() {
        let mainWindow = document.getElementById("mainWindow");
    
        let landPrice = (Math.random() * 50 + 50).toFixed(2); // Random land price between 50.00 and 99.99
    
        let message = "<h1>LAND OFFICE</h1>";
        message += "<h1>RATS A PROBLEM? SELL THE PIPER</h1>";
        message += "You have " + playerFlorins.toFixed(2) + " florins<br/>";
        message += "Land Price is " + landPrice + " fl. per hectare<br/>";
        message += "<button id='landexit'>Exit</button> <button id='landbuy'>Buy</button><button id='landsell'>Sell</button>";
    
        mainWindow.innerHTML = message;
    
        document.getElementById("landexit").addEventListener("click", BeginningOfYear);
        document.getElementById("landbuy").addEventListener("click", () => {
            let message = "Enter amount to buy:<br/>";
            message += "<input type='number' id='landBuyAmount'></input>";
            message += "<button id='buycontinue'>Buy</button>";
            mainWindow.innerHTML = message;
            document.getElementById("buycontinue").addEventListener("click", () => {
                let buyAmount = parseInt(document.getElementById("landBuyAmount").value);
                let totalPrice = buyAmount * landPrice;
                if (totalPrice <= playerFlorins) {
                    playerLand += buyAmount;
                    playerFlorins -= totalPrice;
                } else {
                    alert("You don't have enough florins to buy that amount of land!");
                }
                landBtn();
            });
        });
        document.getElementById("landsell").addEventListener("click", () => {
            let message = "Enter amount to sell:<br/>";
            message += "<input type='number' id='landSellAmount'></input>";
            message += "<button id='sellcontinue'>Sell</button>";
            mainWindow.innerHTML = message;
            document.getElementById("sellcontinue").addEventListener("click", () => {
                let sellAmount = parseInt(document.getElementById("landSellAmount").value);
                if (sellAmount <= playerLand) {
                    playerLand -= sellAmount;
                    playerFlorins += sellAmount * landPrice;
                } else {
                    alert("You don't have enough land to sell that amount!");
                }
                landBtn();
            });
        });
    }
    
    BeginningOfYear();