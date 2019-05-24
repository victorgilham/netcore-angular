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
    private alertService: AlertService
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
    console.log(this.user);
    this.alertService.success('Info updated');
    this.editUserInfoForm.reset(this.user);
  };
}
