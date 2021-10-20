import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  skillsArr = [
    { name: 'HTML', degree: '95%', isWeak: false },
    { name: 'CSS', degree: '95%', isWeak: false },
    { name: 'JavaScript', degree: '95%', isWeak: false },
    { name: 'Angular', degree: '75%', isWeak: false },
    { name: 'React', degree: '75%', isWeak: false },
    { name: 'Bootstrap', degree: '95%', isWeak: false },
    { name: 'API', degree: '50%', isWeak: true },
    { name: 'Node.js', degree: '20%', isWeak: true },
    { name: 'ES6+', degree: '95%', isWeak: false },
  ];

  ngOnInit(): void {}
}
