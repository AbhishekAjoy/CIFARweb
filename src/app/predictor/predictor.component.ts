import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  isHovering: boolean;
  isDrop: boolean = false;
  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.isDrop = true;
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
}
