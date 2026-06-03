// console.log("Welcome to the Community Portal");
// const eventName = "Music Festival";
// const eventDate = "10 June 2026";
// let availableSeats = 50;


class Event{

    constructor(
        name,
        category,
        seats,
        isPast
    ){

        this.name = name;
        this.category = category;
        this.seats = seats;
        this.isPast = isPast;
    }
}
Event.prototype.checkAvailablitiy = function(){
    return (
   !this.isPast && this .seats > 0
    );
}
const eventInfo = `Event :${eventName}
Date : ${eventDate}
Seats: ${availableSeats}
`;
console.log(eventInfo);

// function registerSeat()
// {
//     availableSeats--;
//     console.log("Seat Registered. Remaining Seats: " + availableSeats);
// }

const events = [

    new Event(
        "Music Festival",
        "Music",
        50,
        false
    ),

    new Event(
        "Food Carnival",
        "Food",
        0,
        false
    ),

    new Event(
        "Book Fair",
        "Education",
        30,
        true
    )
];

//Object.Entries
const musicEvent = new Event(
    "Music Fest",
    "Music",
    50,
    false
)
Object.entries(musicEvent).forEach(function(entry){
    console.log(entry[0],
        entry[1]
    )
})

function addEvent(event){

    events.push(event);

    console.log(
        `${event.name} added successfully`
    );
}

// use of filter()
const musicEvents = events.filter((event => event.category === "Music"));
console.log(musicEvents);

// use of Map();
const eventCards = events.map(
    event => {
        return {
            title : `Workshop on ${event.name}`,
            seats : event.seats,
        }
    }
    
)
console.log(eventCards);


events.forEach(function(event){

    if(event.checkAvailablitiy()){

        console.log(
            `${event.name} is available`
        );

    }
    else{

        console.log(
            `${event.name} is full`
        );

    }

    

});

function filterEventsByCategory(category){

    return events.filter(function(event){

        return event.category === category;

    });
}

//closure funcion
function registrationTracker(){

    let totalRegistrations = 0;

    return function(){

        totalRegistrations++;

        console.log(
            `Total Registrations:
             ${totalRegistrations}`
        );
    };
}
// instance of closure function
const trackMusicRegistration = registrationTracker();

// high order function
function filterEvents(callback){

    return events.filter(callback);
}
const availableEvents =
    filterEvents(function(event){

        return event.seats > 0;

    });

console.log(availableEvents);

function validatePhone(){

    let phone =
        document.getElementById("phone").value;

    if(phone.length !== 10){
        alert("Enter Valid Phone Number");
    }
}

function showFee(){

    let fee =
        document.getElementById("eventType").value;

    document.getElementById("fee").innerHTML =
        "Event Fee : ₹" + fee;
}

function registerUser(){

    try{

        if(availableSeats <= 0){

            throw new Error(
                "No seats available"
            );
        }

        availableSeats--;

        document.getElementById(
            "confirmation"
        ).innerHTML =
            `Registration Successful!
             Seats Left: ${availableSeats}`;

    }
    catch(error){

        alert(error.message);

    }
}

function enlargeImage(){

    let img =
        document.getElementById("zoomImage");

    img.style.width = "400px";
}

function countChars(){

    let text =
        document.getElementById("feedback").value;

    document.getElementById("charCount").innerHTML =
        text.length;
}

function videoReady(){

    document.getElementById("videoMsg").innerHTML =
        "Video Ready To Play";
}

function savePreference(){

    let event =
        document.getElementById("eventType").value;

    localStorage.setItem(
        "preferredEvent",
        event
    );
}

window.onload = function(){
    alert ("Community Portal Loaded Successfully");

    let saved =
        localStorage.getItem("preferredEvent");

    if(saved){

        document.getElementById("eventType").value =
            saved;
    }
}

function clearStorage(){

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}

function findLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(
            success,
            error,
            {
                enableHighAccuracy:true,
                timeout:5000
            }
        );
    }
}

function success(position){

    document.getElementById("location").innerHTML =
        "Latitude : " +
        position.coords.latitude +
        "<br>Longitude : " +
        position.coords.longitude;
}

function error(err){

    alert("Location Error: " + err.message);
}

function confirmExit(){

    return "Form not saved.";
}