import {App, IonicApp, Platform} from 'ionic-angular';
//---------------------------------------
import {VvCamagasinsPage} from './pages/vv-camagasins/vv-camagasins';
import {VvSlidesPage} from './pages/vv-slides/vv-slides';
import {VvLoginPage} from './pages/vv-login/vv-login';
import {VvProfilePage} from './pages/vv-profile/vv-profile';

import {VvAdmusersPage} from './pages/vv-admusers/vv-admusers';
import {VvAboutPage} from './pages/vv-about/vv-about';
import {VvPhonegapPage} from './pages/vv-phonegap/vv-phonegap';




@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform]];
  }

  constructor(app, platform) {
    this.app = app;
    this.platform = platform;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.app.pages = [
      { title: 'Présentation', component: VvSlidesPage , icon:'home'}
    ];
    
    this.app.caPages = [
        { title: 'Les Chiffres' , component: VvCamagasinsPage , icon:'cash'}
        //{ title: 'Auth. Utilisateurs' , component: VvAdmusersPage , icon:'person'}
        // stats  , icon:'stats-bars'
    ];
    
    this.app.admPages = [
        { title: 'Les Chiffres' , component: VvCamagasinsPage , icon:'cash'}
        //, Gestion Imprimantes
        //  Gestion Caisses
        //  Gestion AS400
        //  Gestion Système
        //  Gestion Réseau
        //  Gestion BI 
    ];
    
    this.app.secPages = [
        { title: 'Autorisations' , component: VvAdmusersPage, icon:'key'}
        //, Gestion Imprimantes
        //  Gestion Caisses
        //  Gestion AS400
        //  Gestion Système
        //  Gestion Réseau
        //  Gestion BI 
    ];
    
    this.app.prfPages = [
        { title: 'Infos...' , component: VvProfilePage , icon:'person'},
        { title: 'A Propos' ,component: VvAboutPage, icon:'information'}
        
    ];

    this.rootPage = VvLoginPage; // VvPhonegapPage;
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
