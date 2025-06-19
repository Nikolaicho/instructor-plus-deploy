"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Users, Calendar, Award, ArrowRight } from "lucide-react";
import { Button, Image } from "@nextui-org/react";
import drivingImage from "./driving.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90"></div>

        {/* Hero image */}
        <div className="absolute inset-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              InstructorPlus
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
              Завършена платформа за автошколи и инструктори за управление на
              часове и ученици.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                color="primary"
                variant="shadow"
                endContent={<ChevronRight />}
                className="bg-white text-blue-600 font-semibold text-lg"
                onPress={() => navigate("/logIn")}
              >
                Влез
              </Button>
              <Button
                size="lg"
                color="primary"
                variant="flat"
                endContent={<ChevronRight />}
                className="bg-blue-700 text-white font-semibold text-lg"
                onPress={() => navigate("/register")}
              >
                Регистрирай се
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Защо да изберете InstructorPlus?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Нашата платформа предлага всичко от което вашата автошкола се
              нуждае
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Насрочване на часове
              </h3>
              <p className="text-gray-600">
                Лесно управлявайте и насрочвайте уроци по шофиране за вашите
                ученици с нашия интуитивен интерфейс.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Менажиране на профилите на курсистите
              </h3>
              <p className="text-gray-600">
                Следете всички ваши ученици и техния напредък в една
                централизирана система.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Документация
              </h3>
              <p className="text-gray-600">
                Управлявайте документите и резултатите от изпитите с нашата
                система за управление на документи.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonial/Image Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Направено за автошколи и инструктори.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Нашата платформа е специално създадена, за да отговори на
                уникалните предизвикателства, пред които са изправени
                автошколите и инструкторите. От графици до изпити – ние сме до
                вас.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Присъединете се, за да оптимизирате своите операции и да
                предоставяте по-добро обслужване на своите ученици.
              </p>
              <Button
                color="primary"
                endContent={<ArrowRight />}
                size="lg"
                onPress={() => navigate("/register")}
              >
                Започни сега
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img src={drivingImage} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">InstructorPlus</h3>
              <p className="text-gray-400">
                Завършената платформа за автошколи и инструктори.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Функции</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Насрочване на часове</li>
                <li>Управление на ученици</li>
                <li>Управление на документи</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ресурси</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Документация</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} InstructorPlus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
