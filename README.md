# work-day-scheduler
About this project: 
Create a web application that functions as a work-day schedule. 
-The top of the page should show the current date
-When user scrolls down, they are presented with timeblocks for standard business hours.
-Each time block is color coded to indicate whether it is in the past, present, or future. (Grey for past, Red for present, Green for future).
-When the user clicks into a timeblock, they can enter an event
-When user clicks the "save" button, the event is saved in local storage.
-When the page is refreshed, events saved persist.

Process:
Grid for colomns and rows were created using bootstrap in the HTML.
Floppy disc save icon from Font Awesome.
Added additional classes to style the columns and buttons.
Momentjs used in js to display the current date. 
Momentjs used to create a let currentHour to be used in an if/else function to style the color of the timeblocks based off the current time. 
Added buttons for user to click and save event from the timeblock, did this by adding an onclick event. 
Used a map data structure to display events in each timeblock.
localStorage.setItem to save the events from each timeblock.
After saving to local storage, when the page reloads created a document.querySelectorAll for all the text area elements (timeblocks) to display the content that was saved from the map data structure.
![Work Day Scheduler](https://user-images.githubusercontent.com/98536530/160259715-b3a29362-643e-407d-82e4-0d9e688db581.png)
