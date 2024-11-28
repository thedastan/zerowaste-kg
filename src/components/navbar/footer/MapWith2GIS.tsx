import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

const MapWith2GIS: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
    script.async = true;

    script.onload = () => {
      const checkDG = setInterval(() => {
        if (window.DG) {
          clearInterval(checkDG); // Останавливаем интервал, когда DG доступен

          const existingMap = document.getElementById("map");
          if (existingMap && !existingMap.getAttribute("data-map-initialized")) {
            const map = window.DG.map("map", {
              center: [42.87918, 74.56607], // Новые координаты
              zoom: 13,
            });

            window.DG.marker([42.87918, 74.56607]) // Маркер с новыми координатами
              .addTo(map)
              .bindPopup("Zero Waste ​Локальные очистные сооружения<br>Садовая улица, 79<br>Маевка с., Бишкек")
              .openPopup();

            // Устанавливаем флаг, чтобы указать, что карта инициализирована
            existingMap.setAttribute("data-map-initialized", "true");
          }
        }
      }, 100); // Проверяем каждые 100 мс

      // Таймаут на случай, если API не загрузится
      setTimeout(() => {
        clearInterval(checkDG);
        console.error("Не удалось загрузить API 2GIS");
      }, 5000); // Таймаут через 5 секунд
    };

    script.onerror = () => {
      console.error("Не удалось загрузить скрипт 2GIS.");
    };

    document.body.appendChild(script);

    return () => {
      // Удаляем скрипт и атрибуты карты при размонтировании компонента
      document.body.removeChild(script);
      const mapElement = document.getElementById("map");
      mapElement?.removeAttribute("data-map-initialized");
    };
  }, []);

  return <Box id="map" w="100%" h="320px" border="1px solid #EBEBEB" />;

  
};

export default MapWith2GIS;
