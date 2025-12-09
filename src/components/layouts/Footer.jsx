const Footer = () => {
  return (
    <footer className="mt-24 flex flex-col items-center justify-center text-center text-gray-500 space-y-2 pb-6">
      <p className="text-sm">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <p className="text-xs text-gray-400">Designed & Developed by 정찬원</p>
      <p className="text-xs text-gray-400">Contact: jcw0522@gachon.ac.kr</p>
    </footer>
  );
};

export default Footer;
