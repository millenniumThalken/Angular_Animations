import { Component, OnInit } from '@angular/core';

//within this component is a good example of reuseable animation. the fadeblock child component is using an imported custom animation file

@Component({
    selector: 'app-advanced',
    template: `
        <h1>Advanced Concepts</h1>
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-12">
                        <app-fadeblock></app-fadeblock>
                    </div>
                </div>
            </div>`,
    styles: [``]
})
export class AdvancedComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
