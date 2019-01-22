import { Component, Input } from '@angular/core';
import { List } from '../models.interface';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() list: List;
  editing = false;
  oldName: string;
  newName: string = '';

  constructor(private dataService: DataManagerService) {}

  // Let's create a method to remove a list
  delete() {
    if (confirm('Do you really want to delete the list ' + this.list.name)) {
      this.dataService.deleteList(this.list.listId);
    }
  }

  // Let's create a method to add a New task
  newTask(ev) {
    const text = ev.target.value.trim();
    if (text !== '') {
      this.dataService.addNewTask(text, this.list);
      ev.target.value = '';
    }
    
  }

  // List edition: methods to modify the name of a list and cancel edition
  editName() {
    this.list.name = this.newName;
    this.dataService.editListName(this.list);
    this.editing = false;
  }
  edit(node) {
    // input.focus();
    setTimeout(() => {
      node.focus();
    }, 0);
    // this.oldName = this.list.name;
    this.editing = true;
  }

  cancelEdit(){
    // console.log('cancelEdit', this.oldName);
    // this.list.name = this.oldName;
    this.editing = false;
  }

}
