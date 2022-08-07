
  import {helloEndpoints} from './endpoints/hello';
  const dice = {
    rollDice: (args: {numDice: number, numSides: number}) => {
      const output = [];
      for (let i = 0; i < args.numDice; i++) {
        output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
      }
      return output;
    }};

// The root provides a resolver function for each API endpoint
export const root = {...dice, ...helloEndpoints  };
