import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Project 1',
      description: 'Description for project 1.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 2',
      description: 'Description for project 2.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 3',
      description: 'Description for project 3.',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 4',
      description: 'Description for project 4.',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];
}
