import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    directives: [CORE_DIRECTIVES, ProfileComponent]
})

export class DashboardComponent {

    public message: string;

    constructor() {
        this.message = 'Hello from HomeComponent constructor';
    }
}