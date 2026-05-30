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

    document.getElementById("confirmation").innerHTML =
        "Registration Successful!";
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