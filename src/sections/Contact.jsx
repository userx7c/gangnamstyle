const ContactWhatsApp = () => {
  return (
    <section className="flex flex-col items-center text-center space-y-6 py-10">
      <h2 className="text-4xl font-bold text-white">Neem Contact Op</h2>
      <p className="text-neutral-300 max-w-md">
        Heb je een vraag, een idee of wil je samenwerken? 
        Je kunt me direct een bericht sturen via WhatsApp.
      </p>

      <a
        href="https://wa.me/31619252532"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl bg-white text-black text-lg font-semibold hover:bg-gray-400 transition-all shadow-lg"
      >
        Stuur een WhatsApp bericht
      </a>
    </section>
  );
};

export default ContactWhatsApp;
