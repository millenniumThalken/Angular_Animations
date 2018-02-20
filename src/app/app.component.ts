import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { slideAnimation } from './animations';

@Component({
    selector: 'app-root',
    template: `
    <nav class="navbar navbar-toggleable-sm fixed-top navbar-inverse mb-4" style="background-color:#5c2509;">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">Angular Animations</a>
    <div class="collapse navbar-collapse" id="main-nav">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a class="nav-link" routerLink='/animation-home' routerLinkActive>Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink='/animation-basics' routerLinkActive>Basic</a></li>
            <li class="nav-item"><a class="nav-link" routerLink='/animation-contained' routerLinkActive>Contained</a></li>
            <li class="nav-item"><a class="nav-link" routerLink='/animation-advanced' routerLinkActive>Advanced</a></li>

        </ul>
    </div>
</nav>
<div class="page" [@routerAnimations]="prepareRouteTransition(outlet)">
    <router-outlet #outlet="outlet"></router-outlet>
</div>
  `,
    styles: [``],
    encapsulation: ViewEncapsulation.None,
    //we create the animation object and give the object a trigger property. within that trigger property we give it a name 'routerAnimation'
    //which we used in the HTML to target what we want to animate.
    //we then define what is going to happen when the trigger is active
    animations: [
        trigger('routerAnimations', [
            //this means going from any route to any route we want to use the slideAnimation that we defined in the animations.ts file
            transition('* => *', slideAnimation)
        ])
    ]

})
export class AppComponent {

    //we need this for everything to work
    prepareRouteTransition(outlet) {
        const animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
    }
}
