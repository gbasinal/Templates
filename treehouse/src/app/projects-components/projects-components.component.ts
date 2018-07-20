import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-components',
  templateUrl: './projects-components.component.html',
  styleUrls: ['./projects-components.component.sass']
})
export class ProjectsComponentsComponent implements OnInit {
  public projects = [];
  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        path: "../../assets/img/ecommerce.png",
        title: "E-Commerce Ready",
        desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo."
      },
      {
        path: "../../assets/img/seo.png",
        title: "Powerful SEO Features",
        desc:  "Lorem ipsum dolor sit amet, consectetur."
      },
      {
        path: "../../assets/img/secure.png",
        title: "Secure Encyrption",
        desc:  "Lorem ipsum dolor sit amet, consectetur."
      }    
    ]
  }

}
