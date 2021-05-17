import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username$ = this.route.paramMap
    .pipe(
      map((params: ParamMap) => params.get('username'))
    );
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}