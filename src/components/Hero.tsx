import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Креативные
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {" "}
              решения
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Коммерческий копирайтинг • Дизайн • Презентации • Видео •
            Реконструкция фото
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="PenTool" size={20} className="inline mr-2" />
              Копирайтинг
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Palette" size={20} className="inline mr-2" />
              Дизайн
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Presentation" size={20} className="inline mr-2" />
              Презентации
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Video" size={20} className="inline mr-2" />
              Видео
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
              <Icon name="Camera" size={20} className="inline mr-2" />
              Фото
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Посмотреть работы
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all"
            >
              Связаться со мной
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
