import { AuthService } from './../../_services/auth.service';
import { UserService } from './../../_services/user.service';
import { AlertService } from './../../_services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../_models/user';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private userService: UserService,
    private authService: AuthService
  ) {}
  @ViewChild('editUserInfoForm') editUserInfoForm: NgForm;
  user: User;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editUserInfoForm.dirty) {
      $event.returnValue = true;
    }
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }
  updateUser = () => {
    this.userService
      .updateUserInfo(this.authService.decodedToken.nameid[0], this.user)
      .subscribe(
        next => {
          this.alertService.success('Info updated');
          this.editUserInfoForm.reset(this.user);
        },
        error => {
          this.alertService.error(error);
        }
      );
  };
}
