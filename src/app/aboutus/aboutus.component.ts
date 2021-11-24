/**
 * @description The below code is used to display about the details of the application
 * importing Component,OnInit from '@angular/core';
 * importing html and css from the aboutus component folder and integrating it.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

/**
 * @Params Creating the class AboutusComponent and exporting it
 */
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
