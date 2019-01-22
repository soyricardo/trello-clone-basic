import { Component } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { User } from '../extra-info/user.model';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.scss'],
})
export class AddNewListComponent {
  
  user: User;
  constructor(private dataService: DataManagerService) {
    this.user = new User();
    // Dummy Data used on Toggle Botton
    this.user.name = "Ricardo Arruda Matias";
    this.user.title = "ToDo List - V. 1.0.1 - GeeksHubs";
    this.user.academic = "Creating a Trello Clone using Angular 7";
    this.user.phone = 6567890136;
    this.user.hobbies = ['Jugal al fútbol', 'jugar al padel', 'viajar por el mundo'];
  }

  // Method created to listen an event and agregate a new list
  addList(ev) {
    if (ev.target.value.trim() !== '') {
      this.dataService.addNewList(ev.target.value.trim());
      ev.target.value = '';
    }
  }

  

 


}
