import { Component, OnInit } from '@angular/core';
import {
  faFile,
  faLaugh,
  faWindowRestore,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.scss'],
})
export class WavesComponent implements OnInit {
  faceIcon: any;
  projectIcon: any;
  fileIcon: any;
  constructor() {}

  ngOnInit(): void {
    this.faceIcon = faLaugh;
    this.projectIcon = faWindowRestore;
    this.fileIcon = faFile;
  }
}
