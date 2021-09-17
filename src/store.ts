import { createSystem, createBehavior } from 'xactor';

interface Message {
    type: string
    value: any
}

export const counter = createBehavior(
  (state, message: Message, context) => {
    if (message.type === 'add') {
      return {
        ...state,
        count: state.count + message.value,
      };
    }

    return state;
  },
  { count: 0 }
);

export const counterSystem = createSystem(counter, 'counter');