import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from './models/category';
import { ListResponseModel } from './models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://localhost:44307/api/categories/getall"

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<category>> {
    return this.httpClient.get<ListResponseModel<category>>(this.apiUrl)
  }
  }

