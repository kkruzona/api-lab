import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Reddit {
  kind: string;
  data: Data;
}

export interface Data {
  children: Children[];
}

export interface Children {
  data: NewData;
}

export interface NewData {
  title: string;
  thumbnail: string;
  url: string;
}

// export interface Reddit {
//   kind: string; 
//   data: {
//     children: {
//           kind: string;
//           data: {
//               title: string;
//               thumbnail: string;
//               url_overridden_by_dest: string
//           };
//     };
//     after: string;
//     before: number;
//   };
// }

// export interface Data {
  
// }

// export interface Children {
//   kind: string;
//   data: Data[];
// }


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
