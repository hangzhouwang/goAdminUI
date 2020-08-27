import { Component, Inject, OnInit } from '@angular/core';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'layout-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
})
export class LayoutAccountComponent implements OnInit {
  links = [
    {
      title: '帮助',
      href: '',
    },
    {
      title: '隐私',
      href: '',
    },
    {
      title: '条款',
      href: '',
    },
  ];

  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {

  }

  ngOnInit(): void {
    this.tokenService.clear();
  }
}
