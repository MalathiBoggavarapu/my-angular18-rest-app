import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  /*firstName: string = "Angular";
  angularVersion = "18";
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "radio";

  showWelcomeAlert() {
    alert("Welcome to Angular!!!");
  }

  showMessage(message: string) {
    alert(message);
  }*/
    // This is earlier version <=16. DI
    /*constructor(http: HttpClient) {

    }*/
   http = inject(HttpClient);
   roleList: IRole [] = [];

    ngOnInit(): void {
      this.getAllRoles();
    }

    getAllRoles() {
      this.http.get("").subscribe((res:any) => {
        this.roleList = res.data;
      })
    }


}
