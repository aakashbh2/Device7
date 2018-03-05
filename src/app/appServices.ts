import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class AppServices{
    constructor(private http: Http) {
    }

    getTopArticles(): Observable<any> {
         return this.http.get("../assets/data/homePage.json")
                         .map((res:any) => res.json())
                         .catch((error:any) => error);
		}

    fetchFooterNotes(): Observable<any> {
         return this.http.get("../assets/data/footer-notes.json")
                         .map((res:any) => res.json())
                         .catch((error:any) => error);
    }
}
