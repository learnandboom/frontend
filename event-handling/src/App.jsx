function App() {
  function greet(name) {
    alert(`hello ${name}`);
  }
  return (
    <>
      <button
        onClick={() => {
          alert("you clicked"); // by function inside
        }}
      >
        click me
      </button>
    </>
  );
}

export default App;
