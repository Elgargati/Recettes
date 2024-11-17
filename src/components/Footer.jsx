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
            href="https://github.com/your-username"
            className="text-indigo-400 hover:underline"
          >
            Mohammed El Gargati
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
