import {Component, OnInit} from '@angular/core';
import {AccountRemoteService} from "../../app/remote/account-remote.service";
import {RegisterInput} from "../../app/remote/dto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private accountRemoteService: AccountRemoteService) {
  }

  input = new RegisterInput();

  ngOnInit(): void {
  }

  register() {
    this.input.userName = this.input.emailAddress
    this.input.surname = this.input.name
    this.accountRemoteService.register(this.input).subscribe(x=>{
      location.href = 'login'
    })
  }

}
