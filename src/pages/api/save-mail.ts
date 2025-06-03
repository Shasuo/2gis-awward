export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const formData = req.body;

      const messageText = `
Имя и фамилия: ${formData.name}
Электронная почта: ${formData.email}
Город: ${formData.city}
Вопрос: ${formData.question}
      `.trim();

      const webhookUrl = process.env.WEB_HOOK_URL;
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: messageText, username: "winners_2025" }),
        });

        if (!response.ok) {
          console.error("Не удалось отправить данные:", {
            timestamp: new Date().toISOString(),
            data: formData,
          });

          throw new Error(
            `Ошибка при отправке на вебхук: ${response.statusText}`
          );
        }
        res.status(200).json({ message: "Сообщение успешно отправлено" });
      } else {
        console.error("Не удалось отправить данные, нет веб хука:", {
          timestamp: new Date().toISOString(),
          data: formData,
        });
      }
    } catch (error: any) {
      console.error("Критическая ошибка при обработке запроса:", error.message);
      res.status(500).json({ error: "Не удалось отправить сообщение" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Метод не поддерживается" });
  }
}
