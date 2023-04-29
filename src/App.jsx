import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData([...json]);
        return console.log(json);
      });
  }, []);
  return (
    <div>
      <h3>JSON Placehoder DATA</h3>
      {data.map(function (item) {
        return (
          <div key={item.id} style={{ border: "1px solid black", margin: '5px' }}>
            <ul>
              <li>유저 아이디: {item.userId}</li>
              <li>제목: {item.title}</li>
              <li>본문: {item.body}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
