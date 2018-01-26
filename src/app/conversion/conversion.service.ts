import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConversionService {
  url:string;
  iso_code={
    "AUD":'',"BGN":'',"BRL":'',"CAD":'',"CHF":'',"CNY":'',"CZK":'',"DKK":'',"GBP":'',
    "HKD":'',"HRK":'',"HUF":'',"IDR":'',"ILS":'',"INR":'',"JPY":'',"KRW":'',"MXN":'',"MYR":'',
    "NOK":'',"NZD":'',"PHP":'',"PLN":'',"RON":'',"RUB":'',"SEK":'',"SGD":'',"THB":'',
    "TRY":'',"USD":'',"ZAR":'',"EUR":''
  };
  constructor(private http:HttpClient) { }
  getRates(base:string){
    this.url = 'https://api.fixer.io/latest?base='+base;
    return this.http.get(this.url);
  }
  getRatesFromDate(base:string,date:any){
    date = date.toISOString().slice(0,10);
    this.url = 'https://api.fixer.io/'+date+'?base='+base;
    return this.http.get(this.url);
  }
  getRate(from_base:string,to_base:string){
    this.url = 'https://api.fixer.io/latest?base='+from_base+'&symbols='+to_base;
    return this.http.get(this.url);
  }
}
