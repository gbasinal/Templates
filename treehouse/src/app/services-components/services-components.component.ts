import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-components',
  templateUrl: './services-components.component.html',
  styleUrls: ['./services-components.component.sass']
})
export class ServicesComponentsComponent implements OnInit {
	services = [
								{
									src : "../../assets/img/heart.png",
									title : "BEAUTIFUL DESIGNS",
									desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dicta quod voluptatem illum minima officia nesciunt illo blanditiis id possimus!'
								},
								{
									src : "../../assets/img/mobile.png",
									title : "RESPONSIVE WEB",
									desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dicta quod voluptatem illum minima officia nesciunt illo blanditiis id possimus!'
								},
								{
									src : "../../assets/img/market.png",
									title : "MARKET TOOLS",
									desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dicta quod voluptatem illum minima officia nesciunt illo blanditiis id possimus!'
								}		
							];
	
  constructor() { }

  ngOnInit() {
  }

}
