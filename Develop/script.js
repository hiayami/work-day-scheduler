console.log (moment().format());

//current day at top of page
var currentDate = moment().format("MMMM Do YYYY")
console.log (currentDate);
document.querySelector('#currentDay').innerText=currentDate

//momentjs for current time
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

//get user entry, and if there is no entry, create an empty one. JSON to wrap all the information from user and to keep it in local storage.
const data= JSON.parse(localStorage.getItem("data")) || {}

//when user hits "save button"...
function saveTextArea(event) {
    const hour = event.target.dataset.hour
    const content = document.querySelector(`textarea[data-hour="${hour}"]`).value;
    console.log (content);
    //it saves the content for each hour..
    data[hour]=content;
    localStorage.setItem("data", JSON.stringify(data));
}
//then when the page reloads, all the info from every hour saved is presented in the text field
document.querySelectorAll('textarea[data-hour]').forEach(element => {
    const hour = element.dataset.hour
    //it will display the user input if entered and saved, otherwise it will disply an empty string. Looks like an empty text field for the user of application.
    element.value = data[hour] || ''
})
