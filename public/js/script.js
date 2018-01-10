  var locations = [
          { lat:-25.363,
            lng:131.044},
          { lat:-25.363,
            lng:137.044}
        ]
        ;
  function initMap() {
        

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById("state-map"), {
          center: locations[0],
          zoom: 4
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

