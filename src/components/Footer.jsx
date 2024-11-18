const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Recipe Finder. All Rights Reserved.
        </p>
        <p>
          Created by{" "}
          <a
            href="https://github.com/Elgargati"
            className="text-indigo-400 hover:underline"
          >
            Mohammed El gargati
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
