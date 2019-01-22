import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.scss']
})
export class ExtraInfoComponent implements OnInit {

  @Input('user') 
  user:User;
  ocultarData: boolean = true;

  constructor() {}

  ocultarInfo() {
    this.ocultarData = !this.ocultarData;
  }
  

  ngOnInit() {
  }

}
