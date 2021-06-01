import { Component, OnInit } from '@angular/core';
import { RedditService, Reddit } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public postApi: RedditService){}

  ngOnInit(){
    this.posts.getPost().subscribe((data:Reddit)=>{
      this.post = {...data};

      console.log(data.title)
      console.log(data.language);
      console.log(data.posts.length);
      console.log(data.posts[0].title);
      data.posts.forEach(post=>console.log(post.title));
      for(let post of data.posts){
        console.log(post.title)
        for(let tag of post.tags){
          console.log('--'+tag);
        }
      }
    })
   }

  
  title = 'api-lab';
}
