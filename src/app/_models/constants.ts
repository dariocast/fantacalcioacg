import {HttpHeaders} from '@angular/common/http';

export abstract class Constants {
  static readonly APIURL = 'https://dariocast.altervista.org/fantazama/api/';
  static readonly HTTPHEADERS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
}
