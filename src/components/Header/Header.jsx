import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="headerContainer__title">
        <span className="firstWord">My</span> Title
      </h1>
      <h2 className="headerContainer__subtitle">
        Here is my cool subtitle. This is something that everyone likes
      </h2>
    </div>
  );
};
export default Header;
