const fn = require("./fn")

let num = 10


//beforeEach
//테스트 마다 그 전에 수행
// beforeEach(()=>{
//     num = 10;
// })

//테스트 마다 그 후에 수행
// afterEach(()=>{
//     num = 0;
// })
let user;

//모든 테스트 전에 수행
beforeAll(async()=>{
    user = await fn.connectionDb()
})
//모든 테스트가 수행된 후 수행된다.
afterAll(async ()=>{
    await fn.disConnectDb()
})

test('연결된 유저의 이름은 Mike?',()=>{
    expect(user.name).toBe('Mike')
})


test('num +1 는 11', ()=>{
    num = fn.add(num,1)
    expect(num).toBe(11)
})


test('num + 2 는 12', ()=>{
    num = fn.add(num,2)
    expect(num).toBe(12)
})




