
import {buildSchema} from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String,
    hello2(name:String): String,
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);
