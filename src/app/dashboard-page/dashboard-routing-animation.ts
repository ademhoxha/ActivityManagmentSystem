import { trigger, animate, style, group, query, transition } from '@angular/animations';


export const routerTransitions = [

    trigger('routerTransition', [

        transition('* => resume', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' })
                , { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),

        transition('* <=> *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' })
                , { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
    ]),

]


/* Examples 

  animations: [
    trigger('flyInOutX', [
      
      transition(':enter', [
        style({ position: 'relative', transform: 'translateX(-100%)'}),
        animate(5000)
      ]),

      transition(':leave', [
        animate(5000, style({ position: 'relative',  transform: 'translateX(100%)'}))
      ])

    ])
  ]

  animations: [
    trigger('flyInOut', [

      transition('* => *', [
        query(':enter', [
          style({ position: 'absolute', transform: 'translateX(-100%)' }),
          animate(5000)
        ],  { optional: true })

      ]),

      transition('* => *', [
        query(':leave', [
          style({ position: 'absolute', transform: 'translateX(100%)' }),
          animate(5000)
        ],  { optional: true })

      ])

    ])
  ]
  
  */
