import {Page, Alert, NavController} from 'ionic-angular';
import {VvServices} from '../../providers/vv-services/vv-services';
/*
  Generated class for the VvAdmusersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/vv-admusers/vv-admusers.html',
  providers: [VvServices]
})
export class VvAdmusersPage {
  static get parameters() {
    return [[NavController],[VvServices]];
  }

  constructor(nav,vvservices) {
    this.nav = nav;
    this.vvsrv = vvservices;
    this.users = null;
    this.waitcursor = true;
    this.nav.swipeBackEnabled = false;
    
  }
  
  
  changeState(userid,etat) {
      console.log("Merde herve "+userid+":"+etat);
      var setEtat="";
      if (etat.toString()=="true") {
          setEtat = "ACTIF";
      } else {
          setEtat = "INACTIF";
      }
      console.log("Etat a mettre en :"+setEtat);
      this.vvsrv.setMobUserId(userid,"ETAT",setEtat).subscribe((result) => {
          console.log("Mise à jour"+result.toString());
      }, (err) => {
          console.log("erreur"+err);
      })
      
  }
  
  showWait() {
      this.wait = Alert.create({
          title:'Patientez svp...',
          message:'Listes des utilkisateurs....',
          enableBackdropDismiss: false,
          buttons:[]
      });
      this.nav.present(this.wait);
  }
  
  hideWait() {
      try {
          this.wait.dismiss().then(()=>{});
      } catch (error) {
          
      }
  }
  
  onPageLoaded(){
      this.initPage();
  }
  
  initPage(){
     // this.showWait();
      this.vvsrv.getAllowCA().subscribe( (datas) => {
          //this.hideWait();
          this.waitcursor = false;
          this.users = datas;
          
      },(err) => {
          //this.hideWait();
          this.waitcursor = false;
          let msgInfo = Alert.create({
              title:"!!! ERREUR !!!",
              message: "Erreur de communication avec le backoffice! Contater l\'administrateur!",
              buttons: ['Merci']
          });
          this.nav.present(msgInfo);
      });
  }
}
