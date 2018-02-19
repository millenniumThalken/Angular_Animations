import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-contained',
    template: `
        <h1>Self-Contained Animation</h1>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <app-mouse></app-mouse>
                    </div>
                </div>
            </div>`,
    styles: [``]
})
export class ContainedComponent implements OnInit {

    constructor() { }

    @Input() currentState;

    ngOnInit() {
    }

}
