import { of } from "rxjs";
import { ISession } from "../shared/event.model";
import { VoterService } from "./voter.service"

describe('voter service ', () =>{
    let voterservice: VoterService,
    mockHttp:any;

    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        voterservice = new VoterService(mockHttp);
    });


    describe('delete voters', () =>{
        it('should delete voter', () =>{
            const session = {id: 6, voters: ["joe", "john"]};
            mockHttp.delete.and.returnValue(of(false));
            voterservice.deleteVoter(3, <ISession>session, "joe");

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        })

        it('should call http.delete with the right URL ', ()=>{
            const session = {id: 6, voters: ["joe", "john"]};
            mockHttp.delete.and.returnValue(of(false));
            voterservice.deleteVoter(3, <ISession>session, "joe");

            expect(mockHttp.delete).toHaveBeenCalledWith('api/events/3/sessions/6/voters/joe')
        })
    })



    describe('add voters', () =>{

        it('should call http.post with the right URL ', ()=>{
            const session = {id: 6, voters: ['john']};
            mockHttp.post.and.returnValue(of(false));
            voterservice.addVoter(3, <ISession>session, "joe");

            expect(mockHttp.post).toHaveBeenCalledWith('api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object))
        })
    })
})