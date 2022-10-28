import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ornek1';
  //message?:string;//? boş geçilebilir
  message:string="Message";
  onChangeMessage(e:string){
    this.message=e;
  }
}
