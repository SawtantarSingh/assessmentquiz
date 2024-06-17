function Header() {
  return (
    <header className="flex items-center gap-4 md:gap-8 justify-center font-customFont text-white px-3 py-4 mt-4 ">
      <img src="logo512.png" alt="React logo" className="h-16 md:h-36" />
      <h1 className="font-semibold text-xl md:text-5xl ">The React Quiz</h1>
    </header>
  );
}

export default Header;
