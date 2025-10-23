import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(private renderer: Renderer2) {}
   ngOnInit(): void {
    //  let currentHost = window.location.hostname;
    // if (currentHost === 'localhost' || currentHost === '') {
    //   currentHost = environment.DEFAULT_ADMIN_HOST_URL;
    // }

    //  console.log(`Current Host is ${currentHost}: Loading the theme css...`);
    // const linkElement = this.renderer.selectRootElement('#themecss', true);
    // // update the href attribute
    // this.renderer.setAttribute(
    //   linkElement,
    //   'href',
    //   `${this.getThemeCssLink()}?tenantHost=${currentHost}`,
    // );
    // console.log(document.getElementById('themecss')?.getAttribute('href'));
   }
  
   getThemeCssLink() {
    return `${environment.CORE_API_URL}/mtekcss`;
  }
}
