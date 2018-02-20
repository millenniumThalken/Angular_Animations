import { animate, animation, style } from '@angular/animations';

//here we are going to export a variable named 'fadeAnimation'

// export var fadeAnimation = animation([
//     style({
//         opacity: "0"
//     }),
//     animate("800ms 300ms ease-in-out", style({
//         opacity: "1"
//     }))
// ])

//this animation export is having properties being filled from bonded variables within the class the animation is being imported into
export var fadeAnimation = animation([
    style({
        opacity: "{{ from }}"
    }),

    animate("{{time}} {{delay}} ease-in-out", style({
        opacity: "{{ to }}"
    }))

])

export var slideAnimation = animation([
    style({ opacity: 0, position: 'absolute', left: 0, right: 0, transform: 'translate3d(-100%,0,0)' }), //changing the -100% to 100% will switch the animation from coming from left to coming from right
    animate('200ms ease-in-out', style({ opacity: 1, transform: 'translate3d(0%,0,0)' })),
])