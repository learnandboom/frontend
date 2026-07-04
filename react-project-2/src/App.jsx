import UserCard from "./components/UserCard";
function App() {
  return (
    <>
      <div className="container">
        <UserCard
          name="aman"
          diss="hi this is aman"
          style={{ "border-radius": "4px" }}
        />
        <UserCard
          name="kabir"
          diss="hii this is kabir"
          style={{ "border-radius": "4px" }}
        />
        <UserCard
          name="rana"
          diss="hi this is rana"
          style={{ "border-radius": "4px" }}
        />
      </div>
    </>
  );
}

export default App;
