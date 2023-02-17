import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostserviceService } from '../postservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  esconde: boolean = true;
  listaPosts: Post[] = [];
  info: Post = { id: 0, userId: 0, title: '', body: '', }


  constructor(private servposts: PostserviceService) { }

  ngOnInit() {
    this.servposts.getPosts().subscribe(posts => {
      // console.log(posts);
      this.listaPosts = posts;
    })
  }

  mostraDetalhe(id: number) {
    console.log(id);
    // let infoPost = this.listaPosts.filter(post => post.id === id)[0];
    // this.info.id = infoPost.id;
    // this.info.userId = infoPost.userId;
    // this.info.title = infoPost.title;
    // this.info.body = infoPost.body;

    this.info = this.listaPosts.filter(post => post.id === id)[0];

    this.esconde = false;
  }

  fechaDialog() {
    this.esconde = true;
  }
}
