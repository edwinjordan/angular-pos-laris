import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { PesanService } from '../../services/pesan.service';
//import { NgFlashMessagesModule, NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  simpanLoading = false;

  User_username = '';
  User_password = '';

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
     private toastrService: NbToastrService,
    private pesan: PesanService
  ) {
    this.signinForm = this.fb.group({
      User_username: [''],
      User_password: [''],
    });
  }



  ngOnInit() {
  }

  loginUser() {
    this.simpanLoading = true;
    this.authService.signIn(this.signinForm.value).then(data => {

      let dt : any = data ;

      localStorage.setItem("user",JSON.stringify(dt.data.user.Karyawan));
      localStorage.setItem('access_token', dt.data.accessToken);
     if(dt.code == '200'){

        setTimeout(() => this.simpanLoading = false, 3000);
        this.pesan.showToast('top-right', 'success');
        this.router.navigate(['/pages']);
      }else{
        setTimeout(() => this.simpanLoading = false, 3000);
        this.pesan.showToast_gagal('top-right', 'danger');
      }
    }).catch(err => {
      console.log(err);
      setTimeout(() => this.simpanLoading = false, 3000);
      this.pesan.showToast_gagal('top-right', 'danger');
    })
  }

  // toggleLoadingAnimation() {
  //   this.simpanLoading = true;
  //   setTimeout(() => this.simpanLoading = false, 3000);
  // }



}
