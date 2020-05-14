import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() title: string;
  @Input() createdAt: string;
  @Input() content: string;
  @Input() loveIts: number;

  constructor() { }

  ngOnInit(): void {
  }

  loveIt() {
    this.loveIts++;
  }

  dontLoveIt() {
    this.loveIts--;
  }
}
