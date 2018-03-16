import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: any;
  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  loading: any;
  complete: any;
  completeItems : any;
    start = 'chicago, il';
  
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
    @ViewChild('map') mapElement: ElementRef;

  constructor(
    public zone: NgZone,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController) {

    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: '' };

    this.autocompleteItems = [];
    this.complete = {input: ''};
    this.completeItems = [];
    this.markers = [];
    this.loading = this.loadingCtrl.create();
  }

 ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: 17.3850, lng: 78.4867}
    });

    this.directionsDisplay.setMap(this.map);
  }

  



  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        if(predictions){
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        }
    });
  }

 searchResults(){
    if (this.complete.input == '') {
      this.completeItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.complete.input },
      (predictions, status) => {
        this.completeItems = [];
        if(predictions){
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.completeItems.push(prediction);
            });
          });
        }
    });
  }

  selectSearchResult(item){
  console.log("item value",item);
   // this.clearMarkers();
    this.autocompleteItems = [];
    let ab;
    this.ab = item.description;
    console.log(this.ab);

    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        // let position = {
        //     lat: results[0].geometry.location.lat,
        //     lng: results[0].geometry.location.lng
        // };
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map
        });
        //console.log(position);
        console.log(marker);
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
        //this.calculateAndDisplayRoute();
      }
    })
  }

  sSearchResult(item){
  console.log("item value",item);
   // this.clearMarkers();
    this.completeItems = [];
    let abc;
    this.abc = item.description;
    console.log(this.abc);

    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        // let position = {
        //     lat: results[0].geometry.location.lat,
        //     lng: results[0].geometry.location.lng
        // };
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map
        });
        //console.log(position);
        console.log(marker);
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
        this.calculateAndDisplayRoute();
      }
    })
  }


     calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.ab,
      destination: this.abc,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

    console.log('ab value',this.ab);
    console.log('abc value',this.abc);
  }



  clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

}