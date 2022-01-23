import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-resume-detail',
  templateUrl: './resume-detail.component.html',
  styleUrls: ['./resume-detail.component.scss'],
})
export class ResumeDetailComponent implements OnInit {
  briefcaseIcon = faCalendar;
  constructor() {}

  ngOnInit(): void {}
}
