import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `<h1>Project Home</h1>
        <div class="container-fluid">
            <div class="row">
            <div class="col-12">
                <p class="lead">This is a project demonstrating the use of animations in Angular!</p>
                <p>Choose from the selections in the navigation above...</p>
            </div>
            </div>
        </div>`,
    styles: [``]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
