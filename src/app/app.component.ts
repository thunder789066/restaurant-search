import { Component } from '@angular/core';
// import {pipeline} from 'stream';
// import {mainDiagnosticsForTest} from '@angular/compiler-cli/src/main';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant Search';
  city = '';
  food = '';
  venues = [];

  constructor(private _http: HttpClient) {}

  submit() {
    let url: string;
    url = "https://api.foursquare.com/v2/venues/search";
    url += "?near=" + this.city;
    url += "&radius=8047";
    url += "&limit=5";
    url += "&query=" + this.food;
    url += "&client_id=IZCDV1MCZBCVIHTZDS1ZABOYL1L4QSLQYYJJUN0VTAJJF2NM";
    url += "&client_secret=WEATVV2IY2YT00DS04CS41F52RWVVMHYTKLIVOY0EVH5QISE";
    url += "&v=20200929";

    this._http.get(url)
       .subscribe(data => {
         this.venues = data.response.venues;
         console.log(this.venues);
       });
  }
}
