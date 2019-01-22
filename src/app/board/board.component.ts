import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Data } from '../models.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  data: Data;
  constructor(private dataManager: DataManagerService) {}

  // ngOnInit  ==> dataManager starts when the app is loaded
  ngOnInit() {
    this.data = this.dataManager.getData();
  }
}
