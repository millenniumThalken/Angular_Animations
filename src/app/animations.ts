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

export var fadeAnimation = animation([
    style({
        opacity: "{{ from }}"
    }),

    animate("{{time}} {{delay}} ease-in-out", style({
        opacity: "{{ to }}"
    }))

])