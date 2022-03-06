import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/posts";

  getPost() {
    return this.http.get(this.url);
  }

  sendPost(data:any) {
    return this.http.post(this.url, data);
  }

  updatePost(data:any) {
    return this.http.put(this.url+data.id, data);
  }
}
