import { Component,OnInit } from '@angular/core';
import { AppServices } from '../appServices';

@Component({
  selector: 'new-letter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})

export class NewsLetterComponent implements OnInit { 
obje:any;

constructor(private _appServices: AppServices) {
    }

ngOnInit():void {
 this.bc();
}

bc(){
     console.log("oh bc",this._appServices.getJSON().subscribe(data =>console.log(data) , error => console.log(error)));
    // console.log(this.obje);
}
}
