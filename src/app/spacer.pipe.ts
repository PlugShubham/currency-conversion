import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({
    name:'spacer'
})
export class SpacerPipe implements PipeTransform{
    transform(value:any){
        if(value != null && value != ""){
            let num = value.search(/[0-9]/);
         let b = value.slice(0,num);
         let c = value.slice(num,value.length);
         let final = b+" "+c;
         return final;
        }
        else{
            return value;
        }    
    }
}