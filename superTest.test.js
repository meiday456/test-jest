
import app from "./superTest"
import request from "supertest"

describe("GET user", ()=>{
    it("...",(done)=>{
        request(app)
            .get("/user")
            .end((err,res)=>{
                expect(res.body).toStrictEqual({name:"kang"})
                done();
            })
    })
    }

)