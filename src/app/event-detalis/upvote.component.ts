
import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector: 'upvote',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i class="glyphicon glyphicon-heart" [style.color]="iconColor" ></i>
                <!-- <i *ngIf="voted" class="glyphicon glyphicon-heart" style="color: brown;"></i>
                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i> -->
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>
    `,
})

export class UpVoteComponent {
    @Input() count: number;
    @Input() set voted(val: any){
        this.iconColor = val? "brown": "white"
    }

    @Output() vote: EventEmitter<any> = new EventEmitter();

    iconColor:string

    onClick(){
        this.vote.emit({})
    }
    


}