import { Component,OnInit } from '@angular/core';
import { AppServices } from '../appServices';

@Component({
  selector: 'home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomePageComponent implements OnInit {
data; 
	constructor(private _appServices: AppServices) {
    }

	ngOnInit():void {
 		this.fetchTopArticles();
	}

	fetchTopArticles(){
    	this._appServices.getTopArticles().subscribe(data => this.data = data , error => console.log(error));
    }
}
