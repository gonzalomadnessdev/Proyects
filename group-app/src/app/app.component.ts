import { state } from '@angular/animations';
import { Component } from '@angular/core';


const dbase = [{"id":1,"first_name":"Sascha","last_name":"Pennington","email":"spennington0@abc.net.au","avatar":"https://robohash.org/voluptatemautvel.png?size=50x50&set=set1"},
  {"id":2,"first_name":"La verne","last_name":"Heibl","email":"lheibl1@example.com","avatar":"https://robohash.org/quiscumquesuscipit.png?size=50x50&set=set1"},
  {"id":3,"first_name":"Flynn","last_name":"McPhelimy","email":"fmcphelimy2@twitter.com","avatar":"https://robohash.org/aliquidmollitiaullam.png?size=50x50&set=set1"},
  {"id":4,"first_name":"Gardie","last_name":"Bodesson","email":"gbodesson3@google.com","avatar":"https://robohash.org/nequedoloremadipisci.png?size=50x50&set=set1"},
  {"id":5,"first_name":"Winfred","last_name":"Durtnell","email":"wdurtnell4@army.mil","avatar":"https://robohash.org/similiqueveritatisest.png?size=50x50&set=set1"},
  {"id":6,"first_name":"Filia","last_name":"Skewes","email":"fskewes5@phoca.cz","avatar":"https://robohash.org/temporamaioresreiciendis.png?size=50x50&set=set1"},
  {"id":7,"first_name":"Marni","last_name":"Piercey","email":"mpiercey6@yahoo.co.jp","avatar":"https://robohash.org/quaemaximedeleniti.png?size=50x50&set=set1"},
  {"id":8,"first_name":"Vincenz","last_name":"Brazelton","email":"vbrazelton7@eepurl.com","avatar":"https://robohash.org/quisomnismolestias.png?size=50x50&set=set1"},
  {"id":9,"first_name":"Carroll","last_name":"Antos","email":"cantos8@scientificamerican.com","avatar":"https://robohash.org/enimaliquidex.png?size=50x50&set=set1"},
  {"id":10,"first_name":"Marielle","last_name":"Ewins","email":"mewins9@tamu.edu","avatar":"https://robohash.org/impeditpossimusreiciendis.png?size=50x50&set=set1"},
  {"id":11,"first_name":"Fidelia","last_name":"Kubiak","email":"fkubiaka@live.com","avatar":"https://robohash.org/autsaepeest.png?size=50x50&set=set1"},
  {"id":12,"first_name":"Donelle","last_name":"Andrejs","email":"dandrejsb@statcounter.com","avatar":"https://robohash.org/architectosuntmaiores.png?size=50x50&set=set1"},
  {"id":13,"first_name":"Nicki","last_name":"Blanden","email":"nblandenc@bloglines.com","avatar":"https://robohash.org/voluptateseaassumenda.png?size=50x50&set=set1"},
  {"id":14,"first_name":"Hewe","last_name":"Milmoe","email":"hmilmoed@economist.com","avatar":"https://robohash.org/consequaturexcepturiveritatis.png?size=50x50&set=set1"},
  {"id":15,"first_name":"Eugine","last_name":"Coat","email":"ecoate@stanford.edu","avatar":"https://robohash.org/ettemporibusest.png?size=50x50&set=set1"},
  {"id":16,"first_name":"Albrecht","last_name":"Keiley","email":"akeileyf@hugedomains.com","avatar":"https://robohash.org/voluptasnemodeleniti.png?size=50x50&set=set1"},
  {"id":17,"first_name":"Pierrette","last_name":"Boatwright","email":"pboatwrightg@weebly.com","avatar":"https://robohash.org/harumdelectussit.png?size=50x50&set=set1"},
  {"id":18,"first_name":"Rodd","last_name":"Conkay","email":"rconkayh@google.ca","avatar":"https://robohash.org/expeditaimpeditnatus.png?size=50x50&set=set1"},
  {"id":19,"first_name":"Caitrin","last_name":"Ingyon","email":"cingyoni@tinypic.com","avatar":"https://robohash.org/nemosinttotam.png?size=50x50&set=set1"},
  {"id":20,"first_name":"Jessy","last_name":"Phillip","email":"jphillipj@wix.com","avatar":"https://robohash.org/eiusliberoquia.png?size=50x50&set=set1"},
  {"id":21,"first_name":"Andy","last_name":"De Pietri","email":"adepietrik@time.com","avatar":"https://robohash.org/sitsimiliquedolores.png?size=50x50&set=set1"},
  {"id":22,"first_name":"Jeff","last_name":"Greening","email":"jgreeningl@cmu.edu","avatar":"https://robohash.org/deseruntestet.png?size=50x50&set=set1"},
  {"id":23,"first_name":"Rheba","last_name":"Wellard","email":"rwellardm@comsenz.com","avatar":"https://robohash.org/eaetest.png?size=50x50&set=set1"},
  {"id":24,"first_name":"Arnuad","last_name":"Scarlett","email":"ascarlettn@blinklist.com","avatar":"https://robohash.org/aperiamlaboriosamreiciendis.png?size=50x50&set=set1"},
  {"id":25,"first_name":"Perren","last_name":"Salery","email":"psaleryo@nymag.com","avatar":"https://robohash.org/essevoluptatemab.png?size=50x50&set=set1"},
  {"id":26,"first_name":"Daryn","last_name":"Hoofe","email":"dhoofep@nba.com","avatar":"https://robohash.org/earumodiosimilique.png?size=50x50&set=set1"},
  {"id":27,"first_name":"Courtnay","last_name":"Crudge","email":"ccrudgeq@skype.com","avatar":"https://robohash.org/nammagniquia.png?size=50x50&set=set1"},
  {"id":28,"first_name":"Maryellen","last_name":"Mc Mechan","email":"mmcmechanr@sina.com.cn","avatar":"https://robohash.org/mollitiatemporenobis.png?size=50x50&set=set1"},
  {"id":29,"first_name":"Robinet","last_name":"Kember","email":"rkembers@rakuten.co.jp","avatar":"https://robohash.org/eaquequasvoluptas.png?size=50x50&set=set1"},
  {"id":30,"first_name":"Rem","last_name":"Weafer","email":"rweafert@unesco.org","avatar":"https://robohash.org/idquibusdamnihil.png?size=50x50&set=set1"}]
const dbaseState =[];

dbase.forEach((obj)=>{
  dbaseState.push({"id":obj.id,"toggle": false})
})


export interface User{
  id:number,
  first_name:string,
  last_name:string,
  email:string,
  avatar:string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  list:Array<User>= dbase;

  stateList= dbaseState;

  validation = false;

  getState(event){

    let index = event.id - 1;
    this.stateList.splice(index, 1, event)
    this.validation = this.stateList.some(x=>x.toggle === true)
  }


}

