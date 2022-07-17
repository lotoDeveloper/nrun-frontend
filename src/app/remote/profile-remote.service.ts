import {Injectable} from '@angular/core';
import {FileParameter, LikeInput, ProfileDto, ProfileInput, UserDto} from "./dto";
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
    let url_ = environment.apiUrl + "/api/services/app/Profile/Upload";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = new FormData();
    if (file === null || file === undefined)
      throw new Error("The parameter 'file' cannot be null.");
    else
      content_.append("file", file.data, file.fileName ? file.fileName : "file");
    console.log(file)
    return this.http.put<any>(url_, content_);
  }

  updateProfile(body: ProfileInput | undefined): Observable<BaseResult<void>> {
    let url_ = environment.apiUrl + "/api/services/app/Profile/UpdateProfile";
    return this.http.put<any>(url_, body);
  }

  /**
   * @param id (optional)
   * @return Success
   */
  getProfile(id: number | undefined): Observable<BaseResult<ProfileDto>> {
    let url_ = environment.apiUrl + "/api/services/app/Profile/GetProfile?";
    if (id === null)
      throw new Error("The parameter 'id' cannot be null.");
    else if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.get<any>(url_);
  }


  /**
   * @param body (optional)
   * @return Success
   */
  follow(body: LikeInput | undefined): Observable<void> {
    let url_ = environment.apiUrl + "/api/services/app/Profile/Follow";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.post<any>(url_, body);
  }


  /**
   * @param id (optional)
   * @return Success
   */
  getFollowers(id: number | undefined): Observable<BaseResult<UserDto[]>> {
    let url_ = environment.apiUrl + "/api/services/app/Profile/GetFollowers?";
    if (id === null)
      throw new Error("The parameter 'id' cannot be null.");
    else if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.get<any>(url_);

  }


  /**
   * @param id (optional)
   * @return Success
   */
  getFollowings(id: number | undefined): Observable<BaseResult<UserDto[]>> {
    let url_ = environment.apiUrl + "/api/services/app/Profile/GetFollowings?";
    if (id === null)
      throw new Error("The parameter 'id' cannot be null.");
    else if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.get<any>(url_);
  }


}

