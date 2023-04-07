import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  @ViewChild('map5') mapElement: any;

  map: google.maps.Map;
  infoWindow: google.maps.InfoWindow;
  markers: Markers[];
  selectedDriverId = 0;
  mapSwitch = true;
  satteliteSwitch = false;
  mapCenter = [9.0820, 8.6753];
  basemapType = 'hybrid';
  mapZoomLevel = 5;
  GISMAP = false; 
  GOOGLEMAP = true;
  Location = true; 
  Activities = false;
  displayFilter: boolean;
  position: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    
    this.map = new google.maps.Map(document.getElementById("map5") as HTMLElement, {
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
              '<div class="col-md-12">' +
                  '<div class="row">' + 
                  '<div class="col"><i class="fa fa-calendar text-custom-primary"></i></div>' +
                  '<div class="col"><i class="fa fa-phone text-custom-primary"></i></div>' +
                  '<div class="col"><i class="fas fa-comment-dots text-custom-primary"></i></div>' +
                  '<div class="col"><i class="fa fa-envelope text-custom-primary"></i></div>' +
                  '<div class="col"><i class="fa fa-users text-custom-primary"></i></div>' +
                  '</div>'  +        
              '</div>' +
              '<div class="col-md-9">' +
                  '<h6 class="fs-08 text-custom-primary">Distress Caller <span>William</span></h6>' + 
                  '<h6 class="fs-07">Mohammed Maccido Road, Airport Rd, Abuja, Nigeria</h6>'  +        
              '</div>' +
              '<div class="col-md-3">' +
                  '<img src="/assets/Dashboard/accidentlocation.png" width="20"></img>' +   
                  '<h6 class="fs-07">SOS</h6>' +     
              '</div>' +
              '<div class="col-md-12">' +
                  '<div class="card" style="background-color: #ffffff;">' +
                      '<div class="row p-2">' +
                          '<div class="col-8">' +
                              '<button class="btn btn-sm bg-custom-primary text-white btn-block">User Dispatched </n> Acknowleged</button>' +
                          '</div>' +
                          '<div class="col-4 pt-1 pr-6 text-right">' +
                              '<img src="' + m.circlePath + '" width="16">' + 
                              '<i> </i>' +                      
                          '</div>' +
                      '</div>' +
                  '</div>' +
              '</div>' +
              '<div class="col-md-12">' +
                  '<div class="card" style="background-color: #E2E1FF;">' +
                      '<div class="">' +
                      '<div class="col-md-12 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                      '<div class="col-md-2 mt-6 pl-0">' +
                      '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                      '</div>' +
                      '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                      '<h6 class="text-custom-activities fs-09 mb-1">Contact No</h6>' +
                      '<h6 class="text-custom-primary fs-07">0000-00000-00</h6>' +
                      '</div>' +
                      '</div>' +
                      '<div class="col-md-6 bg-activities-card3 custom-border-primary  pl-0"  style="border-bottom: 2px solid #6751ED">' +
                      '<div class="col-md-2 mt-6 pl-0">' +
                      '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                      '</div>' +
                      '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                      '<h6 class="text-custom-activities fs-09 mb-1">Last Call</h6>' +
                      '<h6 class="text-custom-primary fs-07">7:40 AM</h6>' +
                      '</div>' +
                      '</div>' +
                      '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0"  style="border-bottom: 2px solid #6751ED">' +
                      '<div class="col-md-2 mt-6 pl-0">' +
                      '<i class="fa fa-solid fa-signal text-custom-primary"></i>' +
                      '</div>' +
                      '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                      '<h6 class="text-custom-activities fs-09 mb-1">Total Calls</h6>' +
                      '<h6 class="text-custom-primary fs-07">22</h6>' +
                      '</div>' +
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

  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
  MapTypeGoogleToGIS(){
    this.GISMAP = true;
    this.GOOGLEMAP = false;
  }
  MapTypeGISToGoogle(){
    this.GOOGLEMAP =true;
      this.GISMAP = false;     
  }

  LocationToActivites(){
    this.Activities = true;
    this.Location = false;
  }
  ActivitiesToLocation(){
    this.Location =true;
      this.Activities = false;     
  }

  showFilterDialog(position: string) {
    this.displayFilter = true;
    this.position = position;
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
