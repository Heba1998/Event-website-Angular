import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
    selector: 'upvote',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i *ngIf="voted" class="glyphicon glyphicon-heart" style="color: brown;"></i>
                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
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
    @Input() voted: boolean;

    @Output() vote: EventEmitter<any> = new EventEmitter();


    onClick(){
        this.vote.emit({})
    }
    


}