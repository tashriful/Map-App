function initMap() {

    //map options
    var options = {
        zoom: 7,
        center: {
            lat: 23.8103,
            lng: 90.4125
        }
    }
    //new map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // geolocation api.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            //Map Marker
            var marker = new google.maps.Marker({
                position: currentLocation,
                map: map,
                title: 'Current position'
            });

            //map marker click function
            google.maps.event.addListener(marker, 'click', (function (marker) {
                return function () {
                    document.getElementById("lan").value = this.position;
                    $("#myModal").modal('show');
                }
            })(marker));

        }, function () {
            //location access denied by the user
            alert('Unable to retrieve your location');
        });
    } else {
        // Browser doesn't support Geolocation
        alert('Geolocation is not supported by your browser');
    }
}

//Form button click function
function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("name").value;
    var inputVal2 = document.getElementById("lan").value;

    // Displaying the value
    console.log("Current Cordinates: " + inputVal2 + ", Name: " + inputVal);
}
