import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class SeriesService{

  series: FirebaseListObservable<any[]>;
  serie: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire){
    this.series = this.af.database.list('/series') as FirebaseListObservable<Series[]>;

  }

  getSeries(){
      return this.series;
  }

  getSerieDetails(id){
    this.serie = this.af.database.object('/series/' +id) as FirebaseObjectObservable<Series>;
    return this.serie;
  }


  addSerie(serie){
    let ref = firebase.database().ref('/series');
    return ref.push(serie);
  }

  updateSerie(id, serie){
     return this.series.update(id, serie);
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
