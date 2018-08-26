import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-resume',
  templateUrl: './dashboard-resume.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard-resume.component.css']
})
export class DashboardResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(0,125,0,1)',
      borderColor: 'rgba(255,255,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';

  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];

  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  public options = {
    scaleLabel: {
      fontColor: "#CCC8BC"
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          fontColor: "#CCC8BC"
        }
       /* gridLines: {
          display: false,
          color: "#CCC8BC",
          lineWidth: 3,
          zeroLineWidth: 3,
          zeroLineColor: "#2C292E",
          drawTicks: true,
          tickMarkLength: 3
        },
        ticks: {
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 12,
          fontStyle: "bold",
          fontColor: "#545454"
        }*/
      }]
    },
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'white'
      },
    }
  }

}