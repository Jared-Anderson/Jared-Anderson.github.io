import { Component, OnInit } from '@angular/core';
import {
  faAddressCard,
  faFileCode,
  faGrinSquintTears,
  faLaugh,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  faceIcon: any;
  projectIcon: any;
  fileIcon: any;
  faceIconHovered: any;
  hovered: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.faceIcon = faLaugh;
    this.projectIcon = faFileCode;
    this.fileIcon = faAddressCard;
    this.faceIconHovered = faGrinSquintTears;
  }

  toggleHovered(value?: boolean) {
    if (value) this.hovered = value;
    else this.hovered = !this.hovered;
  }
}
