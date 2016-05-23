import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

export interface IAd {
    caption: string;
    text: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-ad',
  templateUrl: 'ad.component.html',
  styleUrls: ['ad.component.css'],
  directives: [ROUTER_DIRECTIVES]
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
