import { Component, Input } from '@angular/core';

@Component({
  selector: 'recent-products',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})

export class RecentComponent {
  @Input() isComparePage: boolean = true;
}
