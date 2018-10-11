import { Joke } from "./JokeModel";

export class JokeContainer {
    category : string = "";
    joke : Joke;
    like : boolean = false;

    public constructor(init?:Partial<JokeContainer>) {
        Object.assign(this, init);
    }
}