
var typingTimer;
var doneTypingInterval = 2000;
var outputstr2;


function initialize() {
	
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
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat: 37.332716,
            lng: -121.882374


            
        },
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]

    });

}


function processplaces() {
    var sightsdetailsarray = [];
    document.getElementById("populateexplore")
        .innerHTML = "";
    var query = document.getElementById("queri").value;
    if (query == null) {
        sweetAlert("please enter a query");
    }
    var str = document.getElementById("autocomplete4").value;
    var str = str.replace(/ /g, "%20");

    var url = "https://api.foursquare.com/v2/venues/explore?near=" + str + "&venuePhotos=1&radius=100000&v=20161117&query=" + query + "&m=foursquare&client_secret=L1J2NHSD3UK4ZAHH2JRGUQXHMED41PH3YOCYAMJS1GYARFJE&client_id=OI0JUH3OU4C0GM20F1CTT40Y1R5TBRXWTHQPJJQD4PKFFKKX";


   


    $.getJSON(url, function(jsonresult2) {

        for (var i = 0; i < 30; i++) {
            phototemp = jsonresult2.response.groups[0].items[i].venue.photos.groups[0].items[0].prefix + "original" + jsonresult2.response.groups[0].items[i].venue.photos.groups[0].items[0].suffix;

            $("#populateexplore")
                .append('<div class="col-lg-3 col-md-4 col-sm-6" style="float:left"><div class="card"><img src="' + phototemp + '" style="width:100%;height:200px;"><div class="container"> <h4> <b> ' + jsonresult2.response.groups[0].items[i].venue.name + '</b></h4><hr><p>Category:' + jsonresult2.response.groups[0].items[i].venue.categories[0].name + '</p></div></div></div>');
        }


    }).error(function() { sweetAlert("Cannot find the place"); });
    
}