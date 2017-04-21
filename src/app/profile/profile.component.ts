import { Component, OnInit } from '@angular/core';
import { DbService } from '../db/db.service'
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx"
import { ProfileActivateGuard} from '../profile-activate.guard'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [DbService, ProfileActivateGuard]
})
export class ProfileComponent implements OnInit {
  private subscription: Subscription;
  id: string;
  user: object;
  constructor(private activatedRoute: ActivatedRoute, private dbService: DbService) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
    console.log(this.dbService.getUserData(this.id))
    this.user = this.dbService.getUserData(this.id)
  }

}
