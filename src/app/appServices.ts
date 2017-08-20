import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class AppServices{
result:any;
    constructor(private http: Http) {
    }

    getJSON(): Observable<any> {
         this.result = this.http.get("assets/data.json")
                         .map((res:any) => res.json());
                         // .catch((error:any) => error);
        console.log("now here",Observable.of(this.result));
        return Observable.of(this.result);
		}
}