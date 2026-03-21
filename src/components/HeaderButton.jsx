const HeaderButton = ({ button_name, path }) => {
  return (
    <a href={path}>
      <button className="transition-all duration-300 hover:scale-120">{button_name}</button>
    </a>
  );
};

export default HeaderButton;
