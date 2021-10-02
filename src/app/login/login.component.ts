import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { Login } from '../login';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    Login
  ]
})
export class LoginComponent implements OnInit {

  user: any = {username: "", password: ""};

  messageError: string = "";

  constructor(
    private service : UserServiceService,
    public login : Login,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //verify user login
  public userLogin(){
    let response = this.service.userLogin(this.user);
    response.subscribe(data => {
      let resp: any = data;
      if(resp.responseCode == 0){
        this.login.setFirstname(resp.firstname);
        this.login.setLastname(resp.lastname);
        this.login.setUsername(resp.username);
        this.login.setResponseMessage(resp.responseMessage);
        this.router.navigate(['/dashboard']);
      }else{
         this.messageError = resp.responseMessage;
         alert(this.messageError);
      }
    })
  }




}
