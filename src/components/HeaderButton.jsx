const HeaderButton = ({ button_name, path }) => {
  return (
    <a href={path}>
      <button className="transition-all duration-300 hover:scale-120 pl-3 pr-2 py-1 lg:pl-0">{button_name}</button>
    </a>
  );
};

export default HeaderButton;
