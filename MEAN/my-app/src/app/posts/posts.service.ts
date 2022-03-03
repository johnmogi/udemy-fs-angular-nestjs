import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  adress: string='http://localhost:3000/posts';
  constructor(private http:HttpClient){

  }
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    this.http.get<{message:string, posts:Post[]}>('http://localhost:3000/posts')
    .subscribe((postData)=>{
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts])
    });
    // return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const id = null;
    const post: Post = {id: id, title: title, content: content};
    this.http.post<{message:string}>('http://localhost:3000/posts', post)
    .subscribe((responseData)=>{
      console.log(responseData.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    })
  }
}
