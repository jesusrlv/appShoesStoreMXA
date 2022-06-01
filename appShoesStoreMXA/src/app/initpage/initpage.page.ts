import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"


@Component({
  selector: 'app-initpage',
  templateUrl: './initpage.page.html',
  styleUrls: ['./initpage.page.scss'],
})
export class InitpagePage implements OnInit {
  Url:SafeResourceUrl;

  constructor(private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.Url = this.domSatizer.bypassSecurityTrustResourceUrl("http://www.shoesstoremxa.com/tenis/catalogo.php");
  }

}
