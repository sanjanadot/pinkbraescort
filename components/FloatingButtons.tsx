export default function FloatingButtons() {
  return (
    <>
      {/* Left floating buttons */}
      <div className="fixed bottom-6 left-6 z-50 print:hidden flex flex-col gap-3">
        <a
          href="https://api.whatsapp.com/send?phone=919653203658"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14"
          title="WhatsApp"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-xl" aria-hidden="true"></i>
        </a>
        <a
          href="https://t.me/+919653203658"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14"
          title="Telegram"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Chat on Telegram"
        >
          <i className="fab fa-telegram text-xl" aria-hidden="true"></i>
        </a>
        <a
          href="https://arratai.com/919653203658"
          className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14"
          title="Arratai"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Chat on Arratai"
        >
          <i className="fas fa-comments text-xl" aria-hidden="true"></i>
        </a>
      </div>

      {/* Right floating call button */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden">
        <a
          href="tel:+919653203658"
          className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14"
          title="Call Now"
          aria-label="Call us now"
        >
          <i className="fas fa-phone text-xl" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
}
