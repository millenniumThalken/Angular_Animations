import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, group } from '@angular/animations';

@Component({
    selector: 'animbox',
    template: `<div [@changeState]="currentState" class="mybox mx-auto" (@changeState.start)="animationBegin($event)" (@changeState.done)="animationEnd($event)"></div>
                    <div class="msgbox mx-auto">{{msg}}</div>
    `,
    styles: [`
    .mybox{
        background-color: #47748f;
        width: 200px;
        height: 200px;
        border-radius: 6px;
        margin: 6rem;
    }

    .msgbox {
        margin: 2rem;
        padding-top:2rem;
        font-size: 1.8rem;
        text-align: center;

    }
  `],
    //add an animation block. The animation we are using is based off a trigger and we named that trigger 'changeState' so within our HTML the attribute
    //[@changeState] is a reference to the animation rules we just set up.
    //we have defined to states that the trigger is looking for, one is 'original' and the other is 'basic'. Each state has visual differences rules within
    //the styles section of each state like changing background color and transforming the object to bigger or smaller.
    //the actual animation is done through the transitions, transition('* => basic', animate('800ms')) this is saying from any state to basic animate
    //in a 800 miliseconds time frame
    animations: [
        trigger('changeState', [
            state('original', style({
                backgroundColor: '#47748f',
                transform: 'scale(1)'
            })),

            state('basic', style({
                backgroundColor: '#440000',
                transform: 'scale(2)'
            })),

            state('delaying', style({
                backgroundColor: '#812170',
                transform: 'scale(1.6)'
            })),
            state('easing', style({
                backgroundColor: '#985b00',
                transform: 'scale(2.2)'
            })),
            state('stepped', style({
                backgroundColor: '#549a76',
                transform: 'scale(1)'
            })),
            state('parallel', style({
                backgroundColor: '#065e65',
                transform: 'scale(0.4)'
            })),
            transition('* => basic', animate('800ms')),
            transition('* => original', animate('200ms')),

            transition('* => delaying', animate('800ms 1200ms ease-out')), //the 1200ms is the delay time
            transition('* => easing', animate('800ms ease-in-out')), //always use ease-out, ease-in, ease-in-out for richer transitions

            transition('* => stepped', [
                animate('3000ms ease-in-out', keyframes([
                    style({ backgroundColor: '#dd9344', transform: 'scale(1.4)', offset: 0.2 }),
                    style({ backgroundColor: '#5c2346', transform: 'scale(0.8)', offset: 0.4 }),
                    style({ backgroundColor: '#1b1b1b', transform: 'scale(1.2)', offset: 0.7 }),
                    style({ backgroundColor: '#549a76', transform: 'scale(1)', offset: 0.9 })//offset is the timing of each keyframe within the
                    //total time, which in this case is 3000ms. offset ranges from 0 to 1
                ]))
            ]),
            //this next animation is a group animation. it uses to seperate animates that are being run in parallel. It first quickly changes the
            //background color and then slowly changes the scale of the object to much smaller all at the same time.
            //I was first thinking that there was no need to to change the color here since we did it in the 'state' definition. but if we remove
            //That style from the state definition then the box will turn back to the default color when the animation ends.
            transition('* => parallel', [
                group([
                    animate('900ms ease-out', style({
                        backgroundColor: '#065e65'
                    })),
                    animate('4000ms ease-out', style({
                        transform: 'scale(0.4)'
                    }))
                ])
            ]),
        ])
    ]
})





export class AnimboxComponent implements OnInit {

    constructor() { }


    //this is accessing whatever we assigned to the [currentState] attribute in the parent component. in this case it is the string 'switchstate'
    //which in the parent component is being manipulated by the method setState(state)
    @Input() currentState;


    //animationBegin and animationEnd both except an event that is being called 'e'
    //in the actual HTML we are using the @changeState that we setup and and applying these fucntion to the start and done attributes of changeState
    //to get information about the duration of our animations
    msg = "rest";
    animationBegin(e) {
        this.msg = e.phaseName + ": " + e.fromState + " => " + e.toState + " [" + e.totalTime + "]";
    }

    animationEnd(e) {
        this.msg = e.phaseName + ": " + e.fromState + " => " + e.toState + " [" + e.totalTime + "]";
    }


    ngOnInit() {
    }

}
