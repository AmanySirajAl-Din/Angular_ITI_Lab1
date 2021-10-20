import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  skillsArr: Array<object> = [
    { name: 'HTML', degree: '100' },
    { name: 'CSS', degree: '100' },
    { name: 'JavaScript', degree: '100' },
    { name: 'Angular', degree: '75' },
    { name: 'React', degree: '75' },
    { name: 'Bootstrap', degree: '100' },
    { name: 'API', degree: '50' },
  ];

  ngOnInit(): void {}
}
