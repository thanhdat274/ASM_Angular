import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/type/auth';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  user: UserType[];
  constructor(
    private authService: AuthService
  ) {
    this.user =[]
   }

  ngOnInit(): void {
    this.authService.listUser().subscribe((data)=>{
      this.user = data;
    })
  }
  onDelete(_id: number){
    const confirmDelete = confirm('Bạn chắc chắn muốn xóa không!');
    if(confirmDelete && _id){
      this.authService.deleteUser(_id).subscribe((data)=>{
        console.log(data);
        this.ngOnInit()
      })
    }
  }
}
