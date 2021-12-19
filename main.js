let btn = document.querySelector(".btn");
//let kes = document.querySelector(".kes").value;
//let usd = document.querySelector(".usd").value;

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    currencyConvertor(kes);
});

function currencyConvertor(kes){
    kes = document.querySelector(".kes").value;
    if (kes == ""){
        alert(" Kindly enter an amount to convert")
    }
    else{
    let money = parseFloat(kes);
    let converted = money/105;
    converted = converted.toFixed(2);
    console.log(converted);

    let sect = document.querySelector(".display");
    let parag = document.createElement("P");
    parag.style.textAlign = "center";
    parag. innerHTML = `
     Kes ${kes} equals to ${converted} US Dollars<br><br>
     <small><b>NB:</b> Conversion rate is $1 = KES 105 </small>
    `;
    sect.append(parag);

    let form = document.querySelector("form").reset();
    }
}

