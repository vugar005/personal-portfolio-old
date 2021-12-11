import { animate, style, group, query, keyframes, animation, AnimationReferenceMetadata } from '@angular/animations';

export const fadeInLeftOut: AnimationReferenceMetadata = animation(
  [
    group([
      query(
        ':enter',
        [
          style({ opacity: '0', transform: 'translate3d(-70%, 0, 0)' }),
          animate(
            '{{enterTiming}}s {{enterDelay}}s ease-in-out',
            keyframes([
              style({ opacity: '0', transform: 'translate3d(-70%, 0, 0)', offset: 0 }),
              style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1 }),
            ])
          ),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          style({ opacity: '1' }),
          animate(
            '{{leaveTiming}}s {{leaveDelay}}s ease-in-out',
            keyframes([
              style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 0 }),
              style({ opacity: '0', transform: 'translate3d(-70%, 0, 0)', offset: 1 }),
            ])
          ),
        ],
        { optional: true }
      ),
    ]),
  ],
  { params: { enterTiming: '0.7', leaveTiming: '0.7', enterDelay: '0', leaveDelay: '0' } }
);
