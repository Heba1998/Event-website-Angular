import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable" >
    <h4>
        <ng-content select=".title"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select=".body"></ng-content>
    </div>
    `
    
})

export class collapsibleWellComponent {
    @Input() title: string | undefined;
    visible  = true;
    
    toggleContent(){
        this.visible=!this.visible;
    }
}