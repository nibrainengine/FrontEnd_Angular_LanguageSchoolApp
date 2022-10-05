import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInData } from 'src/app/model/login.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  responsedata: any;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  proceedLogin(loginform: any): any{
    if(loginform.valid){
      this.userService.proceedLogin(loginform.value).subscribe(
        (item: any)=>{this.responsedata = item})
        console.log(this.responsedata);
        if(this.responsedata != null) {
          localStorage.setItem("token", this.responsedata.token);
          this.route.navigate(["profile"]);
        }
        else{
          alert("Login details is incorrect");
        }
    }
  }

}
