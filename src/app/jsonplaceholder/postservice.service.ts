import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  private urlAPI = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPosts() {
    // retorna um observable (data stream)
    return this.http.get<Post[]>(this.urlAPI);
  }

}
