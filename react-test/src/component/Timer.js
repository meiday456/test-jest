const Timer = () => {

    const date = Date.now()
    const sec = new Date(date).getSeconds()

    return <p>현재 {sec} 초 입니다.</p>
}

export default Timer

