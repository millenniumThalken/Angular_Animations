import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { fadeAnimation } from '../animations';

//to use reuseable animations you just need to add the useAnimation from @angular/animations and make an import call to your custom animation file

//I think it's worth mentioning that the variable "currentState" is not needed anywhere for this animation and can literally be anything, in fact
//there is no need to even apply anything to the [@changeState]
@Component({
    selector: 'app-fadeblock',
    template: `<div class="fadeBlock mx-auto" [@changeState]="currentState"></div>`,
    styles: [`
  .fadeBlock {
    background-color: #ec971f;
    width: 600px;
    height: 300px;
    border-radius: 4px;
    margin: 5rem;
    opacity: 0;
}`],
    animations: [
        // trigger('changeState', [
        //     transition('void => *', [ //void => * just means to trigger this transition when this component is first created.
        //         useAnimation(fadeAnimation)
        //     ])
        // ])
        trigger('changeState', [
            transition('void => *', [  //void => * just means to trigger this transition when this component is first created.
                useAnimation(fadeAnimation, {
                    //each of these parameters is bonded to settings in the fadeAnimation method in our animations.ts files
                    params: {
                        delay: '300ms',
                        from: 1,
                        to: 0,
                        time: '4s'
                    }
                })
            ])
        ])
    ]
})
export class FadeblockComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
