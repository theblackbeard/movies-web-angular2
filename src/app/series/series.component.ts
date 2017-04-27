import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: any;

  constructor(
    private ss: SeriesService
  ) { }

  ngOnInit() {
    this.ss.getSeries().subscribe(series => {
      console.log(series);
      this.series = series;
    });
  }

}
