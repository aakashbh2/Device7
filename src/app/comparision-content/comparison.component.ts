import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppServices } from '../appServices';

@Component({
  selector: 'comparison-blog',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})

export class ComparisonComponent implements OnInit {
  public data;
  showview= false;
  tableheader;
  constructor(private _appServices: AppServices, private ref: ChangeDetectorRef) {
    }

  ngOnInit():void {
    this.fetchCompareBlog();
  }

  checkedStars(numberOfStars, text) {
    return Array(numberOfStars).fill(text);
  }

  fetchCompareBlog(){
    this._appServices.fetchCompareBlog("earphones-compare-blog").subscribe((data) => {
      this.data= data
      this.showview= true;
      this.ref.detectChanges();
    },
    error => {
      console.log(error);
    });
  }
}
