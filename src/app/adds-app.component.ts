import { Component } from '@angular/core';
import { ListComponent } from './core/list/list.component';

@Component({
    moduleId: module.id,
    selector: 'adds-app',
    templateUrl: 'adds-app.component.html',
    styleUrls: ['adds-app.component.css'],
    directives: [ListComponent]
})
export class AddsAppAppComponent {
  title = 'adds-app!';
}
