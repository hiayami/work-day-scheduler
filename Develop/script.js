console.log ("javascript running")
// console.log (moment().format('LT'));
console.log (moment().format());

var currentTime = moment().format();
let currentHour = currentTime.substr(11,2);
// let currentHour = 11;
console.log (currentHour);

document.querySelectorAll(".list-group-item-primary").forEach((element, idx) => {
    console.log(9+ idx, currentHour);
    if (9 + idx == currentHour) {
        element.style.backgroundColor="red"
    } else if (9 + idx < currentHour) {
        element.style.backgroundColor="grey"
    } else {element.style.backgroundColor="green"}
});

// $("list-group-item-primary").css("background-color", "gray");