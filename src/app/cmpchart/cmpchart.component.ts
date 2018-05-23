import { CorrOptions } from './../analysisoptions';
import { Component, EventEmitter,Input,Output,OnInit,ElementRef, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs'
import { Subscription } from 'rxjs'
import _ from 'lodash';


declare var Plotly: any;

@Component({
  selector: 'cmpchart',
  templateUrl: './cmpchart.component.html',
  styleUrls: ['./cmpchart.component.css']
})
export class CmpchartComponent implements OnInit {

  corroption:CorrOptions[];


  @ViewChild('chart') el: ElementRef;
  //constructor() { }

  constructor(private http: Http) { }

  getDatafromRestApi()
  {


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

    var corrgrid = {};
    var colorscaleValue = [
      [-1, '#81a1ee'],
      [1, '#c51119']
  ];
    var xValues, yValues;
    var zValues = [];
    const element = this.el.nativeElement
    var cheatmap = element


    this.http.get("http://0.0.0.0:5000")
    .subscribe(

      (data: Response) => {
        corrgrid = data.json()
        var res = _.map(Object.keys(corrgrid), function(item){return item.replace('_close', "");});
        xValues = res;
        yValues = res; //xvalues and yvalues

        _.forOwn(corrgrid, function(value, key) {
          zValues.push(Object.values(value));
         })

         const style = {
           margin: { t: 0 }
         }

         var datas = [
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
         Plotly.plot( element, datas, layout )



         cheatmap.on('plotly_click', function(datae){
           var pts = '';
           alert('x=' + datae.points[0].x + "->" + datae.points[0].y);
       });


      }

    )
  }

}
