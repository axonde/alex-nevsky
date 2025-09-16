import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      // Для локалки оставляем пустым, для билда ставим подпапку
      base: dev ? '' : '/alex-nevsky'
    },
    // Генерация относительных путей для всех ассетов
    appDir: '_app'
  }
};

export default config;
