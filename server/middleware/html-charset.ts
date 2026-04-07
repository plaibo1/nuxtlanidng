import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  // Устанавливаем правильный Content-Type для HTML-ответов
  const originalEnd = event.node.res.end.bind(event.node.res);

  event.node.res.end = function (...args: any[]) {
    const contentType = event.node.res.getHeader("content-type");
    if (typeof contentType === "string" && contentType.includes("text/html")) {
      event.node.res.setHeader("content-type", "text/html;charset=utf-8");
    }
    return originalEnd(...args);
  };
});
