import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface IAd {
    caption: string;
    text: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-ad',
  templateUrl: 'ad.component.html',
  styleUrls: ['ad.component.css']
})
export class AdComponent implements IAd, OnInit {
    caption: string;
    text: string;

    @Input() data: IAd;
    @Output() clicked: EventEmitter<IAd> =
        new EventEmitter<IAd>();

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
