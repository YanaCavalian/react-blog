import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome!',
        about: 'About us',
        home: 'Home',
        project: 'Project',
        Acquired_skills: 'Acquired skills',
        contact: 'Contact',
        article: 'Article',
        contentText: `
        <br />
        My journey in the field of frontend development has become an exciting adventure, 
        full of learning. Learning HTML, CSS, and JavaScript became my initial steps in this captivating world. 
        These foundations enabled me to create the structure, style, and interactivity of web pages. 
        In the process of studying various frameworks, such as React.js, 
        I realized the power of the component-based approach and the possibilities of code reusability.
         Git version control systems helped me efficiently organize and manage projects. 
         Knowledge of adaptive and responsive design principles allows me to create web applications that are equally convenient on 
         any device. 
         Yielding to the inspiration accumulated during the learning process, 
         I decided to apply my knowledge in practice. This led to my first project, the "Yoga website," 
         followed by the "Calculator," and, ultimately, the third project you see now – the "Personal Blog."`,
        project1Title: 'Yogo-website',
        project1Description: `Hello! This is the "YOGA" web page model. The web page has color
        schemes, images and icons, buttons and an image slider, a "TRIAL CLASS"
        form, and contact information. Technologies: HTML CSS JavaScript Images
        Forms Icons Links and URLs.`,
        project2Title: 'Calculator',
        project2Description: `Hello! This is a basic calculator that performs arithmetic operations
        (addition, subtraction, multiplication, division), calculates the
        factorial of a number and displays the Fibonacci sequence of numbers.
        The calculator also supports light and dark themes and saves theme
        selection between sessions using LocalStorage. Technologies: HTML CSS
        JavaScript`,
        acquired_skills: 'Acquired skills',
        html: ' Understanding the structure of web pages, experience working with various tags, including semantic markup.',
        css: 'Ability to style web pages, work with positioning, create responsive designs, and add animations.',
        js: ' Proficiency in the basics of JavaScript, including working with variables, conditions, loops, and functions.',
        react:
          'Knowledge of the React library and experience in creating components and working with them.',
        github:
          ' Understanding collaborative work in GitHub projects, including branching, merging, and creating pull requests.'
      }
    },
    ua: {
      translation: {
        welcome: 'Ласкаво просимо!',
        about: 'Про нас',
        home: 'Головна',
        project: 'Проект',
        Acquired_skills: 'Набуті навички',
        contact: 'Контакти',
        article: 'Cтаття',
        contentText: `
        <br />
        Мій шлях у сфері розробки frontend став захоплюючою пригодою, 
        повною навчання. Вивчення HTML, CSS і JavaScript стало моїми першими кроками у цьому захоплюючому світі.
         Ці основи дозволили мені створювати структуру, стиль та інтерактивність веб-сторінок. 
         У процесі вивчення різних фреймворків, таких як React.js, 
         я осознала силу компонентного підходу та можливості повторного використання коду. 
         Системи контролю версій Git допомогли мені ефективно організовувати та керувати проектами. 
         Знання принципів адаптивного та відгукового дизайну дозволяє створювати веб-додатки, які 
         однаково зручні на будь-яких пристроях. Піддавшись натхненню, накопиченому під час навчання, 
         я вирішила використати свої знання на практиці. Так з'явився мій перший проект "Йога-сайт", після нього – "Калькулятор", 
         і, нарешті, ви бачите мій поточний проект – "Особистий блог".`,
        project1Title: 'Його-сторінка',
        project1Description: `Привіт! Це модель веб-сторінки "YOGA". Сторінка має кольорові
        схеми, зображення та iконки, кнопки та слайдер зображень, форму "TRIAL CLASS"
        та контактну інформацію. Технології: HTML CSS JavaScript Зображення
        Форми Іконки Посилання та URL.`,
        project2Title: 'Калькулятор',
        project2Description: `Привіт! Це простий калькулятор, який виконує арифметичні операції
        (додавання, віднімання, множення, ділення), обчислює факторіал числа та
        відображає послідовність чисел Фібоначчі. Калькулятор також підтримує світлу та темну теми і зберігає вибір теми
        між сеансами за допомогою LocalStorage. Технології: HTML CSS
        JavaScript`,
        acquired_skills: 'Набуті навички',
        html: ' Розуміння структури веб-сторінок, досвід роботи з різними тегами, включаючи семантичну розмітку.',
        css: 'Здатність стилізувати веб-сторінки, робота з позиціонуванням, створення адаптивних дизайнів та додавання анімацій.',
        js: 'Володіння основами JavaScript, включаючи роботу змінними, умовами, циклами та функціями.',
        react:
          'Знання бібліотеки React та досвід створення компонентів та роботи з ними.',
        github:
          "Розуміння колективної роботи в проектах GitHub, включаючи створення гілок, їх об'єднання та створення запитів на злиття."
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
