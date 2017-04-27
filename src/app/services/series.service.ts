import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';


@Injectable()
export class SeriesService{

  series: FirebaseListObservable<any[]>;
  serie: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire){}

  getSeries(){
    this.series = this.af.database.list('/teste') as FirebaseListObservable<Series[]>;
    return this.series;
  }

}
interface Series{
    $key?:string;
    category?:string;
    cover?:string;
    seasons?:Episodes[];
}

interface Episodes{
  episodes?:Episode[];
}

interface Episode{
  description?:string;
  name?:string;
  status?:boolean
}
