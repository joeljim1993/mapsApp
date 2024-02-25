import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    standalone:true,
    templateUrl: './fullScrenPage.page.html',
    styleUrls: ['./fullScrenPage.page.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullScrenPagePage implements OnInit {

    ngOnInit(): void { }

}
