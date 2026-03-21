const HeaderButton = ({ button_name, path }) => {
  return (
    <a href={path}>
      <button>{button_name}</button>
    </a>
  );
};

export default HeaderButton;
