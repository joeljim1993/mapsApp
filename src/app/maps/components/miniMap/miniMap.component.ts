import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-mini-map',
    standalone: true,
    imports: [],
    templateUrl: './miniMap.component.html',
    styleUrls: ['./miniMap.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniMapComponent { }
