import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-600">
            Creative Studio
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О себе
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Навыки
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a
              href="#home"
              className="block text-gray-700 hover:text-purple-600"
            >
              Главная
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-purple-600"
            >
              О себе
            </a>
            <a
              href="#portfolio"
              className="block text-gray-700 hover:text-purple-600"
            >
              Портфолио
            </a>
            <a
              href="#skills"
              className="block text-gray-700 hover:text-purple-600"
            >
              Навыки
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-purple-600"
            >
              Контакты
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
