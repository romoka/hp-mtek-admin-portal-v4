import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { AppService } from './services/app-service';
import { AppEnums } from './enums/app.enums';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private renderer: Renderer2, private appSvc: AppService) {}
  ngOnInit(): void {
    let currentHost = window.location.hostname;
    if (currentHost === 'localhost' || currentHost === '') {
      currentHost = environment.DEFAULT_ADMIN_HOST_URL;
    }

    //Get the partner details from the URL
    const partnerDetailsUrl = `${environment.CORE_API_URL}/mtektpinfo?tenantHost=${currentHost}`;
    this.getPartnerDetails(partnerDetailsUrl);

    const linkElement = this.renderer.selectRootElement('#themecss', true);
    // update the href attribute
    this.renderer.setAttribute(
      linkElement,
      'href',
      `${this.getThemeCssLink()}?tenantHost=${currentHost}`
    );
    linkElement.onload = () => {
      this.renderer.setStyle(
        document.querySelector('app-root'),
        'display',
        'block'
      );
    };
  }
  getPartnerDetails(partnerDetailsUrl: string) {
    this.appSvc.makeGetRequest(partnerDetailsUrl).subscribe((response) => {
      if (response.Status === 200) {
        this.appSvc.setSessionData(AppEnums.APP_SESSION, {
          thirdParty: response.Payload,
        });
      }
    });
  }

  getThemeCssLink() {
    return `${environment.CORE_API_URL}/mtekcss`;
  }
}
