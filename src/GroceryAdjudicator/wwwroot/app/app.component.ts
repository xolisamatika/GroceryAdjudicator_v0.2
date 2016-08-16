import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'the-app',
    templateUrl: 'app/app.component.html',
    styles: ['./app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
 }