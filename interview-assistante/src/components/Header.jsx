

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
    <h1 className="font-bold">
      Interview<span className=" text-blue-400">Assistante</span>
    </h1>
    <button className="flex items-center gap-4 specialBtn px-4 py-2 rounded-lg text-blue-400">
      <p>New</p>
      <i className="fa-solid fa-plus"></i>
    </button>
  </header>
  );
};

export default Header