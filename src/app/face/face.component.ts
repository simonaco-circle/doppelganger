import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FaceService } from './face.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
  form: FormGroup;
  preview: any;
  loading = false;

  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private faceService: FaceService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      avatar: null
    });
  }

  ngOnInit() {}

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.preview = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit() {
    this.loading = true;
    this.faceService.getTags(this.form.get('avatar').value).subscribe(data => {
      console.log(data);
    });
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
    this.preview = null;
  }
}
