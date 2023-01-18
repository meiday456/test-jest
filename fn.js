const axios = require("axios");
const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) => ({name, age, gender: undefined}),
    createUser : name =>{
      console.log('실제 유저 생성')
      return {name}
    },
    throwErr: () => {
        throw new Error("error")
    },
    getName: callback => {
        const name = 'Mike';
        setTimeout(() => {
            callback(name)
        }, 3000)
    },
    getCallbackError: callback => {

        setTimeout(() => {
            throw new Error('error!@!@!@')
        }, 3000)
    },
    getAgePromise: () => {
        const age = 30;
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(age);
            }, 3000)
        })
    },
    getAgeReject: () => {
        const age = 30;
        return new Promise((res, rej) => {
            setTimeout(() => {
                rej('error!!')
            }, 3000)
        })
    },
    connectionDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res({
                    name: "Mike",
                    age: 30,
                    gender: "male"
                })
            }, 500)
        })
    },
    disConnectDb: () => {
        return new Promise(res=>{
            setTimeout(()=>{
                res()
            },500)
        })
    },
    connectionCarDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res({
                    name: "Tim",
                    age: 40,
                    gender: "female"
                })
            }, 500)
        })
    },
    disConnectCarDb: () => {
        return new Promise(res=>{
            setTimeout(()=>{
                res()
            },500)
        })
    },
    findOne(id) {
        return axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.data);
    },
}

module.exports = fn;

