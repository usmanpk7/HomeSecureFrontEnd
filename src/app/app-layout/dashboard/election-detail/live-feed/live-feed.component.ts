import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SharingServiceElection } from '../../SharingServiceElection';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit, AfterViewInit {

  @ViewChild('map6') mapElement: any;

  electionGalleryImageResult: any[] = [];
  electionGalleryLiveResult: any[] = [];
  electionGalleryVideoResult: any[] = [];
  electionGalleryResultData: any[] = [];
  electionPostWithGalleryResultData: any[] = [];
  maingalleryNews:any ={};
  maingalleryVideo:any ={};
  maingalleryImage:any ={};

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
  Video = false;
  News = false;
  Images = false;
  displayFilter: boolean;
  position: string;

  constructor(private sharingService: SharingServiceElection) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.map = new google.maps.Map(document.getElementById("map6") as HTMLElement, {
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
                  '<div class="card" style="background-color: #ffffff;">' +
                      '<div class="row p-2">' +
                          '<div class="col-8">' +
                              '<button class="btn btn-sm bg-custom-primary text-white btn-block">Tag</button>' +
                          '</div>' +
                          '<div class="col-4 pt-1 pr-6 text-right">' +
                              '<img src="' + m.circlePath + '" width="16">' +
                              '<i> </i>' +
                          '</div>' +
                          '<div class="col-6">' +
                              '<h6 class="fs=08">Resion:</h6>' +
                          '</div>' +
                          '<div class="col-6">' +
                              '<h6 class="fs=08">Nigeria</h6>' +
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
                      '<h6 class="text-custom-activities fs-09 mb-1">Title</h6>' +
                      '<h6 class="text-custom-primary fs-07">Polling unit pw-412 Activity Stopped </h6>' +
                      '</div>' +
                      '</div>' +
                      '<div class="col-md-6 bg-activities-card3 custom-border-primary  pl-0"  style="border-bottom: 2px solid #6751ED">' +
                      '<div class="col-md-2 mt-6 pl-0">' +
                      '<i class="fa fa-solid fa-signal text-custom-primary"></i>' +
                      '</div>' +
                      '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                      '<h6 class="text-custom-activities fs-09 mb-1">Uploaded By</h6>' +
                      '<h6 class="text-custom-primary fs-07">Willaim</h6>' +
                      '</div>' +
                      '</div>' +
                      '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0"  style="border-bottom: 2px solid #6751ED">' +
                      '<div class="col-md-2 mt-6 pl-0">' +
                      '<i class="fa fa-solid fa-signal text-custom-primary"></i>' +
                      '</div>' +
                      '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                      '<h6 class="text-custom-activities fs-09 mb-1">Date</h6>' +
                      '<h6 class="text-custom-primary fs-07">Nov, 1, 2022</h6>' +
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

  getElectionPostGalleryData() {
    this.electionGalleryResultData = this.sharingService.getElectionPostGalleryData();
    this.electionGalleryImageResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 1);
    if(this.electionGalleryImageResult.length > 0){
      this.selectMainGalleryImage(this.electionGalleryImageResult[0])
    }
    this.electionGalleryLiveResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 4);
    if(this.electionGalleryLiveResult.length > 0){
      this.selectMainGalleryImage(this.electionGalleryLiveResult[0])
    }
    this.electionGalleryVideoResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 3);
    if(this.electionGalleryVideoResult.length > 0){
      this.selectMainGalleryImage(this.electionGalleryVideoResult[0])
    }
}

selectMainGalleryNews(obj:any){
this.maingalleryNews = obj;
}
selectMainGalleryVideo(obj:any){
  this.maingalleryVideo = obj;
}
selectMainGalleryImage(obj:any){
  this.maingalleryImage = obj;
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

  selectLocation(){
    this.Location = true;
    this.Video = false;
    this.News = false;
    this.Images = false;
  }
  selectVideos(){
    this.Location = false;
    this.Video = true;
    this.News = false;
    this.Images = false;
  }
  selectNews(){
    this.Location = false;
    this.Video = false;
    this.News = true;
    this.Images = false;
  }
  selectImages(){
    this.Location = false;
    this.Video = false;
    this.News = false;
    this.Images = true;
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
