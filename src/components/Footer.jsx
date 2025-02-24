function Footer() {
    return (
      <footer className="bg-black text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold">Refer & Earn</h2>
          <p className="text-gray-400">Earn rewards by referring your friends!</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-gray-400 hover:text-white">About</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">© 2025 Refer & Earn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
