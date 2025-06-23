const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Обо мне
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Привет! Меня зовут Анна, и я креативный фрилансер с 5-летним
              опытом работы. Специализируюсь на создании продающих текстов,
              ярких дизайнов и эффективных презентаций для бизнеса.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              За время работы помогла более чем 200 клиентам увеличить продажи и
              создать запоминающийся бренд. Работаю как с малым бизнесом, так и
              с крупными компаниями.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Завершенных проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-gray-600">Успешных проектов</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c04e3776?w=400&h=500&fit=crop"
                alt="Анна - креативный фрилансер"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-purple-600">⭐ 4.9</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
