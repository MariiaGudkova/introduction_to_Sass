import "./App.css";

function App() {
  return (
    <div className="grid">
      <main className="grid__main">
        <h1>Знакомство с Sass</h1>
        <h3>—ฅ/ᐠ. ̫ .ᐟ\ฅ —</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
      <aside className="grid__sidebar">
        <div className="grid__widget grid__widget_green">
          <h2>Больше информации</h2>
          <h3>—ฅ/ᐠ. ̫ .ᐟ\ฅ —</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="grid__widget grid__widget_red">
          <h2>Еще больше информации</h2>
          <h3>—ฅ/ᐠ. ̫ .ᐟ\ฅ —</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid__widget">
          <h2 className="yellow">Еще-еще больше информации</h2>
          <h3>—ฅ/ᐠ. ̫ .ᐟ\ฅ —</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </aside>
    </div>
  );
}

export default App;
