import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Component({
    selector: 'simple-modal',
    template: `
    <div id="simple" class="modal " #modalcontainer>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"> <span>&times;</span></button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,

    styles: [`
    .modal-body{ height: 450px; overflow-y: scroll }
    `],

})

export class SimpleModelComponent {
 @Input() title:string;
 @ViewChild('modalcontainer') containerEl : ElementRef

@Input() closeOnBodyClick: string

 constructor(@Inject(JQ_TOKEN) private $:any){

 }



 closeModal(){
     if (this.closeOnBodyClick.toLocaleLowerCase()==="true") { 
         this.$(this.containerEl.nativeElement).modal('hide');
     }
 }
}