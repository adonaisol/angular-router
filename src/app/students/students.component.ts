import { Component, OnInit } from '@angular/core';
import { DbService } from '../db/db.service';
import {ProfileActivateGuard} from '../profile-activate.guard'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [DbService, ProfileActivateGuard]
})
export class StudentsComponent implements OnInit {
  items : object[];
  constructor(private dbservice: DbService) { 
    this.items = this.dbservice.getData();
  }

  ngOnInit() {
  }

}
