import { ISession } from "src/app/shared/event.model";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "../voter.service";
import { SessionListComponent } from "./session-list.component"


describe('session component', () =>{
    let component : SessionListComponent;
    let mockAuthService: AuthService, mockVoterService: VoterService;

    beforeEach(() =>{
        component = new SessionListComponent(mockAuthService, mockVoterService);
    })

    describe('ngOnChanges', () =>{
        it('should filter correctly --\'2\' session ', () =>{
            component.sessions= <ISession[]>[{name: 'session 1' , level: 'intermediate'}, {name: 'session 2' , level: 'beginner'}, {name: 'session 3' , level: 'intermediate'}]

            component.filterBy = 'intermediate';
            component.sortBy= 'name';
            component.eventId= 3;


            component.ngOnChanges();
            expect(component.visibleSession.length).toBe(2);


        })


        it('should filter correctly --\'1\' session ', () =>{
        component.sessions= <ISession[]>[{name: 'session 1' , level: 'intermediate'}, {name: 'session 2' , level: 'beginner'}, {name: 'session 3' , level: 'intermediate'}]
        component.filterBy = 'beginner';
        component.sortBy= 'name';
        component.eventId= 3;
    
        component.ngOnChanges();
        expect(component.visibleSession.length).toBe(1);
        })


        it('should sort correctly --\'1\' session ', () =>{
            component.sessions= <ISession[]>[{name: 'session 1' , level: 'intermediate'}, {name: 'session 3' , level: 'beginner'}, {name: 'session 2' , level: 'intermediate'}]
            component.filterBy = 'all';
            component.sortBy= 'name';
            component.eventId= 3;
        
            component.ngOnChanges();
            expect(component.visibleSession[2].name).toBe('session 3');
        })



    })
})