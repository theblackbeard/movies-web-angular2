import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onAddSubmit()
  {
    let serie = {
      title: this.title,
      category: this.category,
      cover: this.cover,
      seasons: this.mtToJS(this.seasons)
    };

    console.log(serie)
  }

  private mtToJS(seasons){
      let setence = [];
      seasons = seasons.replace(/\s/g, " ");
      let lista = seasons.split('*');
      while(lista.length){
        let set = lista.splice(0, 1);
        setence.push({espisodes: this.getEpisodes(set)})
      }
    
     return setence;

  }


  private getEpisodes(seasons){
      let setence = [];
      let list = seasons[0].split(',');
      while(list.length){
        let set = list.splice(0, 3);
        setence.push({'name': set[0], 'desc': set[1], 'status': set[2]})
      }
      return setence;
  }

 

  private jsToMT(){

  }

}
