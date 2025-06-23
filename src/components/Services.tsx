import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "PenTool",
      title: "Коммерческий копирайтинг",
      description:
        "Продающие тексты, которые конвертируют посетителей в клиентов. Лендинги, email-рассылки, социальные сети.",
      features: ["Лендинги", "Email-маркетинг", "Соцсети", "Реклама"],
    },
    {
      icon: "Palette",
      title: "Дизайн",
      description:
        "Визуальная айдентика, веб-дизайн, печатная продукция. Создаю образы, которые запоминаются.",
      features: ["Логотипы", "Веб-дизайн", "Брендинг", "Печать"],
    },
    {
      icon: "Presentation",
      title: "Презентации",
      description:
        "Профессиональные презентации для бизнеса. От концепции до финальной подачи материала.",
      features: ["Бизнес-презентации", "Инфографика", "Питч-деки", "Отчеты"],
    },
    {
      icon: "Video",
      title: "Видеопроизводство",
      description:
        "Создание видеоконтента: от рекламных роликов до образовательных материалов.",
      features: ["Реклама", "Обучение", "Анимация", "Монтаж"],
    },
    {
      icon: "Camera",
      title: "Реконструкция фото",
      description:
        "Восстановление старых фотографий, ретушь, цветокоррекция. Возвращаю жизнь воспоминаниям.",
      features: ["Реставрация", "Ретушь", "Цветокоррекция", "Коллажи"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Чем я занимаюсь
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр креативных услуг для развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon name={service.icon} size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-white px-3 py-1 rounded-full text-sm text-purple-600 font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
