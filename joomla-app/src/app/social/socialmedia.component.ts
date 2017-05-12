import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  public socialMenu = [
    { name: 'Google+', uri: 'http://www.google.com/+' },
    { name: 'Facebook', uri: 'http://www.facebook.com/mae.a.harris' },
    { name: 'RSS', uri: 'http://www.maesworld.com' }
  ];
  constructor() { }

  ngOnInit() {
  }

  public handleSocialLink(idx) {
    console.log(this.socialMenu[idx]);
  }
}
