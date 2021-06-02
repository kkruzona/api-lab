import { Component, OnInit } from '@angular/core';
import { RedditService, Reddit, Children } from './reddit.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  post: Children[] = [];
  constructor(public postApi: RedditService){}

  ngOnInit(): void{
    this.postApi.getPost().subscribe((data:Reddit)=>{
      this.post = data.data.children;
      console.log(data.data.children[0].data.title)
      console.log(data.data.children[0].data.thumbnail)
      console.log(data.data.children[0].data.url)
    })
   }
  
  title = 'api-lab';
}
