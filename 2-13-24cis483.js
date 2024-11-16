
const BeginningOfYear = function(){
    mainWindow = document.getElementById("mainWindow");

    let message = "";
    message = message + "<h1>Sir Chandan of Santa Paravia</h1> <br />";
    message = message + "Rats ate 13% of your grain reserves! <br />";
    message = message + "Good weather, Fine Harvest <br />";
    message = message + "(34,567 steres)<br /><br />";
    message = message + "<table border = '1'>";
    message = message + "<tr><th>Grain Reserve</th><th>Grain Demand</th><th>Price of Grain</th><th>Price of Land</th><th>Treasury Gold</th></tr>";
    message = message + "<tr><td>38248</td><td>11810</td><td>2.34</td><td>2.34</td><td>7878</td></tr>";
    message = message + "</table><br /><br /><br  />";
    message = message + "<button id=continueBtn>Continue</button><br />";
    message = message + "<button id=grainBtn>Grain Market</button><br />";
    message = message + "<button id=landBtn>Land Market</button><br />";
    mainWindow.innerHTML = message;
    document.getElementById("continueBtn").addEventListener("click",continueBtn)
    document.getElementById("grainBtn").addEventListener("click",grainBtn)
    document.getElementById("landBtn").addEventListener("click",landBtn)
}

    let message = "";
    message = message + "<h1>Year 1400<h1/>";
    message = message + "<h2>Sir Luffy of Santa Paravia<h2/><br   />";
    message = message + "You have 32610 st. of grain.<br  />";
    message = message + "Grain demand is 11600 steres<br   />";
    message = message + "How much grain will you release for consumption?";
    
BeginningOfYear();



// document.getElementById("continueBtn").addEventListener("click",continueBtn)
// document.getElementById("grainBtn").addEventListener("click",grainBtn)
// document.getElementById("landBtn").addEventListener("click",landBtn)




// Continue Button

function continueBtn(){
    let message = "";
            message = message + "<h1>Year 1400<h1/>";
            message = message + "<h2>Sir Luffy of Santa Paravia<h2/><br   />";
            message = message + "You have 32610 st. of grain.<br  />";
            message = message + "Grain demand is 11600 steres<br   />";
            message = message + "How much grain will you release for consumption? <br/>"; 
            message = message + "<input type=text id= inputid> </input>"; 
            message = message + "<button id=nextBtn>Continue</button><br />";
            mainWindow.innerHTML = message;
            document.getElementById("nextBtn").addEventListener("click",nextBtn)
        
}


//Next Button

function nextBtn(){

        let message = "";
        message = message + "<h2>Sir Luffy of Santa Paravia<h2/><br   />";
        message = message + "137 serfs born this year <br  />";
        message = message + "44 serfs died this year<br   />";
        message = message + "14 serfs moved to the city<br   />";
        message = message + "<button id=nextBtn>Continue</button><br />";
        mainWindow.innerHTML = message;


        document.getElementById("nextBtn").addEventListener("click",()=>{
            let message = "";
            message = message + "<h2>Sir Luffy of Santa Paravia<h2/><br   />";
            message = message + "You paid your soldiers 75.00 florins <br  />";
            message = message + "<button id=MainBtn>Continue</button><br />";
            mainWindow.innerHTML = message;
            document.getElementById("MainBtn").addEventListener("click",SalesData)
        })

    }
            
    


function SalesData(){
    let message = "";
                message = message + "<h1>State Revenue<h1/><br   />";
                message = message + "Percent levied last year : 800.99 fl.<br  />";
                message = message + "<table border = '1' ><br   />";
                message = message + "<tr><th>Customs Duty</th><th>Sales Tax</th><th>Income Tax</th><th>Justice</th></tr>";
                message = message + "<tr><td>25%</td><td>10%</td><td>5%</td><td>Moderate</td></tr></table>";
                message = message + "<h1>Indicate Tax to Change or 0 to Exit<h1/><br   />";
                message = message + "<button id=customs>Customs Duty</button> <button id=sales>Sales Tax</button> <button id=income>Income Tax</button> <button id=justice>Justice</button></br>";
                message = message +"<button id=continue>Continue</button>";
                
                
                mainWindow.innerHTML = message;

                document.getElementById("continue").addEventListener("click",getCathedral);
                

                
                document.getElementById("customs").addEventListener("click",()=>{
                    let message = "";
                    message = message + "NOBLE PERSON<br   />";
                    message = message + "WHAT CUSTOMS TAX FOR YOUR PEOPLE? <br  /><br  />";
                    message = message + "CUSTOMS TAX: 25<br   />";
                    message = message + "New customs duty (0 to 100): <input/><br  />";
                    message = message + "<button id=continue>Continue</button>";
                    mainWindow.innerHTML = message;
                    document.getElementById("continue").addEventListener("click",SalesData);
                });

             document.getElementById("sales").addEventListener("click",()=>{
                let message = "";
                message = message + "<h1>TAX OFFICE<h1/><br   />";
                message = message + "WELCOME, NOBLE PERSON!<br   />";
                message = message + "WHAT TAX WILL THEE CHANGE ? <br  /><br  />";
                message = message + "Taxes              Taxes<br   />";
                message = message + "Sales Tax 10%          Income Tax  %  <br  />";
                message = message + "New sales tax (0 to 50):  <input/><br   />";
                message = message + "<button id=continue>Continue</button>";
                mainWindow.innerHTML = message;
                document.getElementById("continue").addEventListener("click",SalesData);
             })

             document.getElementById("income").addEventListener("click",()=>{
                let message = "";
                message = message + "<h1>TAX OFFICE<h1/><br   />";
                message = message + "WELCOME, NOBLE PERSON!<br   />";
                message = message + "WHAT TAX WILL THEE CHANGE ? <br  /><br  />";
                message = message + "Taxes              Taxes<br   />";
                message = message + "Sales Tax %          Income Tax  10%  <br  />";
                message = message + "New income tax (0 to 25):<input> <br   />";
                message = message + "<button id=continue>Continue</button>";
                mainWindow.innerHTML = message;
                document.getElementById("continue").addEventListener("click",SalesData);
             })

             document.getElementById("justice").addEventListener("click",()=>{
                let message = "";
            
                message = message + "NOBLE PERSON!<br   />";
                message = message + "WHAT JUSTICE FOR YOUR PEOPLE?<br  /><br  />";
                message = message + "1. VERY FAIR<br   />";
                message = message + "2. FAIR<br  />";
                message = message + "3. HARSH<br   />";
                message = message + "4. OUTRAGEOUS <br   />";
                message = message + "New Justice : <input><br   />";
            
                message = message + "<button id=continue>Continue</button>";
                mainWindow.innerHTML = message;
                document.getElementById("continue").addEventListener("click",SalesData);
             })




}


function getCathedral(){
    
        let message = "";
        message = message + "<h2>Year 1400<h2/>";
        message = message + "<h2>Treasury: 1726 <h2/>";
        message = message + "0 Cathedral Pieces";
        message = message + "0 Markets<br />";
        message = message + "0 Palace pieces";
        message = message + "0 Mills<br  />";
        message = message + "        Defense is O.K.      <br/> ";
  
        message = message + "<table border = '1' ><br   />";
        message = message + "<tr><th>1. One Palace Piece</th><th>2.One Cathedral Piece</th><th>3. One Hill</th><th>4. One Market</th><th>5. Equip One Platoon</th></tr>";
        message = message + "<tr><th>3000 Florins</th><th>5000 Florins</th><th>2000 Florins</th><th>1000 Florins</th><th>500 Florins</th></tr>";
        message = message +"<button id=continue>Continue</button> <button id=standing>Standings</button>"
        mainWindow.innerHTML = message;
        
        document.getElementById("continue").addEventListener("click",BeginningOfYear);
        document.getElementById("standing").addEventListener("click",()=>{
            let message = "";
            message = message + "<h2>Sir Luffy of Santa Paravia<h2/><br  />";
            message = message + "Nobles  Soldiers  Clergy  Merch'ts  Serfs  Land  Treasury<br>";
            message = message + "4   25   6   25   1816   10000   2451.98 <br   />";
            message = message + "<button id=ok>OK</button>";
            mainWindow.innerHTML=message;
            document.getElementById("ok").addEventListener("click",getCathedral);

        })

}

//GrainBtn

function grainBtn(){

    let message = "";
        message = message + "<h1>Grain Market<h1/>";
        message = message + "You have 2452 florins<br   />";
        message = message + "Grain price is 60 fl. per 1000 st.<br  />";
        message = message + "<button id=grainexit>Exit</button> <button id=grainbuy>Buy</button> <button id=grainsell>Sell</button>";
        mainWindow.innerHTML = message;

        document.getElementById("grainexit").addEventListener("click",BeginningOfYear)
        document.getElementById("grainbuy").addEventListener("click",()=>{
            let message ="";
            message = message + "Enter amount to buy:</br>";
            message = message + "<input type=number></input>"
            message = message + "<button id=buycontinue>Buy</button>";
            mainWindow.innerHTML = message;
            document.getElementById("buycontinue").addEventListener("click",grainBtn);

        })
        document.getElementById("grainsell").addEventListener("click",()=>{
            let message ="";
            message = message + "Enter amount to sell:"
            message = message + "<input type=number></input>"
            message = message + "<button id=sellcontinue>Sell</button>";
            mainWindow.innerHTML = message;
            document.getElementById("sellcontinue").addEventListener("click",grainBtn);
        })
}


//Land Button

function landBtn(){
    let message = "";
        message = message + "<h1>LAND OFFICE<h1/>";
        message = message + "<h1>RATS A PROBLEM? SELL THE PIPER<h1/>";
        message = message + "You have 2438 florins<br   />";
        message = message + "Land Price is 2 fl. per hectare<br  />";
        message = message + "<button id=landexit>Exit</button> <button id=landbuy>Buy</button><button id=landsell>Sell</button>";

        mainWindow.innerHTML = message;

        document.getElementById("landexit").addEventListener("click",BeginningOfYear)
        document.getElementById("landbuy").addEventListener("click",()=>{
            let message ="";
            message = message + "Enter amount to buy:</br>";
            message = message + "<input type=number></input>"
            message = message + "<button id=buycontinue>Buy</button>";
            mainWindow.innerHTML = message;
            document.getElementById("buycontinue").addEventListener("click",landBtn);

        })
        document.getElementById("landsell").addEventListener("click",()=>{
            let message ="";
            message = message + "Enter amount to sell:"
            message = message + "<input type=number></input>"
            message = message + "<button id=sellcontinue>Sell</button>";
            mainWindow.innerHTML = message;
            document.getElementById("sellcontinue").addEventListener("click",landBtn);
        })


}




















// class basicInfo {
//     constructor(name, gender, playerNum){
//         this.name = name;
//         this.percentage = Math.floor(Math.random()* 60);
//         this.weather = weather;
//         this.harvest = harvest;
//         this.steres = steres;
//     }

// document.addEventListener("keypress",logkey)

// function logkey(e){
//     if(e.keyCode== 48){
        
//         let message = "";
//         message = message + "<h1>Year 1400<h1/>";
//         message = message + "<h2>Sir Luffy of Santa Paravia<h2/><br   />";
//         message = message + "You have 32610 st. of grain.<br  />";
//         message = message + "Grain demand is 11600 steres<br   />";
//         message = message + "How much grain will you release for consumption?";  
//         mainWindow.innerHTML = message;
    
        
//     }
//     else if(e.keyCode== 49){
        
//         let message = "";
//         message = message + "<h1>Grain Market<h1/>";
//         message = message + "You have 2452 florins<br   />";
//         message = message + "Grain price is 60 fl. per 1000 st.<br  />";
//         message = message + "0. Exit   1. Buy Grain  2. Sell Grain <br  />";
//         mainWindow.innerHTML = message;
    
//     }
//     else if(e.keyCode== 50){
       
//         let message = "";
//         message = message + "<h1>LAND OFFICE<h1/>";
//         message = message + "<h1>RATS A PROBLEM? SELL THE PIPER<h1/>";
//         message = message + "You have 2438 florins<br   />";
//         message = message + "Land Price is 2 fl. per hectare<br  />";
//         message = message + "0. Exit   1. Buy Land  2. Sell Land <br  />";
//         mainWindow.innerHTML = message;
    
//     }
//     else{
//         mainWindow.innerHTML="Click the right key";
//         console.log(e.keyCode);
//     }

// }