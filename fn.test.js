
const fn = require('./fn')


//expect에 검증할 값을 넣고
//toBe에 검정할 값을 넣는다. -- matcher 숫자마 문자열 등을 비교할때 사용
test('1은 1이야',()=>{
    expect(1).toBe(1);
})

test('2 더하기 3은 5야',()=>{
    expect(fn.add(2,3)).toBe(5);
})
test('3 더하기 3은 5가 아니야',()=>{
    expect(fn.add(3,3)).not.toBe(5);
})


test('2 더하기 3은 5이야',()=>{
    expect(fn.add(2,3)).toEqual(5);
})

//객체나 배열은 toBe 와 같이 원시타입을 비교하는것이 아니기때문에
//toEqual을 사용해야한다.
//toStrictEqual
test('이름과 나이를 전달받아서 객체를 반환해줘',()=>{
    expect(fn.makeUser('Mike',30)).toStrictEqual({
        name : 'Mike',
        age : 30
    })
})

//이 경우에는 통과한다.
//엄격한 검사를 하지않기 때문
test('이름과 나이를 전달받아서 객체를 반환해줘',()=>{
    expect(fn.makeUser('Mike',30)).toEqual({
        name : 'Mike',
        age : 30
    })
})

//toBeNull
//toBeUndefined
//toBeDefined
test('null check', ()=>{
    expect(null).toBeNull();
})

test('null undefined check', ()=>{
    expect(null).toBeUndefined();
})
let b
test('undefined check', ()=>{
    expect(b).toBeUndefined();
})

test('defined check', ()=>{
    expect(1).toBeDefined();
})

const a = 10;
test('const a check', ()=>{
    expect(a).toBeNull();
})


//Truthy Falsy
test('Truthy check ', ()=>{
    expect(fn.add(1,3)).toBeTruthy()
})

test('Falsy check ', ()=>{
    expect(fn.add(1,3)).toBeFalsy()
})


//toBeGreaterThan 크다
//toBeGreaterThanOrEqual 크거나 같다
//toBeLessThan 작다
//toBeLessThanOrEqual
test('ID가 10자 이하여야합니다',()=>{
    const id = "The white"
    expect(id.length).toBeLessThanOrEqual(10);
})

test("비밀번호 4자리",()=>{
    const pw='1234'
    expect(pw.length).toBe(4)
})

//toBeCloseTo 값이 근사치인지 확인하는것
test("0.1 + 0.3", ()=>{
    expect(fn.add(0.1,0.2)).toBeCloseTo(0.3)
})

//정규표현식
test("Hello world에 r이 있는가?",()=>{
    expect("Hello World").toMatch(/r/)
})


//toContain 배열에 값이 있는가?
test("유저리스트에 Mike가 있는가?",()=>{
    const user = "Mike";
    const userList = ["Tom" , "Mike2", "Jain"];
    expect(userList).toContain(user)
})


//에러 확인 실패
test("에러가 나는가?",()=>{
    expect(()=>fn.throwErr()).toThrow('error')
})
//에러 확인 성공
test("에러가 나는가?",()=>{
    expect(()=>fn.throwErr()).toThrow()
})

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toEqual(6);
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});