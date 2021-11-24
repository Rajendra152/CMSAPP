
/**
 * @description The below code is used to display about the details of the content page of application
 * importing Component,OnInit from '@angular/core';
 * importing html and css from the contentpage component folder and integrating it.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css'],
})

/**
 * @Params Creating the class ContentpageComponent and exporting it
 */

export class ContentpageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
