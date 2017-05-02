import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css']
})
export class EditSerieComponent implements OnInit {
  id: any;
  title: any;
  category: any;
  cover: any;
  seasons: any;

  constructor(
    private ss: SeriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.ss.getSerieDetails(this.id).subscribe(serie => {
      this.title = serie.title;
      this.category = serie.category;
      this.cover = serie.cover;
      this.seasons = this.JSToMTScripter(serie.seasons)
    }) ;

  }

  onEditSubmit(){
      let serie = {
        title: this.title,
        category: this.title,
        cover: this.cover,
        seasons: this.MTScripterToJS(this.seasons)
      }
      console.log(serie)
      this.ss.updateSerie(this.id, serie);
      
     // this.router.navigate(['/series']);  
     

     
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
        setence.push({'name':set[0], 'description':set[1], 'status': Number(set[2])})
      }
      return setence;
  }



  private JSToMTScripter(seasons){
      let reserved = ['---', '|', '\n'];
      let numOfSeasons = seasons.length;
      let numOfEpisodes = 0;
      let setence = [];
      let final = "";

  
      for(let i=0; i < seasons.length; i++){
        numOfEpisodes += seasons[i].episodes.length;
        
           setence.push(reserved[0]);
      
        for(let ii=0; ii < seasons[i].episodes.length; ii++){
            setence.push(seasons[i].episodes[ii].name + 
            reserved[1] + 
            seasons[i].episodes[ii].description + 
            reserved[1] + 
            seasons[i].episodes[ii].status +
            reserved[1]
            )
        }      
      }

        
      setence.shift();
      setence.forEach(function(lines) {
        //lines = lines.substr(0, lines.length-1);
        console.log(lines)
         final += lines + reserved[2];
      })
         
      
      return final;
   


  }

    private getReserved(episodes){
      console.log(episodes)
      return '|'
    }

}
