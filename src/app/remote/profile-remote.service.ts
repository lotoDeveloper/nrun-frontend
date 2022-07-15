import {Injectable} from '@angular/core';
import {ProfileDto} from "./dto";
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

}
