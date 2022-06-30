import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  profileForm:any = FormGroup;

  name: string = '';
  file: any;

  getName(name: string){
    this.name = name;
  }

  getFile(event: any){
    this.file = event.target.files[0];
    console.log('file', this.file);
  }

  constructor(private fb: FormBuilder, private fileUploadService: UploadService, private http: HttpClient) { }

  ngOnInit() {
  }

  onSelectedFile(event: any){
    if(event.target.files.length > 0){
      const profile = event.target.files[0];
      this.profileForm.get('profile').setValue(profile);
    }
    console.log(event.target.files);
  }

  onSubmit(){
    
    /*
    formData.append('name', this.profileForm.get('name').value);
    formData.append('profile', this.profileForm.get('profile').value);

    this.fileUploadService.upload(formData).subscribe(res => {console.log(res)});
    */
   console.log('button pressed');
    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("file", this.file);

    this.http.post('http://localhost:8080/uploadFile', formData).subscribe(
      resp => {}
    )

  }

}
