import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterInput, RegisterOutput} from "./dto";
import {Observable} from "rxjs";
import BaseResult from "./BaseResult";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountRemoteService {

  constructor(private http: HttpClient) {
  }

  register(body: RegisterInput | undefined): Observable<BaseResult<RegisterOutput>> {
    let url_ = environment.apiUrl + "/api/services/app/Account/Register";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.post<any>(url_, body)
  }

}
