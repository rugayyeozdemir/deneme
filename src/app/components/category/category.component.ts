import { Component } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories :category[]=[];
  currentCategory:category;
  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
   
    })   
  }

  setCurrentCategory(category:category){
    this.currentCategory =category;
  }

  getCurrentCategoryClass(category:category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }else{
      return"list-group-item"
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
