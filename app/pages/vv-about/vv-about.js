import {Page, IonicApp, Alert, NavController} from 'ionic-angular';
import {VvServices} from '../../providers/vv-services/vv-services';
/*
  Generated class for the VvAboutPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/vv-about/vv-about.html',
   providers: [VvServices]
})
export class VvAboutPage {
  static get parameters() {
    return [[NavController],[VvServices],[IonicApp]];
  }

  constructor(nav,vvservices,app) {
    this.nav = nav;
    this.app = app;
    this.vvsrv = vvservices;
    this.pgpath = "https://build.phonegap.com";
    this.token = "kKeKAxVug4C2ggQ9PzKB";
    this.pgapps = null;
    this.pgemail = null;
    this.pgid = null;
    this.waitcursor = true;
  }
  
  onPageLoaded() {
      this.pgAuth();
  }
  
  
  pgAuth() {
      this.waitcursor = true;
      this.vvsrv.getPhoneGapInfos(this.token).subscribe( (datas) => {
          this.waitcursor = false;
          this.pgemail = datas.email;
          this.pgid = datas.id;
          this.getApps();
      },(err) => {
          let errMsg = Alert.create({
              title: '!!! ERREUR !!!',
              message: 'API PhoneGap Build Inaccessible',
              button: ['Dommage']
          })
          this.nav.present(errMsg)
      })
  }
  
  getApps() {
      this.waitcursor = true;
      this.vvsrv.getPhoneGapApps(this.token).subscribe( (datas) => {
          this.waitcursor = false;
          
          this.pgapps = datas.apps;
         
          //this.pgemail = datas.email;
          this.pgid = datas.id;
          
      },(err) => {
          let errMsg = Alert.create({
              title: '!!! ERREUR !!!',
              message: 'API PhoneGap Build Inaccessible :'+err,
              button: ['Dommage']
          })
          this.nav.present(errMsg)
      })
  }
  
  downLoad(tourl) {
      window.location.href=tourl;
  }
  
}
