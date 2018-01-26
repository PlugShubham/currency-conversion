import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConversionService } from '../conversion.service';


@Component({
  selector: 'app-conversion-list',
  templateUrl: './conversion-list.component.html',
  styleUrls: ['./conversion-list.component.css']
})
export class ConversionListComponent implements OnInit {
  
  base:string="USD";
  url:string;
  date = new Date().toISOString().slice(0,10);
  formDate;
  dateBaseValue:string="USD";
  dateFlag:boolean=false;
  rates=this.cService.iso_code;
  daterates=this.cService.iso_code;
  iso_codes:string[]=Object.keys(this.rates);
  
  constructor(private cService:ConversionService) { }

  ngOnInit() {
    this.cService.getRates(this.base).subscribe(
      resp=>{
        this.rates = resp['rates'];
      });
  }
  todayBase(todayForm:NgForm){
    this.base =todayForm.value.base;
    this.cService.getRates(this.base).subscribe(
      resp=>{
        this.rates = resp['rates'];
      });
  }
  dateBase(dateForm:NgForm){
    this.dateFlag= true;
    this.formDate = dateForm.value.date;
    this.dateBaseValue = dateForm.value.base;
    this.cService.getRatesFromDate(this.dateBaseValue,this.formDate).subscribe(
      resp=>{
        this.daterates= resp['rates'];
      });
  }
}
