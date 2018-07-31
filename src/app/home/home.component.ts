import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router) { }
  navigateToList(){
    this.router.navigate(['/list'], { queryParams: { 'sales': true } });
    // this.router.navigate(['/list'],{'sales':true});
  }
  ngOnInit() {
  }

}
