function initMap() {
        var myLatLng = { lat: 37.332716, lng: -121.882374 };
        var map = new google.maps.Map(document.getElementById('map-container'), {
                zoom: 10,
                center: myLatLng,
        });
        var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'We are located here!!!!'
        });
}