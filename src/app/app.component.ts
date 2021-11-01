import { Component, NgModule } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  ngOnInit(){
    // localStorage.setItem("device",JSON.stringify(Capacitor.isNativePlatform()))
    localStorage.setItem('user_loggin','false')
  }
}
