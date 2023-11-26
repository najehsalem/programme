import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {
  @ Input ()
name:string =''

@ Input()
status:string=''//etient
getstatus(){
  return this.status;
}
}


