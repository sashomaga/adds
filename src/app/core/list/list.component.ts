import { Component, OnInit } from '@angular/core';
import { IAdd, AddComponent } from './../add/add.component';

@Component({
    moduleId: module.id,
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css'],
    directives: [AddComponent]
})
export class ListComponent implements OnInit {

    adds: IAdd[];
    constructor() {
        this.adds = [
            {
              caption: 'Caption1',
              text: 'Text1'
            },
            {
              caption: 'Caption2',
              text: 'Text2'
            },
            {
              caption: 'Caption3',
              text: 'Text3',
            },
        ];
        console.log("constructing list", this.adds);
    }

  ngOnInit() {

  }

}
