import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PcManagerComponent } from './modules/admin/assetManager/pcManager/pc-manager.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, PcManagerComponent],
})
export class AppComponent {
    /**
     * Constructor
     */
    constructor() {
    }
}
