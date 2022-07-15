import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticateModel, AuthenticateResultModel} from "./dto";
import {Observable} from "rxjs";
import BaseResult from "./BaseResult";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenRemoteService {

  constructor(private http: HttpClient) {
  }

  authenticate(body: AuthenticateModel | undefined): Observable<BaseResult<AuthenticateResultModel>> {
    let url_ = environment.apiUrl + "/api/TokenAuth/Authenticate";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.post<any>(url_, body)
  }

}
