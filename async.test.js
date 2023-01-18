const fn = require("./fn")

//이렇게 사용하는 경우 1ms 만에 끝이 난다
//에러가 나게 유도를 하여도 문제가 없이 통과된다.
//jest는 기다리지않고 코드 라인이 끝나면 test가 종료된다.
test('3초 후에 받아온 이름은 ',()=>{

    function callback(name){
        expect(name).toBe("Mike2")
    }

    fn.getName(callback)
})

//명칭은 반드시 고유한것으로 사용해야한다.
//done callback 함수를 사용하여, done 함수가 호출되기 전에 test 코드가 종료되는것을 막아야
//정상적인 비동기 테스트가 가능하다.
test('3초 후에 받아온 이름은 done ',done=>{

    function callback(name){
        expect(name).toBe("Mike2")
        done()
    }

    fn.getName(callback)
})

test('3초 후 에러가 발생하는가?',done=>{

    function callback(name){
        try{
            expect(name).toBe('Mike')
            done()
        }catch(error){
            done()
        }
    }

    fn.getCallbackError(callback)
})

//promise 객체 반환
//jest resolve 될때까지 기다려준다.
//promise를 테스트하는경우에는 return 을 해주어야한다.
test('3초 후 에러가 발생하는가? promise',()=>{
    return fn.getAgePromise().then(age=>{
        expect(age).toBe(30)
    })
})


//resolves
test('3초후 프로미스가 반환을 하는가?',()=>{
    return expect(fn.getAgePromise()).resolves.toBe(30)
})
//rejects
test('3초후 프로미스가 에러를 반환하는가?',()=>{
    return expect(fn.getAgeReject()).rejects.toBe('error!!')
    // return expect(fn.getAgeReject()).rejects.toMatch('error!')
})

//async await
test('3초 후 async' , async ()=>{
    const age = await fn.getAgePromise();
    expect(age).toBe(30);
})


test('3초 후에 async await resolves test', async ()=>{
    await expect(fn.getAgePromise()).resolves.toBe(30)
})

test('3초 후에 async await rejects test', async ()=>{
    await expect(fn.getAgeReject()).rejects.toMatch("error!")
})