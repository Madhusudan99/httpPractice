import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  constructor(private dS: DataService, private fb: FormBuilder) {

  }
  myForm: any;

  postList: any;
  handlePosts(data: any) {
    console.log(data);
    this.postList = data;
    console.log(this.postList);
  }
  ngOnInit() {
    this.dS.getPost().subscribe((data) => this.handlePosts(data));
    this.myForm = this.fb.group({
      name: ["James", Validators.required],
      email: ['james@mail.com', [Validators.required, Validators.email]],
      message: ['This  messsage is loooooooong', [Validators.required, Validators.minLength(15)]],
    })

  }

  onSubmit() {
    console.log(this.myForm.value);
    this.dS.sendPost(this.myForm.value).subscribe((data => console.log(data)));
  }

  updateData() {
    console.log(this.myForm.value)
  }
}

