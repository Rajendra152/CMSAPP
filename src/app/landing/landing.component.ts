/**
 * @description The below code is used to display about the details of the landing page of application
 * importing Component,OnInit from '@angular/core';
 * importing html and css from the landing component folder and integrating it.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})

/**
 * @Params Creating the class LandingComponent and exporting it
 */
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
