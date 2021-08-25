
let mapContainer = document.getElementById('map');


    // // function initMap(){
    //     fetch("https://www.google.com/maps/@?api=1&map_action=map")
    //     .then(response =>{
    //         if(response.true){
    //             map = new google.maps.Map(document.getElementById("map"), {
    //                           center: { lat: 14.556586, lng: 121.023415 },
    //                           zoom: 12,
    //                         });
    //             alert('success')
    //         }else{
    //             alert("failed")
    //         }
    //     })
                    




    function initMap(){
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 14.556586, lng: 121.023415 },
          zoom: 12,
        });
    
}
function googleMapsApi(){
    mapContainer.style.visibility = 'visible';
    
}
