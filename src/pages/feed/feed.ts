import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider  
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Leonel Feitosa",
    data: "Julho 13, 2018",
    descricao: "Choperia, ao som de Banda Guerreiros",
    qntd_likes: 12,
    qntd_coments: 4,
    time_coment: "11h ago"    
  }

  public lista_filme = new Array<any>();

  public name_usuario:string = "Leonel Feitosa";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number):void{
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = console.log(data);
        this.lista_filme = response.results;

        console.log(objeto_retorno); 
        },
        error=> {
        console.log(error); 
        
        
      }
    )
  }

}
