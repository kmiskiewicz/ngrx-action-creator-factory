import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

/* Action Creator Factory
 * ======================
 * Creates typed action creators functions
 * const addTodo: ActionCreator<string> = ActionCreatorFactory.create<string>('ADD_TODO');
 * 
 * 
 **/
export interface ActionCreator<T> {
  (payload?: T): Action;
}

@Injectable()
export class ActionCreatorFactory {

    };
  }

  create?<T>(type: string, defaultPayloadValue?: T) {
    return ActionCreatorFactory.create<T>(type, defaultPayloadValue);
  }
}
