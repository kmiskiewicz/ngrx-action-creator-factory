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
  static create?<T>(type: string, defaultPayloadValue?: any) {
    // ActionCreator
    return (payload?: T): Action => {
      // Action
      return <Action>{type: type, payload: payload || defaultPayloadValue};
    };
  }

  create?<T>(type: string, defaultPayloadValue?: any) {
    return ActionCreatorFactory.create<T>(type, defaultPayloadValue);
  }
}
