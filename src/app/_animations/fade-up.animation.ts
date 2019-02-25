// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeUpAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeUpAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ 
                opacity: 0,
               transform:'translateY(90%)',
             }),

            // animation and styles at end of transition
            animate('.3s', style({ 
                opacity: 1,
                transform:'translateY(50px)',
            //    backgroundColor:'#ffffff' 
            }))
        ]),
        transition(':leave', [
            
            // css styles at start of transition
            style({
                 opacity: 1,
                 transform:'translateY(0)',
                 
            //     backgroundColor:'#ffffff' 
                 }),

            // animation and styles at end of transition
            animate('.3s', style({
                transform:'translateY(100%)',
                 opacity: 0
               //  ,backgroundColor:'#000000'
                 }))
        ])
    ]);