import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jma-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
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