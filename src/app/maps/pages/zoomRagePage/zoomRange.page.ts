import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    standalone:true,
    templateUrl: './zoomRange.page.html',
    styleUrls: ['./zoomRange.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomRagePagePage implements OnInit {

    ngOnInit(): void { }

}
