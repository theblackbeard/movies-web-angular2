import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  title: any;
  category: any;
  cover: any;
  seasons: any;

  constructor(
    private ss: SeriesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit()
  {
    let serie = {
      title: this.title,
      category: this.category,
      cover: this.cover,
      seasons: this.MTScripterToJS(this.seasons)
    };

    console.log(serie);
    this.ss.addSerie(serie);
    this.router.navigate(['series']);

  }

  private MTScripterToJS(seasons){
      let setence = [];
      seasons = seasons.replace(/\s/g, "");
      let lista = seasons.split('--');
      while(lista.length){
        let set = lista.splice(0, 1);
        setence.push({episodes: this.getEpisodes(set)})
      }
     return setence;
  }


  private getEpisodes(seasons){
      let setence = [];
      let list = seasons[0].split('|');
      while(list.length){
        let set = list.splice(0, 3);
        setence.push({'name':set[0], 'description':set[1], 'status':Number(set[2])})
      }
      return setence;
  }

 

  private jsToMT(){

  }

}
