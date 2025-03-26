
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 mt-[100px]">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Політика конфіденційності</h1>
        <p className="text-gray-700 mb-4">Дата набуття чинності: [вкажіть дату]</p>
        <p className="mb-4">
          Дякуємо за те, що користуєтеся нашим сайтом для реєстрації команд і учасників
          на хакатон <span className="font-semibold">[назва хакатону]</span>. Ваша конфіденційність є для нас важливою.
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
        <p className="mb-4">Електронна пошта: [вкажіть адресу]</p>
        <p className="mb-4">Телефон: [вкажіть номер]</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Зміни до політики конфіденційності</h2>
        <p className="mb-4">Ми залишаємо за собою право змінювати цю політику. Оновлення будуть публікуватися на цій сторінці.</p>

        <p className="mt-6 font-semibold">Дякуємо за довіру та бажаємо успіхів у хакатоні!</p>
      </div>
    </div>
  );
}


