
export const checkError = (error: any, setMessage: any) => {
  const errorCode = error.response?.data?.code;
  const errorMesssage = error.response?.data?.message;

  if (!errorCode) {
    return setMessage({
      message: "Щось пішло не так. Спробуйте ще раз або зверніться до підтримки.",
      message_eng: "Something went wrong. Please try again or contact support.",
    });
  }

  switch (errorCode) {
    case "E1001":
      setMessage({
        message: "Помилка генерації токену. Спробуйте увійти знову.",
        message_eng: "Token generation failed. Please try to log in again.",
      });
      break;
    case "E1002":
      setMessage({
        message: "Ім'я адміна має містити лише літери (наприклад, Іван Петров).",
        message_eng: "Admin name should contain only letters (e.g., John Doe).",
      });
      break;
    case "E1003":
      setMessage({
        message: "Пароль занадто простий. Додайте великі літери, цифри або символи.",
        message_eng: "Password is too weak. Add uppercase letters, numbers, or symbols.",
      });
      break;
    case "E1004":
      setMessage({
        message: "Ваш сеанс закінчився. Будь ласка, увійдіть знову.",
        message_eng: "Your session has expired. Please log in again.",
      });
      break;
    case "E1005":
      setMessage({
        message: "Не вистачає заголовка для доступу. Оновіть сторінку (Ctrl+F5).",
        message_eng: "Missing access header. Please refresh the page (Ctrl+F5).",
      });
      break;

    // E2*** - База даних
    case "E2001":
      setMessage({
        message: "Сервер тимчасово недоступний. Спробуйте через 5 хвилин.",
        message_eng: "Server is temporarily unavailable. Try again in 5 minutes.",
      });
      break;

    // E3*** - Валідація даних
    case "E3001":
      setMessage({
        message: "Невірний формат телефону. Введіть у форматі +380123456789.",
        message_eng: "Invalid phone format. Use +380123456789.",
      });
      break;
    case "E3002":
      setMessage({
        message: "Email має містити @ (наприклад, user@example.com).",
        message_eng: "Email must contain @ (e.g., user@example.com).",
      });
      break;
    case "E3003":
      setMessage({
        message: "Цей Telegram (@нік) вже використовується. Спробуйте інший.",
        message_eng: "This Telegram (@nickname) is already taken. Try another one.",
      });
      break;
    case "E3004":
      setMessage({
        message: "Ім'я не може містити цифри або символи (@, #, тощо).",
        message_eng: "Name cannot contain numbers or symbols (@, #, etc.).",
      });
      break;
    case "E3005":
      setMessage({
        message: "Пароль має бути 8+ символів (літери, цифри, !@# тощо).",
        message_eng: "Password must be 8+ chars (letters, numbers, !@# etc.).",
      });
      break;

    // E4*** - Кодування/безпека
    case "E4001":
      setMessage({
        message: "Помилка обробки даних. Спробуйте інший файл або текст.",
        message_eng: "Data processing error. Try a different file or text.",
      });
      break;
    case "E4002":
      setMessage({
        message: "Невірні дані для декодування. Перевірте вхідні дані.",
        message_eng: "Invalid data for decoding. Check your input.",
      });
      break;
    case "E4003":
      setMessage({
        message: "Невірний пароль. Спробуйте ще раз або відновіть його.",
        message_eng: "Incorrect password. Try again or reset it.",
      });
      break;
    case "E4004":
      setMessage({
        message: "Помилка створення паролю. Спробуйте інший пароль.",
        message_eng: "Password creation failed. Try a different password.",
      });
      break;

    // E5*** - Користувачі
    case "E5001":
      setMessage({
        message: "Не вдалося завантажити список користувачів. Спробуйте пізніше.",
        message_eng: "Failed to load users. Please try again later.",
      });
      break;
    case "E5002":
      setMessage({
        message: "Користувача не знайдено. Перевірте ID або ім'я.",
        message_eng: "User not found. Check the ID or username.",
      });
      break;
    case "E5003":
      setMessage({
        message: "Помилка пошуку за університетом. Введіть повну назву.",
        message_eng: "University search error. Enter the full name.",
      });
      break;
    case "E5004":
      setMessage({
        message: "Команду не знайдено. Перевірте назву або ID.",
        message_eng: "Team not found. Check the name or ID.",
      });
      break;
    case "E5005":
      setMessage({
        message: "Не вдалося оновити дані. Перевірте введені значення.",
        message_eng: "Update failed. Check your input values.",
      });
      break;
    case "E5006":
      setMessage({
        message: "Цей email або телефон вже зареєстровані. Спробуйте ввійти.",
        message_eng: "This email or phone is already registered. Try logging in.",
      });
      break;
    case "E5007":
      setMessage({
        message: "Не вдалося видалити акаунт. Зверніться до підтримки.",
        message_eng: "Account deletion failed. Contact support.",
      });
      break;

    // E6*** - Університети
    case "E6001":
      setMessage({
        message: "Не вдалося видалити університет. Він, можливо, використовується.",
        message_eng: "Failed to delete university. It might be in use.",
      });
      break;
    case "E6002":
      setMessage({
        message: "Помилка імпорту університетів. Перевірте формат даних.",
        message_eng: "University import error. Check the data format.",
      });
      break;
    case "E6003":
      setMessage({
        message: "Ця назва університету вже є в системі. Спробуйте іншу.",
        message_eng: "This university name already exists. Try a different one.",
      });
      break;
    case "E6004":
      setMessage({
        message: "Не вдалося оновити університет. Перевірте введені дані.",
        message_eng: "Failed to update university. Check your input.",
      });
      break;
    case "E6005":
      setMessage({
        message: "Не вдалося завантажити список університетів. Спробуйте пізніше.",
        message_eng: "Failed to load universities. Please try again later.",
      });
      break;
    case "E6006":
      setMessage({
        message: "Університет не знайдено. Перевірте ID або назву.",
        message_eng: "University not found. Check the ID or name.",
      });
      break;

    // E7*** - Команди
    case "E7001":
      setMessage({
        message: "Не вдалося створити команду. Назва, можливо, зайнята.",
        message_eng: "Failed to create a team. The name might be taken.",
      });
      break;
    case "E7002":
      setMessage({
        message: "Не вдалося завантажити команди. Спробуйте оновити сторінку.",
        message_eng: "Failed to load teams. Please refresh the page.",
      });
      break;
    case "E7003":
      setMessage({
        message: "Команду не знайдено. Перевірте ID або назву.",
        message_eng: "Team not found. Check the ID or name.",
      });
      break;
    case "E7004":
      setMessage({
        message: "Не вдалося оновити команду. Перевірте склад учасників.",
        message_eng: "Failed to update the team. Check the member list.",
      });
      break;
    case "E7005":
      setMessage({
        message: "У команді має бути від 2 до 5 учасників. Додайте або видаліть когось.",
        message_eng: "A team must have 2-5 members. Add or remove someone.",
      });
      break;
    case "E7006":
      setMessage({
        message: "Не вдалося видалити команду. Вона, можливо, активна в турнірі.",
        message_eng: "Failed to delete the team. It might be in a tournament.",
      });
      break;
    case "E7006":
      setMessage({
        message: "Не вдалося видалити команду. Вона, можливо, активна в турнірі.",
        message_eng: "Failed to delete the team. It might be in a tournament.",
      });
      break;
    case "E70010":
      {
        const match = errorMesssage.match(/index user (\d+)/);
        const indexUser = match ? parseInt(match[1], 10) : null;

        if (indexUser === -1) {
          setMessage({
            message: "Не вдалося створити команду. Телефон командира вже використовується.",
            message_eng: "Failed to insert team because of duplicate phone of the commander.",
          });
        } else if (indexUser != null) {
          setMessage({
            message: `Не вдалося створити команду. Телефон учасника №${indexUser + 1} вже використовується.`,
            message_eng: `Failed to insert team because of duplicate phone of participant #${indexUser + 1}.`,
          });
        } else {
          setMessage({
            message: "Не вдалося створити команду через дублікат телефону.",
            message_eng: "Failed to insert team because of duplicate phone.",
          });
        }
      }
      break;
    case "E70011":
      {
        const match = errorMesssage.message?.match(/index user (-?\d+)/);
        const indexUser = match ? parseInt(match[1], 10) : null;

        if (indexUser === -1) {
          setMessage({
            message: "Не вдалося створити команду. Нікнейм командира вже використовується.",
            message_eng: "Failed to insert team because of duplicate nickname of the commander.",
          });
        } else if (indexUser !== null) {
          setMessage({
            message: `Не вдалося створити команду. Нікнейм учасника №${indexUser + 1} вже використовується.`,
            message_eng: `Failed to insert team because of duplicate nickname of participant #${indexUser + 1}.`,
          });
        } else {
          setMessage({
            message: "Не вдалося створити команду через дублікат нікнейму.",
            message_eng: "Failed to insert team because of duplicate nickname.",
          });
        }
      }
      break;

    default:
      setMessage({
        message: `Невідома помилка (код: ${errorCode}). Зверніться до підтримки.`,
        message_eng: `Unknown error (code: ${errorCode}). Contact support.`,
      });
  }
};
