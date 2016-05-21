import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

    @Input() data: IAdd;
    @Output() clicked: EventEmitter<IAdd> =
        new EventEmitter<IAdd>();

    constructor() {
    }

    ngOnInit() {
        this.caption = this.data.caption;
        this.text = this.data.text;
    }

    onClick() : void {
        this.clicked.emit(this.data);
    }
}
