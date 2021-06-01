import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Reddit {
  kind: string; 
  data: Data[];
  children: Children[];
}

interface Data {
  modhash: '';
  dist: number;
  children: Children[];
  after: string;
  before: number;
  title: string;
  thumbnail: string;
  url_overridden_by_dest: string;
}

interface Children {
  kind: string;
  data: Data[];
}


@Injectable({
  providedIn: 'root'
})
export class RedditService {
  apiUrl = "https://www.reddit.com/r/aww/.json";
  
  constructor(public client: HttpClient) { }

  getPost(){
    return this.client.get<Reddit>(this.apiUrl);
  }

}
