import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

interface IValidator {
  key: string;
  message: string;
}
@Component({
  selector: 'app-show-validate',
  templateUrl: './show-validate.component.html',
  styleUrls: ['./show-validate.component.css']
})
export class ShowValidateComponent implements OnInit {
  @Input() field: AbstractControl | null;
  validators: IValidator[];
  constructor() {
    this.field = null;
    this.validators = [];
  }

  ngOnInit(): void {
    this.validators = [
      {
        key: 'required',
        message: 'Vui lòng điền thông tin',
      },
      {
        key: 'minlength',
        message: 'Vui lòng nhập tối thiểu {requiredLength} ký tự',
      },
      {
        key: 'maxlength',
        message: 'Chỉ được nhập tối đa {requiredLength} ký tự',
      },
      {
        key: 'min',
        message: 'Giá trị nhỏ nhất {min}',
      },
      {
        key: 'max',
        message: 'Giá trị lớn nhất  {max}',
      }
    ];
  }

}
