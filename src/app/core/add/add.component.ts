import { Component, OnInit, Input } from '@angular/core';

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
    @Input() caption: string;
    @Input() text: string;

    constructor() {}

    ngOnInit() {
        console.log('init', this.caption);
    }

}
