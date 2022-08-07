export const helloEndpoints = {
    hello: () => {
      return 'Hello world!';
    },
    hello2: (args: {name: string}) => {
      return `Hello ${args.name}`;
    }
};
