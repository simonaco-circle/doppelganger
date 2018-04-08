import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
const CV_URL =
  // tslint:disable-next-line:max-line-length
  'https://doppelganger-api.azurewebsites.net/api/FileUploadNode/';
@Injectable()
export class FaceService {
  constructor(private http: Http) {}

  getTags(filename: string, base64encoded: string): Observable<any> {
    const data = { filename: filename, data: base64encoded };
    return this.http
      .post(CV_URL + filename, data)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
