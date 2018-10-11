import { JokeContainer } from "./jokecontainer";

export class CategoryContainer {
    category: string;
    jokes : JokeContainer[] = [];
    likeCount : number = 0;
    maxJokeCount = 3;

    public constructor(init?:Partial<CategoryContainer>) {
        Object.assign(this, init);
    }
}