import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-register-hero',
  templateUrl: './register-hero.component.html',
  styleUrls: ['./register-hero.component.scss']
})
export class RegisterHeroComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService, private toasterService: ToasterService) {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      sex: [null, Validators.required],
      country: [null, Validators.required],
      address: null
    });
    this.toasterService = toasterService;
  }

  ngOnInit() {
  }

  register() {


    // 폼이 유효하지 않으면 리턴
    if (!this.form.valid) {
      // 인풋박스를 강제로 한번씩 클릭
      // to validate all form fields
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.controls[key];
        control.markAsTouched({onlySelf: true});
      });
      return;
    }
    console.log('register');

    // 서버 연동
    const sendForm = Object.assign({}, this.form.value);
    this.adminService.addHero(sendForm).subscribe( body => {
      console.log(body);
      // 사용자에게 토스트로 정보를 보여준다
      this.toasterService.pop('success', 'success', '등록되었습니다. ');
      // 폼 초기화
      this.form.reset();
    });
  }


}
