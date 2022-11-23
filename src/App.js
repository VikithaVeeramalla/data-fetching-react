import React from "react";
import "./styles.css";
const data = [
  { name: "vikki", age: 20 },
  { name: "sri", age: 21 },
  { name: "mariya", age: 22 },
  { name : "victoria" , age : 23}
];

function App() {
  function myFunction(e) {
    e.preventDefault();
    console.log("function runnig");
    setInput(e.target.value);
    console.log(e.target.value);

  }

  const [input, setInput] = React.useState("");
  return (
    <div className="tables">
      <input
        type="text"
        placeholder="enter name.."
        onChange={(e) => myFunction(e)}
      />

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {data.map((val, key) => {
          return (
            val.name.includes(input) ? (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
              </tr>
            )
              :
              null
            
          );
        })}
      </table>
    </div>
  );
}

export default App;
