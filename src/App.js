import "./App.css";
import SwiperCarosel from "./Components/SwiperCarosel";
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
  // const data = userData.map((elm) => {
  //   return <SwiperSlide key={elm.id}>{elm.name}</SwiperSlide>;
  // });
  return (
    <div className="App">
      <SwiperCarosel items={userData} slidesPerView={2}>
        <ShapOne />
      </SwiperCarosel>
      <SwiperCarosel items={userData} slidesPerView={4}>
        <ShapeTow />
      </SwiperCarosel>
      <SwiperCarosel items={userData} pagination={true}>
        <ShapOne />
      </SwiperCarosel>
    </div>
  );
}

export default App;
