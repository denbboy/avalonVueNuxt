export default defineEventHandler(async (event) => {
  try {
    const {
      name,
      phone,
      email,
      form,
      file,
      message,
      method,
      url,
      vanancyTitle,
    } = await readBody(event);

    const formTypes = {
      "know-more": 'Форма "Хотите узнать больше?"',
      message: "Запрос с выплывающей модалки",
      footer: "Запрос с формы в подвале",
      vacancy: "Запрос на вакансию",
      presentation: "Запрос на презентацию",
    };

    const note =
      `Страница: ${url}\n\n` +
      (form && `Форма: ${formTypes[form]}`) +
      (vanancyTitle ? `\n\nВакансия: ${vanancyTitle}` : "");

    const rawBody = {
      action: "partner-custom-form",
      token: "BnYxulkF_XC5Aq7Re9oO80vbIu-ZblVbALCDNDdAJE0",
      partner_id: 19056,
      name: name ?? "No name",
      phone: phone ?? "No phone",
      email: email ?? "No email",
      lang: "ua",
      note: note ?? "Запит з форми контактів",
      adv_id: "RedLeads",
    };

    const formBody = new URLSearchParams(rawBody).toString();

    // -=-=-=-=-=-=-=- Отправка в админку -=-=-=-=-=-=-=-

    async function formToAdmin(url, body) {
      const resAdmin = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      const result = await resAdmin.json();

      return result;
    }

    const apiLink = "https://api.avalonbali.com/flows/trigger/";

    if (form === "footer") {
      formToAdmin(
        `${apiLink}482f88ba-57b0-4284-8d9a-af9342d0c9ee`,
        JSON.stringify({
          name: name,
          phone: phone,
        })
      );
    } else if (form === "vacancy") {
      formToAdmin(
        `${apiLink}78957f27-5d57-49a2-bdfe-93be73e7e487`,
        JSON.stringify({
          name: name,
          phone: phone,
          file: file,
          email: email,
          message: message,
        })
      );
    } else if (form === "presentation") {
      formToAdmin(
        `${apiLink}9f9a3c27-6dcc-45b9-9bef-b5bf3f3a0330`,
        JSON.stringify({
          method: method,
          phone: phone,
        })
      );
    } else {
      formToAdmin(
        `${apiLink}482f88ba-57b0-4284-8d9a-af9342d0c9ee`,
        JSON.stringify({
          name: name,
          phone: phone,
          file: file,
          email: email,
          message: message,
          method: method,
          note: note,
        })
      );
    }

    // -=-=-=-=-=-=-=- Отправка в админку -=-=-=-=-=-=-=-

    // -=-=-=-=-=-=-=--=-=-=-=-=-=-=--=-=-=-=-=-=-=-

    // -=-=-=-=-=-=-=- Отправка в CRM -=-=-=-=-=-=-=-

    const res = await fetch("https://crm.g-plus.app/api/actions", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    // -=-=-=-=-=-=-=- Отправка в CRM -=-=-=-=-=-=-=-

    return {
      success: true,
      message: "Форма надіслана успішно",
      data: res,
    };
  } catch (e) {
    console.error("Ошибка при отправке формы:", e);
    return {
      success: false,
      message: "Помилка при відправленні форми",
    };
  }
});
