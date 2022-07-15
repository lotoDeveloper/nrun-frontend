import {Injectable, OnDestroy} from '@angular/core';
import {Observable, BehaviorSubject, of, Subscription, EMPTY} from 'rxjs';
import {map, catchError, switchMap, finalize} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {AuthenticateResultModel, ProfileDto, UserDto} from "../app/remote/dto";
import {ProfileRemoteService} from "../app/remote/profile-remote.service";



export type UserType = UserDto | undefined;

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  // public fields
  currentUser$: Observable<UserType>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserType>;
  isLoadingSubject: BehaviorSubject<boolean>;

  get currentUserValue(): UserType {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: UserType) {
    this.currentUserSubject.next(user);
  }

  constructor(
    private profileRemoteService : ProfileRemoteService,
    private router: Router
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserType>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    const subscr = this.getUserByToken().subscribe();
    this.unsubscribe.push(subscr);
  }


  logout() {
    localStorage.removeItem(environment.jwtName);
    localStorage.removeItem(environment.refJwtName);
    this.router.navigate(['/auth/login'], {
      queryParams: {},
    });
  }

  getUserByToken(): Observable<UserType> {
    this.isLoadingSubject.next(true);
    return this.profileRemoteService.getOwnProfile().pipe(
      map((result:any) => {
        if (result.result) {
          this.currentUserSubject.next(result.result.user);
        } else {
          this.logout();
        }
        return result.result;
      } ,),
      catchError((err, caught) => {
        this.logout();
        return EMPTY;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  setLoginInfo(input: AuthenticateResultModel, remember: boolean) {
    localStorage.setItem(environment.jwtName, input.accessToken || '')
    localStorage.setItem(environment.EncJwtName, input.encryptedAccessToken || '')
  }

  getCurrentUser(): Promise<ProfileDto> {
    return new Promise<ProfileDto>(((resolve, reject) => {
      this.profileRemoteService.getOwnProfile().toPromise().then(x => {
        resolve(x.result)
      }, (e: any) => reject(e))
    }))
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
