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

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  register = () => {
    this.authService.register(this.model).subscribe(
      () => {
        console.log('Registration succesful');
      },
      error => console.log(error)
    );
  };
  cancel = () => {
    this.cancelRegister.emit(false);
    console.log(this);
  };
}
