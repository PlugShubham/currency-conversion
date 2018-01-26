import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../conversion.service';
import { NgForm } from '@angular/forms';
import { trigger,animate,style,transition,state } from '@angular/animations';

@Component({
  selector: 'app-conversion-calc',
  templateUrl: './conversion-calc.component.html',
  styleUrls: ['./conversion-calc.component.css'],
  animations:[
    trigger('resultAnimation',[
      state('appear',style({
        transform: 'translateX(0)',
        opacity : 1
      })),
      transition('void => in',[
        style({
          transform: 'translateX(-100px)',
          opacity : 0
        }),animate('100ms ease-in',style({
          color:'red'
        })),animate(500)
      ])
    ])
  ]
})
export class ConversionCalcComponent implements OnInit {
  state;
  rates=this.cService.iso_code;
  toRates:number=0;
  to_base='';
  iso_codes:string[]=Object.keys(this.rates);
  change=false;
  validator=false;
  constructor(private cService:ConversionService) { }

  ngOnInit() {
  
  }
   caclValue(myForm:NgForm){
    const from_base = myForm.value.from_base;
    this.to_base = myForm.value.to_base;
    const value = myForm.value.value;
    if(from_base == this.to_base){
      this.validator = true;
    }else{
      this.validator = false;
      this.cService.getRate(from_base,this.to_base).subscribe(
        resp =>{
          this.toRates = resp['rates'][this.to_base]* value;
        });
      this.state='in';  
    }
  }

}
