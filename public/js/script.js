  var latLong = dataObject.parkStuff.Latlong;
  var newLat = latLong.split(":");
  var longitude = parseFloat(newLat[2]);
  var lattitude = parseFloat(newLat[1].split(",")[0]);
  console.log(longitude);
  console.log(lattitude);
  

  var locations = [{lat:-25.363, lng:131.044}];
  locations[0].lat = lattitude;
  locations[0].lng = longitude;
  console.log(locations);
  function initMap() {
        

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById("state-map"), {
          center: locations[0],
          zoom: 11
        });

        // Create a marker and set its position.
        var marker, i;
        
        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i]),
          map: map
      });
      };
    }



