import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
  faBirthdayCake,
  faLocationArrow,
  faMapPin,
  faMugHot,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume-detail',
  templateUrl: './resume-detail.component.html',
  styleUrls: ['./resume-detail.component.scss'],
})
export class ResumeDetailComponent implements OnInit {
  mapMarkerIcon = faMapPin;
  birthdayCakeIcon = faBirthdayCake;
  mugHotIcon = faMugHot;
  constructor() {}

  ngOnInit(): void {}

  // function to calculate age
  calculateAge() {
    const birthday = new Date('10/22/1994');
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // function to calculate years of experience
  calculateExperience() {
    const startDate = new Date('01/01/2018');
    let experienceDifMs = Date.now() - startDate.getTime();
    let experienceDate = new Date(experienceDifMs);
    return Math.abs(experienceDate.getUTCFullYear() - 1970);
  }
}
