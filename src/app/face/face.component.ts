import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FaceService } from './face.service';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
  base64encoded: any;
  filename: string;

  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private faceService: FaceService) {}

  ngOnInit() {}

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.filename = file.name;
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.base64encoded = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit() {
    this.faceService
      .getTags(this.filename, this.base64encoded)
      .subscribe(data => {
        console.log(data);
      });
  }

  clearFile() {
    this.fileInput.nativeElement.value = '';
    this.base64encoded = null;
  }
}
