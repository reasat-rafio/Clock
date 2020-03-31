const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
const hand = document.querySelectorAll(".hand")

function setDate() {
    const now = new Date()


    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`


    const mins = now.getMinutes();
    minDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`



    const hours = now.getHours()
    hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

}

// function remove() {
//     if (hand.style.transform = "rotate(449deg)") {
//         hand.style.transition = "all 0s"
//     }
// }

setInterval(setDate, 1000);


