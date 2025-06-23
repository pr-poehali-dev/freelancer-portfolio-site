import Icon from "@/components/ui/icon";

const Process = () => {
  const steps = [
    {
      icon: "MessageCircle",
      title: "Обсуждение",
      description:
        "Детально разбираем ваши задачи, цели и требования к проекту",
    },
    {
      icon: "FileText",
      title: "Техническое задание",
      description: "Создаю подробное ТЗ с этапами работы и сроками выполнения",
    },
    {
      icon: "Palette",
      title: "Создание",
      description:
        "Воплощаю идеи в жизнь, регулярно показываю промежуточные результаты",
    },
    {
      icon: "CheckCircle",
      title: "Сдача проекта",
      description:
        "Финальная проверка, внесение правок и передача готового результата",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Как я работаю
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой и прозрачный процесс от идеи до результата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={step.icon} size={32} className="text-white" />
              </div>

              <div className="absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 hidden lg:block">
                {index < steps.length - 1 && (
                  <div className="w-full h-full bg-gradient-to-r from-purple-300 to-blue-300"></div>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
