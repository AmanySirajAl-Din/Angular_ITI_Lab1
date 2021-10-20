import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  skillsArr: Array<object> = [
    { name: 'HTML', degree: '5' },
    { name: 'CSS', degree: '4' },
    { name: 'JavaScript', degree: '5' },
    { name: 'Angular', degree: '3' },
    { name: 'React', degree: '3' },
    { name: 'Bootstrap', degree: '5' },
    { name: 'API', degree: '2' },
  ];

  ngOnInit(): void {}
}
