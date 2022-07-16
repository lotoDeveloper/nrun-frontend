import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let jsonReq: HttpRequest<any> = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem(environment.jwtName)}`
      }
    });

    return next.handle(jsonReq);
  }
}
