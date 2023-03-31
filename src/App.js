import HomePage from "./components/HomePage";
import logo from "./assets/netflix_logo.png";
import avatar from "./assets/avatar.png";
import "./scss/style.scss";
// import AccountPage from "./components/AccountPage";
// import SettingsPage from "./components/SettingsPage";

function App() {
  return (
    <>
      <HomePage netflixLogo={logo} userAvatar={avatar} />
      {/* <AccountPage netflixLogo={logo} userAvatar={avatar} />
      <SettingsPage netflixLogo={logo} userAvatar={avatar} /> */}
    </>
  );
}

export default App;
