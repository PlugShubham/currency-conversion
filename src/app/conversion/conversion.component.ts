import { Component, OnInit } from '@angular/core';
import { ConversionService } from './conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
  providers:[ConversionService]
})
export class ConversionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
