import {Injectable} from '@angular/core';
import {FileParameter, ProfileDto} from "./dto";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import BaseResult from "./BaseResult";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileRemoteService {

  constructor(private http: HttpClient) {
  }

  getOwnProfile(): Observable<BaseResult<ProfileDto>> {
    let url_ = environment.apiUrl + "/api/services/app/Profile/GetOwnProfile";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.get<any>(url_);
  }

  upload(file: FileParameter | undefined): Observable<BaseResult<string>> {
    let url_ = environment.apiUrl  + "/api/services/app/Profile/Upload";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = new FormData();
    if (file === null || file === undefined)
      throw new Error("The parameter 'file' cannot be null.");
    else
      content_.append("file", file.data, file.fileName ? file.fileName : "file");
    console.log(file)
    return this.http.put<any>(url_,content_);
  }

}

