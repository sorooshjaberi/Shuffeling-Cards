function rand(start, end) {
    var rnd = start + Math.floor(Math.random() * (end - start));
    return rnd;
}
//-----------------------------------------------------------------------  arrays  ---------------------------------------------------------------------------------
var allCards = []
let p1 = []
let p2 = []
let p3 = []
let p4 = []
let morteza = []
//--------------------------------------------------------------  allcards  -----------------------------------------------------------------------------

for (let i = 1; i <= 52; i++) {//اعداد یک تا پنجاه و دو               all cards borzani
    allCards.push(i);
}
for (i in allCards) {
    let val = allCards[i];
    if (allCards[i] < 14) {
        if (allCards[i] == 11)
            allCards[i] = "sarbaz"
        if (allCards[i] == 12)
            allCards[i] = "bibi"
        if (allCards[i] == 13)
            allCards[i] = "shah"
        allCards[i] += "_pick"
    }
    else if (val < 27 && val > 13) {
        allCards[i] = allCards[i] - 13
        if (allCards[i] == 11)
            allCards[i] = "sarbaz"
        if (allCards[i] == 12)
            allCards[i] = "bibi"
        if (allCards[i] == 13)
            allCards[i] = "shah"
        allCards[i] += "_gish"
    }
    else if (val < 40 && val > 26) {
        allCards[i] = allCards[i] - 26
        if (allCards[i] == 11)
            allCards[i] = "sarbaz"
        if (allCards[i] == 12)
            allCards[i] = "bibi"
        if (allCards[i] == 13)
            allCards[i] = "shah"
        allCards[i] += "_dell"
    }
    else if (val < 53 && val > 39) {
        allCards[i] = allCards[i] - 39
        if (allCards[i] == 11)
            allCards[i] = "sarbaz"
        if (allCards[i] == 12)
            allCards[i] = "bibi"
        if (allCards[i] == 13)
            allCards[i] = "shah"

        allCards[i] += "_khesht"
        // console.log(val)
    }
}
//------------------------------------------------------------  bor zan function  ------------------------------------------------------------------------------------
function borzan(p1) {

    var playerName = document.createElement("span")

    playerName.setAttribute("class", "playerName")

    document.body.appendChild(playerName)

    playerName.innerHTML = "PLAYER CARDS"
    var cardholder = document.createElement("div")

    cardholder.before(playerName)

    cardholder.setAttribute("class", "cardholder")

    document.body.appendChild(cardholder)
    for (let i = 0; i <= 12; i++) {//انتخاب 13 کارت
        //-------------------------------------------------------  random card choosing for p1 -------------------------------------------------------------------------
        let randNum = rand(0, allCards.length);
        let pCards = allCards.slice(randNum, randNum + 1)
        allCards.splice(randNum, 1)
        p1 = p1.concat(pCards)
        //------------------------------------------------------------- DOM coding ------------------------------------------------------------------- 
    }
 
    for (i in p1) {
        let cardDiv = document.createElement("div");

        // cardDiv.setAttribute("class","card")
        cardholder.appendChild(cardDiv)
        let cardNumber = p1[i].split("_")[0]
        let khal = p1[i].split("_")[1]
        var color;
        if (khal == "pick" || khal == "gish") {
            color = "black"
        }
        else {
            color = "red"
        }
        var dommy = `<div class="topBox"><span class="textSpan ${color}">${cardNumber}</span><img src="./assets/img/${khal}.jpg" class="imgBox" /></div><img src="./assets/img/${khal}.jpg" class="imgCenter" /><div class="bottomBox"><span class="textSpan ${color}">${cardNumber}</span><img src="./assets/img/${khal}.jpg" class="imgBox" />`

        cardDiv.setAttribute("class", "card")
        cardDiv.innerHTML = dommy
        // let leftPosition = cardDiv.offsetLeft;
        if (i != 0) {
            let priviousCard = cardDiv;
            priviousCard.before(".............. ........")
        }
        cardholder.appendChild(cardDiv);

    }
    let carddiv = document.querySelectorAll(".card")
    carddiv.forEach(e => {
        let topdis = (getComputedStyle(e).top)
        let topdisnumber = Number(topdis.slice((topdis.length) * (-1), -2))
        e.addEventListener("mouseover", mouseovering)
        e.addEventListener("mouseleave", mouseouting)
        function mouseovering() {
            topdis = topdisnumber - 200 + "px"
            e.style.top = topdis
        }
        function mouseouting() {
            topdis = topdisnumber + "px"
            e.style.top = topdis
        }
    })

}//-------------------------------------------------------------end of borzan--------------------------------------------------------
borzan(p1);
borzan(p2);
borzan(p3);
borzan(p4);