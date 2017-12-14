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

  static create?<T>(type: string, defaultPayloadValue?: T) {
    return (payload?: T): ActionCreator<T> => {
      const _payload = payload || typeof payload !== 'undefined' ? payload : defaultPayloadValue;
      return new ActionCreator<T>(type, _payload);
    };
  }

  create?<T>(type: string, defaultPayloadValue?: T) {
    return ActionCreatorFactory.create<T>(type, defaultPayloadValue);
  }
}
