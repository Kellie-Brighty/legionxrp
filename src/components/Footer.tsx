import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-legion-black py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        {/* Available Platforms */}
        <div>
          <h3 className="text-2xl font-cinzel text-legion-gold mb-8 border-b border-legion-gold/20 pb-2">
            Available Platforms
          </h3>
          <ul className="space-y-4">
            <li className="text-gray-300 hover:text-legion-gold transition-colors">
              MEXC
            </li>
            <li className="text-gray-300 hover:text-legion-gold transition-colors">
              CoinEx
            </li>
            <li className="text-gray-300 hover:text-legion-gold transition-colors">
              HiBT
            </li>
            <li className="text-gray-300 hover:text-legion-gold transition-colors">
              XRP Sanji Bot
            </li>
            <li className="text-gray-300 hover:text-legion-gold transition-colors">
              Magnetic
            </li>
            <li className="text-gray-300 hover:text-legion-gold transition-colors">
              FirstLedger
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <Logo className="w-24 h-24 mb-4" />
          <span className="text-xl font-cinzel text-legion-gold">LEGION</span>
        </div>

        {/* Community */}
        <div className="text-right">
          <h3 className="text-2xl font-cinzel text-legion-gold mb-8 border-b border-legion-gold/20 pb-2">
            Community
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href="https://t.me/LEGIONonXRP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-legion-gold transition-colors"
              >
                Join LEGION on Telegram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/LEGIONXRP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-legion-gold transition-colors"
              >
                Follow us on X
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
