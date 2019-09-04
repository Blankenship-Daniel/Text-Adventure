import * as scenes from './scene';

export class Game {
  public static readonly map: any[][] = [
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, new scenes.YardScene(), {}],
  ];
}
