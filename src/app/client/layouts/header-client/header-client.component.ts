import { Component, OnInit } from '@angular/core';
import { CategoryType } from 'src/app/type/category';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  category: CategoryType[]
  constructor(
    private categoryService:CategoryService
  ) {
    this.category=[]
  }

  ngOnInit(): void {
    this.categoryService.listCate().subscribe((data)=>{
      this.category = data;
    })
  }

}
