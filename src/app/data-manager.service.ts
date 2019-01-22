import { Injectable } from '@angular/core';

import { List, Task } from './models.interface';
import { listener } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  data: { lists: Array<List> } = {
    // Let's create some dummy data in order to populate the initial state of our app
    lists: [
      {
        listId: 0,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'BackLog',
        tasks: [
          {
            listId: 0,
            taskId: 0,
            text: 'Diseño App MundoTech',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
          {
            listId: 0,
            taskId: 1,
            text: 'Difusión marca MundoTech',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
        ],
      },
      {
        listId: 1,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'To Do',
        tasks: [
          {
            listId: 1,
            taskId: 0,
            text: 'Creación Componentes',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
          {
            listId: 1,
            taskId: 1,
            text: 'Conectar módulos',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
        ],
      },
      {
        listId: 2,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'Doing',
        tasks: [
          {
            listId: 2,
            taskId: 0,
            text: 'Diseño UI / UX / IxD',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
          {
            listId: 2,
            taskId: 1,
            text: 'Conexión de datos',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
        ],
      },
      {
        listId: 3,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'Waiting',
        tasks: [
          {
            listId: 3,
            taskId: 0,
            text: 'Info de medios sociales',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
          {
            listId: 3,
            taskId: 1,
            text: 'Definición modelo de datos',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
        ],
      },
    ],
  };

  getData() {
    return this.data;
  }

  // Method used to create a new list
  addNewList(name: string) {
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };
    this.data.lists.push(newList);
  }

  // Method used to remove a list
  deleteList(listId: number) {
    this.data.lists = this.data.lists.filter(list => list.listId !== listId);
  }

  // Method used to create a new task
  addNewTask(text:string, list:List){
    const now = new Date();
    const newTask: Task = {
      
        listId: list.listId,
        taskId: Date.now(),
        text,
        completed: false,
        color: 'white',
        createdAt: now,
        modifiedAt: now,
    };
    
    // List Id Validation 
    this.data.lists = this.data.lists.map(listObj => {
      if(listObj.listId === list.listId) {
        listObj.tasks.push(newTask);
      }
      return listObj;
    });
  }
  
  // Method used to remove a task
  deleteTask(task: Task){
    this.data.lists = this.data.lists.map(listObj => {
      if(listObj.listId === task.listId) {
        listObj.tasks = listObj.tasks.filter(taskObj => taskObj.taskId !== task.taskId);
      }
      return listObj;
    });
}

  // Let's create a method to modify the name of a list
  editListName(list: List) {
  this.data.lists = this.data.lists.map
  (listObj => (listObj.listId === list.listId ? list : listObj));
  }

  // Let's create a method to modify the tasks
  editTask(newTask: Task) {
    this.data.lists = this.data.lists.map(list => {
      if(list.listId === newTask.listId){

        list.tasks = list.tasks.map( task => {
          if (task.taskId === newTask.taskId) {
            return newTask;
          }
          return task;
        });
      }

      return list;
    });
  }
}
