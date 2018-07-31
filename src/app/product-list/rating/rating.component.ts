import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating:string;
 
  ratingArray:any[]=[
    {id:1,checked:false},
    {id:2,checked:false},
    {id:3,checked:false},
    {id:4,checked:false},
    {id:5,checked:false}]
  constructor() { 
  }

  ngOnInit() {
    console.log(this.rating);
  }

}
