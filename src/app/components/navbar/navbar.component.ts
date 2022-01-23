import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  githubIcon: any;
  linkedInIcon: any;
  constructor() {}

  ngOnInit(): void {
    this.githubIcon = faGithub;
    this.linkedInIcon = faLinkedin;
  }
}
