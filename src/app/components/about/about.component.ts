import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';
import { Pfskills} from './skill.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills: Skill[] = [
    { name: 'Java', rating: 4 },
    { name: 'Spring', rating: 3 },
    { name: 'Angular', rating: 5 },
    { name: 'DSA', rating: 4 },
    { name: 'SQL', rating: 3 }
  ];

  Pfskill: Pfskills[] =[
    { name: 'Java', rating: 4 },
    { name: 'Spring', rating: 3 },
    { name: 'Angular', rating: 5 },
    { name: 'quant', rating: 4 },
    { name: 'aptitude', rating: 3 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
