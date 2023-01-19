import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import Timer from "./component/Timer";
import useGetHour from "./component/useGetHour";

const user = {
    // name : "Mike",
    age : 32
}


function App() {

    const hour = useGetHour()

  return (
    <div className="App">
      {/*<Hello user={user} />*/}
      {/*  <Timer></Timer>*/}
        {
            hour >= 20
                ? <h1>8시 이후 입니다</h1>
                :<h1>8시 이전 입니다</h1>
        }
    </div>
  );
}

export default App;
