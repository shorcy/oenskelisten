declare global {
  interface Window {
    Cookiebot: {
      show(): () => void;
    }
  }
}

export default function GlobalFooter() {
  const toggleConsent = () => {
    window.Cookiebot.show();
  };

  return (
    <footer className="bg-white" aria-labelledby="footer">
      <h2 id="footer" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-12 flex border-t border-gray-200 pt-8">
          <p className="flex-1 text-base text-gray-600">
            &copy; {new Date().getFullYear()} Ønskelisten.dk. All rights
            reserved.
          </p>
          <button className="text-base text-gray-600" onClick={toggleConsent}>
            Cookie indstillinger
          </button>
        </div>
      </div>
    </footer>
  );
}
