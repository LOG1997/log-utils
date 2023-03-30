import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {  getRandomGradientColor, randomColor, byteToUnit,arrayToTree,treeToArr } from "../../../lib";
// import {arrayToTree,treeToArr} from '../../../packages/arrList/index'
function App() {
  const [count, setCount] = useState(0);
  type DataType={
    id: number|string
    name: string
    pid: number|string
  }
  const data:DataType[] = [
    { id: 1, name: "1", pid: 0 },
    { id: 2, name: "2", pid: 0 },
    { id: 3, name: "3", pid: 0 },
    { id: 4, name: "4", pid: 1 },
    { id: 5, name: "5", pid: 1 },
    { id: 6, name: "6", pid: 2 },
    { id: 7, name: "7", pid: 2 },
    { id: 8, name: "8", pid: 3 },
    { id: 9, name: "9", pid: 3 },
    { id: 10, name: "10", pid: 4 },
    { id: 11, name: "11", pid: 4 },
    { id: 12, name: "12", pid: 5 },
    { id: 13, name: "13", pid: 5 },
    { id: 14, name: "14", pid: 6 },
    { id: 15, name: "15", pid: 6 },
    { id: 16, name: "16", pid: 7 },
    { id: 17, name: "17", pid: 7 },
  ];
  const tree = arrayToTree<DataType>(data,{id:'id',children:'list',pid:'pid'});
  console.log("😁tree:", tree);
  const arr=treeToArr(tree,{children:'list'})
  console.log('😐arr:',arr)

 
  const color1 = getRandomGradientColor();

  console.log('😒color1:', color1)
  const color2 = randomColor();
  console.log('😒color2:', color2)
  // const [treeData, setTreeData] = useState(tree)


  const byteSize = 102500;
  const unitSize = byteToUnit(byteSize);
  console.log('😃unitSize:', unitSize)
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
