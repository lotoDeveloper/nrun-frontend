import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInput, CreatePostInput, LikeInput, PostDto} from "./dto";
import BaseResult from "./BaseResult";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostRemoteService {

  constructor(private http: HttpClient) {
  }

  createPost(body: CreatePostInput | undefined): Observable<BaseResult<any>> {
    let url_ = environment.apiUrl + "/api/services/app/Post/CreatePost";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.post<any>(url_, body);
  }

  deletePost(id: number | undefined): Observable<void> {
    let url_ = environment.apiUrl + "/api/services/app/Post/DeletePost?";
    if (id === null)
      throw new Error("The parameter 'id' cannot be null.");
    else if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");

    return this.http.delete<any>(url_);
  }

  /**
   * @param id (optional)
   * @return Success
   */
  getPostById(id: number | undefined): Observable<BaseResult<PostDto>> {
    let url_ = environment.apiUrl + "/api/services/app/Post/GetPostById?";
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
  getPostByUserId(id: number | undefined): Observable<BaseResult<PostDto[]>> {
    let url_ = environment.apiUrl + "/api/services/app/Post/GetPostByUserId?";
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
  likePost(body: LikeInput | undefined): Observable<BaseResult<void>> {
    let url_ = environment.apiUrl + "/api/services/app/Post/LikePost";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.post<any>(url_, body);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  commentToPost(body: CommentInput | undefined): Observable<BaseResult<void>> {
    let url_ = environment.apiUrl + "/api/services/app/Post/CommentToPost";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.post<any>(url_, body);
  }


  getGlobalPosts(id: number | undefined): Observable<BaseResult<PostDto[]>> {
    let url_ = environment.apiUrl + "/api/services/app/Post/GetGlobalPosts?";
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
  getFollowingPosts(id: number | undefined): Observable<BaseResult<PostDto[]>> {
    let url_ = environment.apiUrl + "/api/services/app/Post/GetFollowingPosts?";
    if (id === null)
      throw new Error("The parameter 'id' cannot be null.");
    else if (id !== undefined)
      url_ += "Id=" + encodeURIComponent("" + id) + "&";
    url_ = url_.replace(/[?&]$/, "");
    return this.http.get<any>(url_);
  }

}
