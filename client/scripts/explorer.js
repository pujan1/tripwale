var typingTimer;
var doneTypingInterval = 2000;
var outputstr2;
var newlatlng = { lat: -25.363, lng: 131.044 };

function initialize3() {
        initMap();
        initAutoComplete();
}
var placeSearch, autocomplete;

function initAutoComplete() {
        autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete4'));
}

function myFunction() {
        console.log(document.getElementById('autocomplete').value);
}

function initMap() {
        var myLatLng = { lat: 37.332716, lng: -121.882374 };
        var map = new google.maps.Map(document.getElementById('map-container'), {
                zoom: 10,
                center: myLatLng,
        });
        var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
        });
}

function addmarkers(lat, lng) {
        console.log("comes inside here");
        
        var mapOptions = {
                zoom: 10,
                center: new google.maps.LatLng(37.332716, -121.882374)
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                title: "hello"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
}

function processplaces() {
        var sightsdetailsarray = [];
        document.getElementById("populateexplore").innerHTML = "";
        var query = document.getElementById("queri").value;
        if (query == null) { sweetAlert("please enter a query"); }
        var str = document.getElementById("autocomplete4").value;
        var str = str.replace(/ /g, "%20");
        var url = "https://api.foursquare.com/v2/venues/explore?near=" + str + "&venuePhotos=1&radius=100000&v=20161117&query=" + query + "&m=foursquare&client_secret=L1J2NHSD3UK4ZAHH2JRGUQXHMED41PH3YOCYAMJS1GYARFJE&client_id=OI0JUH3OU4C0GM20F1CTT40Y1R5TBRXWTHQPJJQD4PKFFKKX";
        $.getJSON(url, function(jsonresult2) {
                for (var i = 0; i < 22; i++) {
                        addmarkers(jsonresult2.response.groups[0].items[i].venue.location.lat, jsonresult2.response.groups[0].items[i].venue.location.lat);
                        phototemp = jsonresult2.response.groups[0].items[i].venue.photos.groups[0].items[0].prefix + "original" + jsonresult2.response.groups[0].items[i].venue.photos.groups[0].items[0].suffix;

                        if (i%3 == 0) {
                                $("#populateexplore").append('<dic class="clearfix"></div><div class="col-lg-4 col-md-12" style="float:left"><div class="card"><img src="' + phototemp + '" style="width:100%;height:200px;"><div class="container"> <h4> <b> ' + jsonresult2.response.groups[0].items[i].venue.name + '</b></h4><hr><p>Category:' + jsonresult2.response.groups[0].items[i].venue.categories[0].name + '</p></div></div></div>');
                        }
                        else{
                                $("#populateexplore").append('<div class="col-lg-4 col-md-12" style="float:left"><div class="card"><img src="' + phototemp + '" style="width:100%;height:200px;"><div class="container"> <h4> <b> ' + jsonresult2.response.groups[0].items[i].venue.name + '</b></h4><hr><p>Category:' + jsonresult2.response.groups[0].items[i].venue.categories[0].name + '</p></div></div></div>');
                        }
                        
                }
        }).error(function() { sweetAlert("Cannot find the place"); });
}