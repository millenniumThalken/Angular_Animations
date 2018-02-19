import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


//this is a good example of self contained animation. this component does not rely on the parent component.

@Component({
    selector: 'app-mouse',
    //we are listening for a mouse enter event, if that event is triggered we will set the state of mouse to hover through the setMouse() method
    //on the mousedown event, which means clicked, we change the state to 'press'
    //when a the mouse leaves the area it triggers the mouseleave event and the state is set back to rest
    //the [@changeState]="currentState" binds our animation triggers to currentState
    template: `<div class="mymouse mx-auto" (mouseenter)="setMouse('hover')" (mousedown)="setMouse('press')" (mouseleave)="setMouse('rest')" [@changeState]="currentState"></div>`,
    styles: [`
            .mymouse {
                background-color: #5c8f52;
                width: 200px;
                height: 200px;
                border-radius: 200px;
                margin: 6rem;
            }
  `],
    animations: [
        trigger('changeState', [
            state('rest', style({
                transform: 'scale(1)'
            })),
            state('hover', style({
                transform: 'scale(1.2)'
            })),
            state('press', style({
                transform: 'scale(1.2)',
                backgroundColor: '#8f5a7a'
            })),

            transition('rest => hover', animate('400ms ease-in')),
            transition('hover => rest', animate('200ms ease-out')),
            transition('hover => press', animate('400ms ease-in')),
            transition('press => rest', animate('200ms ease-out'))

            //using trigger to activate the animations and calling the triggers variable 'changeState' which is bound to our mouse div
            //we have three states that could be activated 'rest', 'hover', 'press'
            //all of them jsut change the size of our div unless the state si 'press' then it also changes the background color of the div
            //we have anumber of transitions, for instance the first transitions means that if we are going from the rest state to the hover state
            //then animate an ease-in transition at 400ms, which is fast.
        ])
    ]
})
export class MouseComponent implements OnInit {

    constructor() { }

    currentState: string = "rest";
    setMouse(state: string) {
        this.currentState = state;
    }

    ngOnInit() {
    }

}
