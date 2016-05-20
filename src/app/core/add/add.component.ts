import { Component, OnInit } from '@angular/core';

export interface IAdd {
    caption: string;
    text: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-add',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css']
})
export class AddComponent implements IAdd, OnInit {

    caption: string;
    text: string;
    constructor(private data: IAdd) {
      this.caption = data.caption;
      this.text = data.text;
    }

    ngOnInit() {
    }

}
