import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('googlemap') mapElement: any;

  map: google.maps.Map;
  infoWindow: google.maps.InfoWindow;
  // markers: Markers[];
  private markers: Markers[] = [];
  selectedDriverId = 0;
  mapSwitch = true;
  satteliteSwitch = false;

  @Input()
  set marker(marker: Markers[]) {
    this.markers = marker;
  }

  get marker(): Markers[] {
    return this.markers;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.map = new google.maps.Map(document.getElementById("googlemap") as HTMLElement, {
      zoom: 8,
      center: new google.maps.LatLng(9.0820, 8.6753),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    this.markers = [];
    this.markers.push({
      latitude:9.0820,
      longitude:8.6753,
      name:"Tayyab",
      locationIconPath:"assets/Dashboard/locationred.png",
      imagePath:"assets/Dashboard/Tayyab.PNG",
      circlePath:"assets/Dashboard/red.png",
      contactNo:"0302-4017692",
      id:"NG-9856325",
      city:"Nigeria"
    });
    this.markers.push({
      latitude:9.0765,
      longitude:7.3986,
      name:"Emmanuel",
      locationIconPath:"assets/Dashboard/locationpink.png",
      imagePath:"assets/Dashboard/Ellipse.png",
      circlePath:"assets/Dashboard/pink.png",
      contactNo:"0000-00000000",
      id:"NG-25114296",
      city:"Abuja"
    });
    this.markers.push({
      latitude:8.5060,
      longitude:8.5227,
      name:"Irshad",
      locationIconPath:"assets/Dashboard/locationyellow.png",
      imagePath:"assets/Dashboard/Ellipse.png",
      circlePath:"assets/Dashboard/yellow.png",
      contactNo:"0000-8542265",
      id:"NG-98745214",
      city:"Lafia"
    });
    this.markers.push({
      latitude:9.8965,
      longitude:8.8583,
      name:"Faizan",
      locationIconPath:"assets/Dashboard/locationblue.png",
      imagePath:"assets/Dashboard/Ellipse.png",
      circlePath:"assets/Dashboard/blue.png",
      contactNo:"8542-9865471",
      id:"NG-1236547889",
      city:"Jos"
    });

    this.Mapmarker()
  }

  MapCheck(){
    if(this.mapSwitch){
      this.map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
      this.satteliteSwitch = true;
      this.mapSwitch = false;
    }else {
      this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
      this.mapSwitch = true;
      this.satteliteSwitch = false;
    }
  }

  Mapmarker(){
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(this.map);
    this.markers.forEach(m => {
      var marker = new google.maps.Marker({
        title:m.name,
        position: new google.maps.LatLng(m.latitude, m.longitude),
        icon: m.locationIconPath,
        map: this.map
      });
      var markerInfo = '<div >' +
        '<div style="width: 215px !important;">' +
      '<div class="card" style="background-color: #F0EEFC;">' +
          '<div class="row p-2" >' +
              '<div class="col-md-12 text-center">' +
                  '<img src="' + m.imagePath +'" style="border-radius: 50%;" width="80">' +
              '</div>' +
              '<div class="col-md-7">' +
                  '<h6 style="font-size: 0.8rem;"><b>Concered Person</b></h6>' +
              '</div>' +
              '<div class="col-md-5 text-right">' +
                  '<h6 style="font-size: 0.7rem;"><b>' + m.name + '</b></h6>' +
              '</div>' +
              '<div class="col-md-12">' +
                  '<div class="card" style="background-color: #ffffff;">' +
                      '<div class="row p-2">' +
                          '<div class="col-8">' +
                              '<button class="btn btn-sm btn-primary btn-block">Available</button>' +
                          '</div>' +
                          '<div class="col-4 pt-1 pr-6 text-right">' +
                              '<img src="' + m.circlePath + '" width="16">' +
                          '</div>' +
                          '<div class="col-6 mt-3">' +
                              '<h6 style="font-size: 0.8rem;">Region</h6>' +
                          '</div>' +
                          '<div class="col-6 mt-3">' +
                              '<h6 style="font-size: 0.7rem;">' + m.city + '</h6>' +
                          '</div>' +
                      '</div>' +
                  '</div>' +
              '</div>' +
              '<div class="col-md-12 text-center">' +
                  '<div class="card" style="background-color: #E2E1FF;">' +
                      '<div class="row p-2">' +
                          '<div class="col-6">' +
                              '<i class="fa fa-calendar text-primary"></i>' +
                          '</div>' +
                          '<div class="col-6 text-left">' +
                              '<h6 style="font-size: 0.8rem;">Contact No</h6>' +
                          '</div>' +
                          '<div class="col-12">' +
                              '<h6 class="text-primary" style="font-size: 0.7rem;">' + m.contactNo + '</h6>' +
                          '</div>' +
                          '<div class="col-10 mt-3 ml-5 mb-3" style="border-bottom: 2px solid #6751ED;"></div>' +
                          '<div class="col-6">' +
                              '<i class="fa fa-signal text-primary"></i>' +
                          '</div>' +
                          '<div class="col-6 text-left">' +
                              '<h6 style="font-size: 0.8rem;">Id</h6>' +
                          '</div>' +
                          '<div class="col-12">' +
                              '<h6 class="text-primary" style="font-size: 0.7rem;">' + m.id + '</h6>' +
                          '</div>' +
                      '</div>' +
                  '</div>' +
              '</div>' +
          '</div>' +
      '</div>' +
    '</div>' +
  '</div>';


      var iw = new google.maps.InfoWindow({
        content: markerInfo
      });
      google.maps.event.addListener(marker, "click", function (e) { iw.open(this.map, this); });
    });

  }

}

export class Markers {
  latitude: number;
  longitude: number;
  name: string;
  locationIconPath: string;
  imagePath:string;
  circlePath:string;
  city: string;
  contactNo: string;
  id: string;
};
