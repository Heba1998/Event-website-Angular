import { Component, DebugElement, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { collapsibleWellComponent } from "src/app/common/collapsible-well.component";
import { DurationPipe } from "src/app/shared/duration.pipe";
import { AuthService } from "src/app/user/auth.service";
import { UpVoteComponent } from "../upvote.component";
import { VoterService } from "../voter.service";
import { SessionListComponent } from "./session-list.component";





describe('session list component', () =>{
    let mockAuthService;
    let mockVoterService;
    let fixture: ComponentFixture<SessionListComponent>;
    let component : SessionListComponent;
    let element: HTMLElement;
    let debugEl: DebugElement

    beforeEach(() =>{
        mockAuthService = { isAuthenticated: () => true , currentUser: {userName:'heba'}}
        mockVoterService = {userHasVoted: () => true}
        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                DurationPipe,
            ],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService}
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });

        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    })


    describe('initial display', () =>{
        it('should have correct title ', () =>{
            component.sessions = [
                {name: 'session 2' , id: 3 , presenter: 'heba' , duration: 1 , level: 'bigenner' , abstract: 'abstract', voters: ['john', 'joe']}
            ]
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;
            component.ngOnChanges();

            fixture.detectChanges();

            // expect(element.querySelector('[well-title]').textContent).toContain('session 2')
            expect(debugEl.query(By.css('[well-title')).nativeElement.textContent).toContain('session 2')
        })
    })

})