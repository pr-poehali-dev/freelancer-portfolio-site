const Portfolio = () => {
  const projects = [
    {
      category: "Копирайтинг",
      title: "Лендинг для IT-компании",
      description: "Увеличение конверсии на 45% за счет нового текста",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tags: ["Лендинг", "B2B", "Конверсия"],
    },
    {
      category: "Дизайн",
      title: "Брендинг ресторана",
      description: "Полная визуальная айдентика от логотипа до меню",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      tags: ["Брендинг", "Ресторан", "Айдентика"],
    },
    {
      category: "Презентации",
      title: "Питч-дек для стартапа",
      description: "Презентация помогла привлечь $2М инвестиций",
      image:
        "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
      tags: ["Стартап", "Инвестиции", "Питч"],
    },
    {
      category: "Видео",
      title: "Рекламный ролик",
      description: "Анимированный ролик для соцсетей",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      tags: ["Анимация", "Соцсети", "Реклама"],
    },
    {
      category: "Фото",
      title: "Реставрация семейных фото",
      description: "Восстановление фотографий 50-х годов",
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop",
      tags: ["Реставрация", "Семейные", "Винтаж"],
    },
    {
      category: "Дизайн",
      title: "Веб-сайт магазина",
      description: "Современный дизайн интернет-магазина",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["Веб-дизайн", "E-commerce", "UX/UI"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Портфолио
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Примеры работ в разных направлениях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
