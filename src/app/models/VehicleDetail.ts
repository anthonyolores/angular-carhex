export class VehicleDetail{
    DetailsInfo:any[];
    Finance:any;
    Id:number;
    ImageIndexes: string[];
    ImageUrl:string;
    ManufacturerName:string;
    ModelName: string;
    Price:string;
    Year:number;

   public constructor(obj?:any){

            if(obj != null){
                this.DetailsInfo = obj.DetailsInfo;
                this.Finance = obj.Finance;
                this.Id = obj.Id;
                this.ImageIndexes = obj.ImageIndexes.split(",");
                this.ImageUrl = obj.ImageUrl.replace('Width=380','Width=800');
                this.ManufacturerName = obj.ManufacturerName;
                this.ModelName = obj.ModelName;
                this.Price = obj.Price;
                this.Year = obj.Year;
            }
            else{
                this.DetailsInfo = [];
                this.Finance = '';
                this.Id = 0;
                this.ImageIndexes = [];
                this.ImageUrl = '';
                this.ManufacturerName = '';
                this.ModelName = '';
                this.Price = '';
                this.Year = 0;
            }

    }
}