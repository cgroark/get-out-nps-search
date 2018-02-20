  var latLong = dataObject.parkStuff.Latlong;
  var newLat = latLong.split(":");
  var longitude = parseFloat(newLat[2]);
  var lattitude = parseFloat(newLat[1].split(",")[0]);
  var locations = [];
  locations.push({lat:lattitude, lng:longitude});
  console.log(locations);
  
  function initMap() {
        var map = new google.maps.Map(document.getElementById("state-map"), {
          center: locations[0],
          zoom: 11
        });

        var marker, i;
        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i]),
          map: map
      });
      };
    }


