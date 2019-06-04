import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router' //access to the route parameters 
import {Router} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [ './about.component.css ']
})
export class AboutComponent implements OnInit {

  constructor( private route:ActivatedRoute,private router:Router) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }
  sendMeHome(){
    this.router.navigate(['']); //going to the home component
  }
}
