import axios from "axios";
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: 'OK' | 'ZERO_RESULTS';
};

// declare var google: any;
const GoogleAPIKey = 'AIzaSyDc4uaNOe_ikV2pFDjHq1hRNdlAN1sysBo';
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDc4uaNOe_ikV2pFDjHq1hRNdlAN1sysBo
function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    axios.get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GoogleAPIKey}`
    ).then(response => {
        if (response.data.status !== 'OK') {
            throw new Error('Could not fetch data');
        }

        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            center: coordinates,
            zoom: 8
        });
        new google.maps.Marker({ position: coordinates, map: map })
    }).catch(e => {
        alert(e.message);
        console.log(e);
    });
}

form.addEventListener('submit', searchAddressHandler);