export default function Footer() {
  return (
    <footer className="bg-background z-50 overflow-hidden border-t py-5 whitespace-nowrap">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-3 px-4 sm:grid-cols-3 md:px-12">
        <a href="/">
          <div className="flex items-center justify-center gap-1 text-xl sm:justify-start">
            <span className="font-mono font-bold">Jan</span>
            <span className="text-stone-700 dark:text-stone-400">Bulling</span>
          </div>
        </a>

        <div className="flex items-center justify-center gap-4">
          <a href="/imprint" className="hover:underline">
            Imprint
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
        </div>

        <div className="flex justify-center text-sm sm:justify-end">
          &#169; {new Date().getFullYear()} | All rights reserved
        </div>
      </div>
    </footer>
  );
}
