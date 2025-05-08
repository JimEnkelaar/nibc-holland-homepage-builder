const Footer = () => {
  // Footer is not visible in the current NIBC landing page screenshot
  // We keep it minimal for now
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-8 py-6">
        <div className="text-center text-gray-500 text-sm font-montserrat">
          © {new Date().getFullYear()} NIBC Bank N.V.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
