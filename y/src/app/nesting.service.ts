import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NestingService {
  constructor() {}

  state$ = new BehaviorSubject({
    level1: {
      level2: {
        level3: {
          level4: {
            level5: {
              level6: {
                level7: {
                  level8: {
                    level9: {
                      level10: {
                        name: 'hello',
                        value: 'world',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  updateNameOnLevel10(newName: string) {
    const currentState = this.state$.getValue();
    type Type = typeof currentState;
    const newState: Type = {
      ...currentState,
      level1: {
        ...currentState.level1,
        level2: {
          ...currentState.level1.level2,
          level3: {
            ...currentState.level1.level2.level3,
            level4: {
              ...currentState.level1.level2.level3.level4,
              level5: {
                ...currentState.level1.level2.level3.level4.level5,
                level6: {
                  ...currentState.level1.level2.level3.level4.level5.level6,
                  level7: {
                    ...currentState.level1.level2.level3.level4.level5.level6
                      .level7.level8,
                    level8: {
                      ...currentState.level1.level2.level3.level4.level5.level6
                        .level7.level8.level9,
                      level9: {
                        ...currentState.level1.level2.level3.level4.level5
                          .level6.level7.level8.level9.level10,
                        level10: {
                          ...currentState.level1.level2.level3.level4.level5
                            .level6.level7.level8.level9.level10,
                          name: newName,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  }
}
