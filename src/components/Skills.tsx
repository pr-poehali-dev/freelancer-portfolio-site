const Skills = () => {
  const skillCategories = [
    {
      title: "Копирайтинг",
      skills: [
        { name: "Продающие тексты", level: 95 },
        { name: "Email-маркетинг", level: 90 },
        { name: "Контент-стратегия", level: 85 },
        { name: "SEO-копирайтинг", level: 80 },
      ],
    },
    {
      title: "Дизайн",
      skills: [
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Веб-дизайн", level: 85 },
        { name: "Брендинг", level: 88 },
        { name: "UI/UX дизайн", level: 82 },
      ],
    },
    {
      title: "Мультимедиа",
      skills: [
        { name: "Видеомонтаж", level: 85 },
        { name: "Анимация", level: 80 },
        { name: "Фотообработка", level: 92 },
        { name: "Презентации", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Навыки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные компетенции и инструменты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-600 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
