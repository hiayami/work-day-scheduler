console.log ("javascript running")
// console.log (moment().format('LT'));
console.log (moment().format());

var currentTime = moment().format();
let currentHour = currentTime.substr(11,2);
// let currentHour = 11;
console.log (currentHour);

document.querySelectorAll("textarea").forEach((element, idx) => {
    console.log(9+ idx, currentHour);
    if (9 + idx == currentHour) {
        element.style.backgroundColor="red"
    } else if (9 + idx < currentHour) {
        element.style.backgroundColor="grey"
    } else {element.style.backgroundColor="green"}
});


function saveTextArea(e) {
    console.log(e, this);
    const hour = e.target.dataset.hour
    const content = document.querySelectorAll(`textarea[data-hour="${hour}"]`).value;
    console.log (content);
    localStorage.setItem("data", content);
}
document.querySelectorAll(`textarea[data-hour="17"]`).value=localStorage.getItem("data");
console.log("data");
// $("list-group-item-primary").css("background-color", "gray");ß