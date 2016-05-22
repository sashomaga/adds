import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ListComponent } from './core/list/list.component';

@Component({
    moduleId: module.id,
    selector: 'ads-app',
    templateUrl: 'ads-app.component.html',
    styleUrls: ['ads-app.component.css'],
    directives: [ListComponent, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/ads',  component: ListComponent}
])
export class AdsAppComponent implements OnInit {
    title = 'ads-app!';

    constructor(private _router: Router) {}

    ngOnInit() {
        this._router.navigate(['/ads']);
    }
}
