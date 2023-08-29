import "./App.css";
// import Button from "./Components/Button";
// import ButtonGroups from "./Components/ButtonGroups";
import List from "./Components/List";
import ShapOne from "./Components/ShapOne";
import ShapeTow from "./Components/ShapeTow";

function App() {
  const userData = [
    {
      id: 1,
      name: "khalifeh",
      email: "khalifeh@gmail.com",
      age: 33,
    },
    {
      id: 2,
      name: "Alia",
      email: "Alia@gmail.com",
      age: 27,
    },
    {
      id: 3,
      name: "Raad",
      email: "raad@gmail.com",
      age: 32,
    },
    {
      id: 4,
      name: "Maya",
      email: "Maya@gmail.com",
      age: 22,
    },
  ];

  const data = [
    {
      componentName: ShapOne,
      data: {
        id: 1,
        name: "khalifeh",
        email: "khalifeh@gmail.com",
        age: 33,
      },
    },
    {
      componentName: ShapeTow,
      data: {
        id: 2,
        name: "Alia",
        email: "Alia@gmail.com",
        age: 27,
      },
    },
  ];
  // const callBackFn = (title) => {
  //   console.log(title);
  // };

  const child = data.map((el) => {
    let ComponentName = el.componentName;

    return <ComponentName item={el.data}                                                                                                                                                                                key={el.data.id}></ComponentName>;
  });

  return (
    <div className="App">
      {/* <List items={userData}>
        <ShapOne />
      </List>
      <List items={userData}>
        <ShapeTow />
      </List> */}
      {child}
      {/* <Button callBackFn={() => callBackFn("Single")}>Single</Button>
      <ButtonGroups>
        <Button callBackFn={() => callBackFn("First")}>First</Button>
        <Button callBackFn={() => callBackFn("Second")}>Second</Button>
      </ButtonGroups> */}
    </div>
  );
}

export default App;
