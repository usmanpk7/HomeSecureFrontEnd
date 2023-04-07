import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-political-activity',
  templateUrl: './political-activity.component.html',
  styleUrls: ['./political-activity.component.css']
})
export class PoliticalActivityComponent implements OnInit {

  partyActivityData: any;
  partyActivityOptions: any;
  constructor() { }

  ngOnInit(): void {
    this.partyActivityData = {
      labels: ['Other', 'Abuja', 'Kano', 'Lagos'],
      datasets: [
          {
              label: 'Labour',
              backgroundColor: '#9484f2',
              data: [1900, 1254, 400, 1100]
          },
          {
            label: 'Democratic',
            backgroundColor: '#4a2fe9',
            data: [1653, 1245, 700, 1122]
        },
        {
          label: 'Librel',
          backgroundColor: '#7471ff',
          data: [1754, 1340, 900, 1432]
      }
      ]
  };
  this.partyActivityOptions = {
    indexAxis: 'y',
    legend: {
      position: 'top',
      labels: {
        fontSize: 14,
        usePointStyle: true
    }
  },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true
          }
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false,
            color: '#FF6C88',
          },
        },
        
      ],
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
};
  }

}
