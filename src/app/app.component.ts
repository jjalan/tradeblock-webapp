import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { Logger } from 'angular2-logger/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService, private _logger: Logger) {    // localization
    translate.addLangs(['en', 'de', 'hi']);
    translate.setDefaultLang('en');
    const browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|de|hi/) ? browserlang : 'en');
    // logging test
    this._logger.warn('This is a priority level 1 error message...');
  }
}
