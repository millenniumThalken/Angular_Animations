import { Component, OnInit } from '@angular/core';

//this is a good example of animation between a parent and child components, the setState() method takes in a string labeled switchState
//when you change switchState it updates the [currentState] which in the child component is bounded to the @changeState attribute, which is that
//triggers the different animations

@Component({
    selector: 'app-basic',
    template: `
        <h1>Animation Basics</h1>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-5">
                        <div class="btn-group-vertical btn-block" style="margin-top:1rem;">
                            <a (click)="setState('original')" class="btn btn-primary active">Return to Original</a>
                            <a (click)="setState('basic')" class="btn btn-primary">Animation</a>
                            <a (click)="setState('delaying')" class="btn btn-primary">Animation with Delay</a>
                            <a (click)="setState('easing')" class="btn btn-primary">Animation with Ease</a>
                            <a (click)="setState('stepped')" class="btn btn-primary">Stepped Animation</a>
                            <a (click)="setState('parallel')" class="btn btn-primary">Parallel Animation</a>
                        </div>
                    </div>
                    <div class="col-7">
                        <animbox [currentState]="switchstate"></animbox>
                    </div>
                </div>
            </div>`,
    styles: [``]
})
//with the [currentState] attribute, the value saved in the switchstate variable will be passed to the child component animbox
export class BasicComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    switchstate: string = 'original';
    setState(state: string) {
        this.switchstate = state;
        console.log(state);
    }

}
