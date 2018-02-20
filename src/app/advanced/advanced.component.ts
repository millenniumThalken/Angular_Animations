import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { Spoons } from './spoons.model';

//within this component is a good example of reuseable animation. the fadeblock child component is using an imported custom animation file

@Component({
    selector: 'app-advanced',
    template: `
        <h1>Advanced Concepts</h1>
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div [@spoonAnimation]="spoons.length">
                            <ul *ngFor="let spoon of spoons">
                                <li class="spoon-block d-flex justify-content-center">{{spoon.name}}</li>
                            </ul>
                        </div>
                        <app-fadeblock></app-fadeblock>
                    </div>
                </div>
                <hr>
                <button class="btn btn-primary" (click)="showSpoons()">Show Spoons</button>
                <button class="btn btn-warning" (click)="removeSpoons()">Hide Spoons</button>
            </div>`,
    styles: [`
    .spoon-block {
        float:left;
        width:22%;
        height:140px;
        background-color: antiquewhite;
        color: #440000;
        margin: 4px;
        border-radius: 4px;
        display:flex;
        align-items:center;
        display:block;

    }`],
    animations: [
        trigger('spoonAnimation', [
            transition('* => *', [
                //the enter property changes when it is entered into the actual view
                //since this animation is set on objects within an *ngFor loop, each object within that loop will fade into the view

                //staggering enters a delay time inbetween the elements that are being adding within the *ngFor loop
                query(':enter', style({ opacity: 0 }), { optional: true }),
                query(':enter', stagger('100ms', [
                    animate('1s', style({ opacity: 1 }))
                ]), { optional: true }),
                query(':leave', stagger('50ms', [
                    animate('1s', style({ opacity: 0 }))
                ]), { optional: true }),
            ])
        ])
    ],
})
export class AdvancedComponent implements OnInit {

    constructor() { }

    //here I created a Spoons interface so I could avoid having a generic object of spoons
    //this instance of the Spoons object is empty so that we can populate it with a button
    spoons: Spoons[] = []

    //this method is linked to a button in the HTML and populates our empty Spoon object with data when the button is clicked
    showSpoons() {
        this.spoons = [
            { id: 1, name: 'Absinthe' },
            { id: 2, name: 'Bouillon' },
            { id: 5, name: 'Caviar' },
            { id: 3, name: 'Coffee' },
            { id: 4, name: 'Dessert' },
            { id: 5, name: 'Egg' },
            { id: 6, name: 'Horn' },
            { id: 7, name: 'Iced Tea' },
            { id: 8, name: 'Marrow' },
            { id: 9, name: 'Melon' },
            { id: 10, name: 'Parfait' },
            { id: 11, name: 'Salt' },
            { id: 12, name: 'Saucier' },
            { id: 13, name: 'Soup' }
        ]
    }

    removeSpoons() {
        this.spoons = [];
    }


    ngOnInit() {
    }

}
