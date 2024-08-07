import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterViewComponent {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  constructor(protected stateService: StateService) {
    //RevealSdkSettings.serverUrl = this.stateService.myURL;
  }

  ngOnInit() {
    RevealSdkSettings.serverUrl = this.stateService.myURL;
  }
}
