import { AlertService } from './../../_services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../_models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editUserInfoForm') editUserInfoForm: NgForm;
  user: User;
  data: string;
  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {}

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
