import { NgModule } from "@angular/core";
import {
     MatButtonModule,
      MatTabsModule, 
      MatSelectModule, 
      MatDatepickerModule, 
      MatNativeDateModule,MatInputModule, MatProgressBarModule} from "@angular/material";

@NgModule({
    imports:[MatButtonModule,MatTabsModule,MatSelectModule,MatDatepickerModule
    ,MatNativeDateModule,MatInputModule,MatProgressBarModule],
    exports:[MatButtonModule,MatTabsModule,MatSelectModule,MatDatepickerModule
        ,MatNativeDateModule,MatInputModule,MatProgressBarModule]
})
export class MaterialModule{

}