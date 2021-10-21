import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}
  myProjects: Array<string> = [
    'Web Design',
    'Web Development',
    'Front-End Web Development',
    'Amany Is Smart',
    'You Can Do It',
    'Go For It',
  ];
  ngOnInit(): void {}
}
