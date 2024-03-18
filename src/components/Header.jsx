import Title from "./Title.jsx";

const Header = (props) => {
  return (
    <header>
      <Title title={props.title} />
    </header>
  );
};

export default Header;
