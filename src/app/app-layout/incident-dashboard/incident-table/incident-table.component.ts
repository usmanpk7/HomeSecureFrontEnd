import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-table',
  templateUrl: './incident-table.component.html',
  styleUrls: ['./incident-table.component.css']
})
export class IncidentTableComponent implements OnInit {

  // constructor() { }

   products=[
    {
      type:"SOS",
      date:"12/12/2022 11:50:58 AM",
      id:"1000",
      control:"Emmanuel_Softseer",
      image:"C:\Users\Numan-PC\Desktop\work\CrossSoution_HomeSecureFrontend\src\assets/sos-icon.png",
      source:"Emmanuel_Softseer",
      location:"X735+GHH,900102, Mopol 44, Barracks kuje, Nigeria",
      status: "Acknowledged",
      sla:"34(45)",
      report:"None",
      geofence:"String",
      priority:4
    },
    {
      type:"SOS",
      date:"12/12/2022 11:50:58 AM",
      id:"1000",
      control:"Emmanuel_Softseer",
      image:"bamboo-watch.jpg",
      source:"Emmanuel_Softseer",
      location:"X735+GHH,900102, Mopol 44, Barracks kuje, Nigeria",
      status: "Acknowledged",
      sla:"34(45)",
      report:"None",
      geofence:"String",
      priority:4
    },
  {
    type:"SOS",
    date:"12/12/2022 11:50:58 AM",
    id:"1000",
    control:"Emmanuel_Softseer",
    image:"",
    source:"Emmanuel_Softseer",
    location:"X735+GHH,900102, Mopol 44, Barracks kuje, Nigeria",
    status: "Acknowledged",
    sla:"34(45)",
    report:"None",
    geofence:"String",
    priority:4
  }
  
  ]
  selectedProducts: any[];
  ngOnInit(): void {
  }

}
