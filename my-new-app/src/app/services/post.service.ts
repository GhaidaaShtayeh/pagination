import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://localhost:8085/invoice/dashboard?field=createdDate&size=3&page=0';

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url)

  }}

