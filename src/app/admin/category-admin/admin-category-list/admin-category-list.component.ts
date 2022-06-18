import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CategoryType } from 'src/app/type/category';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  category: CategoryType[]
  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService

    ) {
    this.category=[]
   }

   ngOnInit(): void {
    this.categoryService.listCate().subscribe((data)=>{
      this.category = data;
    })
  }

  onDelete(_id: number){
    const confirmDelete = confirm('Bạn chắc chắn muốn xóa không!');
    if(confirmDelete && _id){
      this.categoryService.deleteCate(_id).subscribe((data)=>{
        this.toastr.success('Bạn đã xóa thành công');
        this.ngOnInit()
      })
    }
  }

}
