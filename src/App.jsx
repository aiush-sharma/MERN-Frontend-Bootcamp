// // // import { useState } from "react";

// // // import "./App.css";

// // // function Say(props) {
// // //   const Text = props.text;
// // //   return <h1>{Text}</h1>;
// // // }
// // // function Button({ color, fontSize, text = "sholay", handleClick }) {
// // //   const buttonStyle = {
// // //     color: color,

// // //     fontSize: fontSize + "px",
// // //   };

// // //   return (
// // //     <button style={buttonStyle} onClick={handleClick}>
// // //       {text}
// // //     </button>
// // //   );
// // // }

// // // function App() {
// // //   const handleButtonClick = (e,annouce) => {
// // //     e.preventDefault();
// // //     alert(annouce);
// // //   };
// // //   return (
// // //     <>
// // //       <form action="">
// // //         <h1>hello world</h1>
// // //         <input type="text" placeholder="Enter your name" />
// // //         <Button
// // //           type="submit"
// // //           color="green"
// // //           fontSize="20"
// // //           handleClick={(e) => handleButtonClick(e, "first Button")}
// // //           text="Click Me!"
// // //         ></Button>
// // //         <Button
// // //           type="submit"
// // //           color="red"
// // //           fontSize="20"
// // //           handleClick={(e) => handleButtonClick(e, "second Button")}
// // //         ></Button>
// // //         <Button
// // //           type="submit"
// // //           color="blue"
// // //           fontSize="20"
// // //           handleClick={(e) => handleButtonClick(e, "third Button")}
// // //           text="Click Me!"
// // //         ></Button>
// // //       </form>
// // //       <Say text="welcome to react course"></Say>
// // //     </>
// // //   );
// // // }

// // // export default App;

// // function ListItem({ animal }) {
// //   return <li>{animal}</li>;
// // }

// // function List({ animals }) {
// //   return (
// //     <ul>
// //       {animals.map((animal) => {
// //         return animal.startsWith("L") && (
// //           <ListItem animal={animal}></ListItem>
// //         ) ;

// //       })}
// //     </ul>
// //   );
// // }
// function ListItem(props) {
//   return <li>{props.animal}</li>;
// }
// function List(props) {
//   if (!props.animals) {
//     return <div>Loading...</div>;
//   }

//   if (props.animals.length === 0) {
//     return <div>There are no animals in the list!</div>;
//   }

//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("g") ? (
//           <ListItem key={animal} animal={animal}></ListItem>
//         ) : null;
//       })}
//     </ul>
//   );
// }

// export default function App() {
//   const animals = ["lion", "tiger", "leopard", "elephant", "giraffe"];

//   return (
//     <div>
//       <h1>Animals: </h1>

//       <List animals={animals} />
//     </div>
//   );
// }

// // function GamePage() {
// //   const [key, setKey] = useState(0);

// //   return <Game key={key} resetGame={() => setKey(key + 1)} />;
// // }
// const todos = [
//   { task: "mow the yard", id: crypto.randomUUID() },
//   { task: "Work on Odin Projects", id: crypto.randomUUID() },
//   { task: "feed the cat", id: crypto.randomUUID() },
// ];

// function TodoList() {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.task}</li>
//       ))}
//     </ul>
//   );
// }
import { useState } from "react";
function Counter() {
  //commit it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function ResetButton({ resetGame }) {
  return <button onClick={resetGame}>Reset</button>;
}
export default function App() {
  const [key, setKey] = useState(0);
  const triggerReset = () => setKey(key + 1);
  return (
    <div>
      <h1>hello world</h1>

      <Counter key={key} />
      <ResetButton resetGame={triggerReset} />
    </div>
  );
}
