import { AlertService } from './../../_services/alert.service';
import { UserService } from './../../_services/user.service';
import { User } from './../../_models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadUser();
  }
  loadUser = () => {
    this.userService.getUser(+this.route.snapshot.params.id).subscribe(
      (user: User) => {
        this.user = user;
      },
      error => {
        this.alertService.error(error);
      }
    );
  };
}
