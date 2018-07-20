import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture-component',
  templateUrl: './culture-component.component.html',
  styleUrls: ['./culture-component.component.sass']
})
export class CultureComponentComponent implements OnInit {
  public cultures = [];
  constructor() { }

  ngOnInit() {
    this.cultures = [
      {
        path: "../../assets/img/work.png",
        title: "WORK-LIFE BALANCE",
        desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem labore iusto error expedita tenetur. Ea quisquam eum ipsa est minus."
      },
      {
        path: "../../assets/img/graph.png",
        title: "QUALITY OVER QUANTITY",
        desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium enim accusamus ipsam minus quibusdam quo dolore commodi eos ea rem!"
      },
      {
        path: "../../assets/img/star.png",
        title: "DELIVER EXCELLENCE",
        desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam animi velit commodi provident consequuntur doloribus nisi adipisci repellendus praesentium, aliquid."
      }    
    ]
  }

}