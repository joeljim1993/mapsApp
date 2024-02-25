import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    standalone:true,
    templateUrl: './markers.page.html',
    styleUrls: ['./markers.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkersPagePage implements OnInit {

    ngOnInit(): void { }

}
