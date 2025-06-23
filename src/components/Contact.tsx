import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Связаться со мной
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Готов обсудить ваш проект и найти лучшее решение
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-8">
              Давайте работать вместе!
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold">Email</div>
                  <div className="opacity-90">hello@creative-studio.ru</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold">Телефон</div>
                  <div className="opacity-90">+7 (999) 123-45-67</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Icon name="MessageCircle" size={24} />
                </div>
                <div>
                  <div className="text-lg font-semibold">Telegram</div>
                  <div className="opacity-90">@creativestudio</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="bg-white/20 rounded-full p-3 hover:bg-white/30 transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="bg-white/20 rounded-full p-3 hover:bg-white/30 transition-colors"
              >
                <Icon name="Linkedin" size={24} />
              </a>
              <a
                href="#"
                className="bg-white/20 rounded-full p-3 hover:bg-white/30 transition-colors"
              >
                <Icon name="Send" size={24} />
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <textarea
                  placeholder="Расскажите о вашем проекте..."
                  rows={4}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-purple-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
