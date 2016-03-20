import {Page, IonicApp, Alert, NavController} from 'ionic-angular';
import {VvAdmusersPage} from '../../pages/vv-admusers/vv-admusers';

/*
  Generated class for the VvProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/vv-profile/vv-profile.html',
})
export class VvProfilePage {
  static get parameters() {
    return [[NavController],[IonicApp]];
  }

  constructor(nav,app) {
    this.nav = nav;
    this.app = app;
    //this.uuid = this.app.uuid;
  }
  
  goToAdmUsers() {
      this.nav.swipeBackEnabled = false;
      this.nav.setRoot(VvAdmusersPage);
      
  }
  doMemUser() {
      let shInf = Alert.create({
          title:'!! ATTENTION !!!',
          message: 'Pas encore disponible dans cette version',
          buttons:['Merci']
      })
      this.nav.present(shInf);
  }
}
