import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'maps-side-menu',
    standalone: true,
    imports: [],
    templateUrl: './sideMenu.component.html',
    styleUrls: ['./sideMenu.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent { }
