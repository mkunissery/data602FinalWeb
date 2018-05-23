import { CorrOptions } from './../analysisoptions';
import { Component, EventEmitter,Input,Output,OnInit,ElementRef, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs'
import { Subscription } from 'rxjs'



declare var Plotly: any;

@Component({
  selector: 'cmpchart',
  templateUrl: './cmpchart.component.html',
  styleUrls: ['./cmpchart.component.css']
})
export class CmpchartComponent implements OnInit {

  corroption:CorrOptions[];
  corrgrid:string;

  @ViewChild('chart') el: ElementRef;
  //constructor() { }

  constructor(private http: Http) { }

  getDatafromRestApi()
  {

    this.http.get("http://0.0.0.0:5000")
    .subscribe(

      (data: Response) => {
        const corrgrid = data.json()
        console.log(corrgrid);
      }

    )
  }

    @Input() data: any;
    @Input() layout: any;
    @Input() options: any;
    @Input() displayRawData: boolean;

  ngOnInit() {

        this.corroption = [
          {id:1,name:"Top 15 Cryptos by Market Cap"},
          {id:2,name:"Top 15 Cryptos by 1M Historical Vol"}
        ]
        console.log("ngOnInit chart component");
       // console.log(this.data);
       // console.log(this.layout);
        //Plotly.newPlot('myPlotlyDiv', this.data, this.layout, this.options);
        this.basicChart();
        this.getDatafromRestApi();
  }

  basicChart() {


    var colorscaleValue = [
      [-1, '#81a1ee'],
      [1, '#c51119']
  ];
    const element = this.el.nativeElement
    var cheatmap = element
    var xValues = ['BTC','ETH','XRP','BCH','LTC','XLM','DASH','XMR','XEM','ETC','LSK','ZEC','SC','REP','NXT']
    var yValues = ['BTC','ETH','XRP','BCH','LTC','XLM','DASH','XMR','XEM','ETC','LSK','ZEC','SC','REP','NXT']
    var  zValues=
    [
                  [1,0.85,0.82,0.74,0.79,0.74,0.84,0.81,0.6,0.71,0.79,0.8,0.72,0.55,0.73],
                  [0.85,1,0.88,0.8,0.8,0.78,0.85,0.73,0.66,0.75,0.8,0.83,0.71,0.56,0.72],
                  [0.82,0.88,1,0.79,0.77,0.85,0.83,0.75,0.68,0.76,0.8,0.85,0.71,0.45,0.76],
                  [0.74,0.8,0.79,1,0.72,0.68,0.82,0.72,0.53,0.69,0.74,0.78,0.62,0.43,0.64],
                  [0.79,0.8,0.77,0.72,1,0.7,0.79,0.68,0.55,0.72,0.77,0.71,0.62,0.4,0.71],
                  [0.74,0.78,0.85,0.68,0.7,1,0.78,0.7,0.72,0.69,0.77,0.8,0.79,0.44,0.75],
                  [0.84,0.85,0.83,0.82,0.79,0.78,1,0.74,0.66,0.73,0.81,0.86,0.7,0.51,0.74],
                  [0.81,0.73,0.75,0.72,0.68,0.7,0.74,1,0.47,0.58,0.65,0.78,0.64,0.45,0.65],
                  [0.6,0.66,0.68,0.53,0.55,0.72,0.66,0.47,1,0.55,0.64,0.63,0.65,0.37,0.66],
                  [0.71,0.75,0.76,0.69,0.72,0.69,0.73,0.58,0.55,1,0.71,0.74,0.62,0.37,0.59],
                  [0.79,0.8,0.8,0.74,0.77,0.77,0.81,0.65,0.64,0.71,1,0.75,0.7,0.47,0.77],
                  [0.8,0.83,0.85,0.78,0.71,0.8,0.86,0.78,0.63,0.74,0.75,1,0.76,0.49,0.74],
                  [0.72,0.71,0.71,0.62,0.62,0.79,0.7,0.64,0.65,0.62,0.7,0.76,1,0.47,0.69],
                  [0.55,0.56,0.45,0.43,0.4,0.44,0.51,0.45,0.37,0.37,0.47,0.49,0.47,1,0.39],
                  [0.73,0.72,0.76,0.64,0.71,0.75,0.74,0.65,0.66,0.59,0.77,0.74,0.69,0.39,1]
              ]


    const style = {
      margin: { t: 0 }
    }

    var data = [
      {
      z:zValues,
      x:xValues,
      y:yValues,
      colorscale: [[0.0, 'rgb(165,0,38)'], [0.1111111111111111, 'rgb(215,48,39)'], [0.2222222222222222, 'rgb(244,109,67)'],
        [0.3333333333333333, 'rgb(253,174,97)'], [0.4444444444444444, 'rgb(254,224,144)'], [0.5555555555555556, 'rgb(224,243,248)'],
        [0.6666666666666666, 'rgb(171,217,233)'],[0.7777777777777778, 'rgb(116,173,209)'], [0.8888888888888888, 'rgb(69,117,180)'],
        [1.0, 'rgb(49,54,149)']],
      zmin: -1,
      zmax: 1,
      showscale: false,

        type: 'heatmap'
      }
    ];

    var layout = {
      title: "Crypto Currency Correlation Matrix",
      autosize: false,
      width:1100,
      height:800,
      annotations: [],
      xaxis: {
          ticks: '',
          side: 'top'
      },
      yaxis: {
          ticks: '',
          ticksuffix: ' ',
          width: 700,
          height: 700,
          autosize: true,
          autorange: 'reversed'
      },
      margin: {
          l: 58,
          r: 0,
          b: 50,
          t: 100,
          pad: 0
      }
  };

  for ( var i = 0; i < yValues.length; i++ ) {
    for ( var j = 0; j < xValues.length; j++ ) {
        var currentValue = zValues[i][j];
        /*if (currentValue != 0.0) {
         var textColor = 'white';
         }else{
         var textColor = 'black';
         }*/
        var textColor = 'white';
        var result = {
            xref: 'x1',
            yref: 'y1',
            x: xValues[j],
            y: yValues[i],
            text: zValues[i][j],
            font: {
                family: 'Arial',
                size: 12,
                color: textColor // 'rgb(50, 171, 96)'
            },
            showarrow: false,
        };
        layout.annotations.push(result);
    }
}
    console.log("Coming inside to render basic chaft");
    Plotly.plot( element, data, layout )



    cheatmap.on('plotly_click', function(data){
      var pts = '';
      alert('x=' + data.points[0].x + "->" + data.points[0].y);
  });


  }

}
