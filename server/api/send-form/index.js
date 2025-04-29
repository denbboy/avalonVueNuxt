import { createDirectus } from "@directus/sdk";
import { API_LINK } from "~/utils/constants";

const directus = createDirectus(API_LINK);

export default defineEventHandler(async (event) => {
  try {
    // Получаем данные из тела запроса
    const { name, phone, email, note } = await readBody(event);

    // Создаем объект данных для отправки в Directus
    const formData = {
      name,
      phone,
      email,
      note,
      status: "new", // Статус формы (можно изменить по своему усмотрению)
      created_at: new Date().toISOString(),
    };

    // Отправляем данные в нужную коллекцию
    const response = await directus.items("form_submissions").createOne(formData);

    return {
      success: true,
      message: "Форма надіслана успішно",
      data: response
    };
  } catch (e) {
    console.error("Ошибка при отправке формы:", e);
    return {
      success: false,
      message: "Помилка при відправленні форми"
    };
  }
});
