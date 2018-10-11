import { JokeContainer } from "./jokecontainer";

export class CategoryContainer {
    public category: string;
    public jokes : JokeContainer[] = [];
    public likeCount : number = 0;
    public maxJokeCount = 3;

    public constructor(init?:Partial<CategoryContainer>) {
        Object.assign(this, init);
    }
}