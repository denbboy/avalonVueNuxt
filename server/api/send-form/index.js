
export default defineEventHandler(async (event) => {
  try {

    const { name, phone, email } = await readBody(event);

    const rawBody = {
      action: "partner-custom-form",
      token: "BnYxulkF_XC5Aq7Re9oO80vbIu-ZblVbALCDNDdAJE0",
      partner_id: 19056,
      name: name,
      phone: phone,
      email: email,
      lang: "ua",
      note: "Запит з форми контактів",
      adv_id: "123123123",
    };

    const formBody = new URLSearchParams(rawBody).toString();

    const res = await fetch("https://crm.g-plus.app/api/actions", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody
    });

    console.log(await res.json());
    
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
