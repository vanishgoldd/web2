import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');
const rootPath = path.join(__dirname, '..');

console.log('Подготовка статической версии для прямого открытия в браузере...');

// Копируем static-version.html в корневую директорию
try {
  const staticVersionPath = path.join(rootPath, 'static-version.html');
  fs.copyFileSync(staticVersionPath, path.join(distPath, 'static-version.html'));
  console.log('✓ Скопирован файл static-version.html');
} catch (error) {
  console.error('Ошибка при копировании static-version.html:', error);
}

// Создаем упрощенный index.html в корневой директории
try {
  const simpleHtml = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevFolio - Портфолио-конструктор</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      text-align: center;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 {
      color: #00aaff;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 30px;
      color: #555;
    }
    .buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .button {
      display: inline-block;
      background-color: #00aaff;
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
    }
    .button.secondary {
      background-color: transparent;
      border: 2px solid #00aaff;
      color: #00aaff;
    }
    .note {
      margin-top: 40px;
      padding: 20px;
      background-color: #e6f7ff;
      border-radius: 8px;
      text-align: left;
    }
    code {
      background-color: #f0f0f0;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>DevFolio - Портфолио-конструктор</h1>
    <p>Создавайте профессиональные портфолио для разработчиков и дизайнеров с возможностью кастомизации шаблонов, интеграции с GitHub и Figma.</p>
    
    <div class="buttons">
      <a href="static-version.html" class="button">Открыть статическую версию</a>
      <a href="dist/index.html" class="button secondary">Попробовать React-версию</a>
    </div>
    
    <div class="note">
      <p><strong>Примечание:</strong> Для полноценной работы React-версии рекомендуется использовать локальный веб-сервер:</p>
      <ol>
        <li>Установите Node.js с <a href="https://nodejs.org/" target="_blank">официального сайта</a></li>
        <li>Откройте командную строку/терминал в папке с проектом</li>
        <li>Выполните команду: <code>npx serve</code></li>
        <li>Откройте в браузере ссылку, которая появится в консоли (обычно http://localhost:3000)</li>
      </ol>
    </div>
  </div>
</body>
</html>
  `;
  
  fs.writeFileSync(path.join(rootPath, 'index.html'), simpleHtml);
  console.log('✓ Создан упрощенный index.html');
} catch (error) {
  console.error('Ошибка при создании упрощенного index.html:', error);
}

// Проверяем и создаем файл .nojekyll для GitHub Pages
try {
  fs.writeFileSync(path.join(rootPath, '.nojekyll'), '');
  console.log('✓ Создан файл .nojekyll для GitHub Pages');
} catch (error) {
  console.error('Ошибка при создании .nojekyll:', error);
}

console.log('Статическая версия готова!');
console.log('Теперь вы можете:');
console.log('1. Открыть index.html в браузере для доступа к статической версии');
console.log('2. Упаковать все файлы в ZIP-архив и поделиться с другими');
