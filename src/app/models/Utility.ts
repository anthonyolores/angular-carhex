export class Utility{
    public constructor(){}
    public _randomImageUrls(len:number): Array<string> {
        return Array.apply( null, { length: len } ).map((el, index) => {
          return `https://picsum.photos/500?image=${Math.floor(Math.random() * (index*100))}`;
        }); 
      }
      public _randomImageUrlsFullWidth(len:number): Array<string> {
        return Array.apply( null, { length: len } ).map((el, index) => {
          return `https://picsum.photos/1500/300?image=${Math.floor(Math.random() * (index*100)) + 2 }`;
        }); 
      }
}