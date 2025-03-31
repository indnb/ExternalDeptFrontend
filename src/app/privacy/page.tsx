"use client"
import { useLanguageStore } from "@/_store/LanguageChanger";
import { Button } from "@/Atoms/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { language } = useLanguageStore()
  const router = useRouter()
  const handlerReturn = () => {
    router.push("/")
  }

  if (language == "ua") {
    return (
      <div className="min-h-screen  text-gray-900 flex items-center justify-center w-screen px-4">
        <div className="max-w-[90vw] w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw] bg-white rounded-lg shadow-lg p-6 sm:p-8 mt-[150px] max-lg:mt-[100px] mb-[30px] sm:mb-[50px]">
          <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">Політика конфіденційності</h1>
          <p className="text-gray-700 mb-4 text-center sm:text-left">Дата набуття чинності: 03.30</p>

          <p className="mb-4 text-center sm:text-left">
            Дякуємо за те, що користуєтеся нашим сайтом для реєстрації команд і учасників
            на хакатон <span className="font-semibold">TechForAll</span>. Ваша конфіденційність є для нас важливою.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Які дані ми збираємо</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Під час реєстрації команди:</strong> Назва команди, категорія, нікнейм лідера в Telegram, пароль.</li>
            <li><strong>Під час реєстрації учасників:</strong> Ім&apos;я, номер телефону, нікнейм у Telegram, навчальний заклад, назва команди, пароль.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. Як ми використовуємо ваші дані</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Реєстрація команд і учасників для участі у хакатоні.</li>
            <li>Організація та проведення хакатону.</li>
            <li>Забезпечення безпеки та перевірки даних.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Обробка даних і передача третім особам</h2>
          <p className="mb-4">Ваші персональні дані не передаються третім особам, якщо цього не вимагає законодавство України.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Безпека даних</h2>
          <p className="mb-4">Ми впроваджуємо відповідні заходи безпеки, але абсолютна безпека не може бути гарантована.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Ваші права</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Доступ до ваших персональних даних.</li>
            <li>Внесення змін до ваших даних.</li>
            <li>Вимагати видалення ваших даних після хакатону.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Файли cookie та аналітика</h2>
          <p className="mb-4">Наш сайт не використовує файли cookie або інструменти аналітики.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Контактна інформація</h2>
          <p className="mb-4">Електронна пошта: externaldept456@gmail.com</p>
          <p className="mb-4">Телефон: 0635260106</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">8. Зміни до політики конфіденційності</h2>
          <p className="mb-4">Ми залишаємо за собою право змінювати цю політику. Оновлення будуть публікуватися на цій сторінці.</p>

          <p className="mt-6 font-semibold text-center sm:text-left">Дякуємо за довіру та бажаємо успіхів у хакатоні!</p>
          <div className="w-[100%] mt-[30px] flex justify-center items-center">
            <Button
              callback={handlerReturn}
              title={
                "Повернутися на головну сторінку"
              }
              colorButton="blue"
            />
          </div>


        </div>
      </div>
    )
  } else {
    return (
      <div className="min-h-screen  text-gray-900 flex items-center justify-center w-screen px-4">
        <div className="max-w-[90vw] w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw] bg-white rounded-lg shadow-lg p-6 sm:p-8 mt-[150px] max-lg:mt-[100px] mb-[30px] sm:mb-[50px]">
          <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">Privacy Policy</h1>
          <p className="text-gray-700 mb-4 text-center sm:text-left">Effective Date: 03.30</p>

          <p className="mb-4 text-center sm:text-left">
            Thank you for using our website to register teams and participants for the hackathon
            <span className="font-semibold">TechForAll</span>. Your privacy is important to us.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. What Data We Collect</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>During team registration:</strong> Team name, category, leader&apos;s Telegram nickname, password.</li>
            <li><strong>During participant registration:</strong> Name, phone number, Telegram nickname, educational institution, team name, password.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Registering teams and participants for the hackathon.</li>
            <li>Organizing and conducting the hackathon.</li>
            <li>Ensuring security and verifying data.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Processing and Third-Party Sharing</h2>
          <p className="mb-4">Your personal data is not shared with third parties unless required by the laws of Ukraine.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
          <p className="mb-4">We implement appropriate security measures, but absolute security cannot be guaranteed.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Access your personal data.</li>
            <li>Modify your data.</li>
            <li>Request the deletion of your data after the hackathon.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies and Analytics</h2>
          <p className="mb-4">Our website does not use cookies or analytics tools.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Information</h2>
          <p className="mb-4">Email: externaldept456@gmail.com</p>
          <p className="mb-4">Phone: 0635260106</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to the Privacy Policy</h2>
          <p className="mb-4">We reserve the right to change this policy. Updates will be posted on this page.</p>

          <p className="mt-6 font-semibold text-center sm:text-left">Thank you for your trust, and good luck in the hackathon!</p>
          <div className="w-[100%] mt-[30px] flex justify-center items-center">
            <Button
              callback={handlerReturn}
              title={
                "Return to the main page"
              }
              colorButton="blue"
            />
          </div>

        </div>
      </div>
    );
  }
}
