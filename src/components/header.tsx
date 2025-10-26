import { ColorSelector } from "./color-selector";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  return (
    <>
      <header
        id="header"
        className="sticky top-0 right-0 left-0 z-50 w-full transition-all duration-300 ease-in-out"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 md:px-12">
          <div className="flex items-center gap-1 text-xl">
            <span className="font-mono font-bold">Jan</span>
            <span className="text-stone-700 dark:text-stone-400">Bulling</span>
          </div>
          <div className="ml-auto flex items-center justify-end gap-4">
            <ColorSelector />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <script
        dangerouslySetInnerHTML={{
          __html: `function onScroll() {const header = document.getElementById("header");if (window.scrollY > 0) {header.classList.add("scrolled");} else {header.classList.remove("scrolled");}}document.addEventListener("scroll", onScroll);`,
        }}
      />
    </>
  );
}
