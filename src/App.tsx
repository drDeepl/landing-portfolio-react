import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex flex-row justify-center items-center">
        <p className="text-7xl italic">Я основной текст</p>

        <div>
          <p className="text-5xl text-[#adadb7]">а я второстепенный</p>
        </div>
      </div>
    </>
  );
}

export default App;
