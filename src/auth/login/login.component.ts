import {Component, OnInit} from '@angular/core';
import {AccountRemoteService} from "../../app/remote/account-remote.service";
import {AuthenticateModel, RegisterInput} from "../../app/remote/dto";
import {AuthService} from "../auth.service";
import {TokenRemoteService} from "../../app/remote/token-remote.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private tokenRemoteService: TokenRemoteService,
              private authService: AuthService) {
  }

  input = new AuthenticateModel();

  ngOnInit(): void {
  }

  login() {
    this.tokenRemoteService.authenticate(this.input).subscribe(x => {
      this.authService.setLoginInfo(x.result, false)
      location.href = '/'
    })
  }

}
