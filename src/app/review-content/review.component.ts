import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppServices } from '../appServices';

@Component({
  selector: 'review-blog',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent {
  public data;
  showview= false;
  constructor(private _appServices: AppServices, private ref: ChangeDetectorRef) {
    }

  ngOnInit():void {
    this.fetchReviewBlog();
  }

  fetchReviewBlog(){
    this._appServices.fetchReviewBlog("earphones-compare-blog").subscribe((data) => {
      this.data= data
      this.showview= true;
      this.ref.detectChanges();
    },
    error => {
      console.log(error);
    });
  }
}
