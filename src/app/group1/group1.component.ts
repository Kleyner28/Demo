import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group1',
  templateUrl: './group1.component.html',
  styleUrls: ['./group1.component.scss'],
})


export class Group1Component implements OnInit {

  constructor() { }

  ngOnInit() {}

click(){
var coll = document.getElementsByClassName("collapsible");
var i=0;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}


}
