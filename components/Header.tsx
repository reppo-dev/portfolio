import CustomLink from "./CustomLink";
import ThemeToggler from "./helper/theme.Toggler";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 text-foreground backdrop-blur-2xl">
      <nav
        aria-label="Main navigation"
        className="container relative flex items-center justify-between gap-4 py-3 lg:justify-center"
      >
        <div className="flex items-center gap-5 sm:gap-7">
          <CustomLink
            href="/projects"
            label="Projects"
            className="uppercase font-semibold"
          />

          <CustomLink
            href="/#about"
            label="About"
            className="uppercase font-semibold"
          />
        </div>
        <div className="lg:absolute lg:right-5">
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Header;
