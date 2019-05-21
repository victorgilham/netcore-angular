import { AlertService } from './../_services/alert.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}
  register = () => {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertService.success('Registration succesful');
      },
      error => this.alertService.error(error)
    );
  };
  cancel = () => {
    this.cancelRegister.emit(false);
    console.log(this);
  };
}
