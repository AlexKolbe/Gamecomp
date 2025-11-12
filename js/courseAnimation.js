// Анимация на секцию COURSE
// js/courseAnimation.js
const courseAnimation = () => {
  const courseSection = document.querySelector(".course");
  const earnedElement = document.querySelector(
    ".course__progress-label .course__number"
  );
  const progressBar = document.querySelector(
    ".course__progress-element progress"
  );
  const minEarned = 350000;
  const maxEarned = 600000;
  //   const maxTotal = 1000000;

  let animationStarted = false;

  // Функция для форматирования чисел с разделителями
  const formatNumber = (num) => {
    return new Intl.NumberFormat("ru-RU").format(num) + "₽";
  };

  // Функция анимации числа
  const animateNumber = (start, end, duration, element) => {
    const startTime = performance.now();
    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easing function для плавности
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(start + (end - start) * easeOutQuart);
      element.textContent = formatNumber(currentValue);

      // Обновляем progress bar
      progressBar.value = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  };

  // Функция для проверки видимости элемента
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Делим экран на 3 части, проверяем попадание в среднюю треть
    const third = windowHeight / 3;
    return rect.top <= windowHeight - third && rect.bottom >= third;
  };

  // Функция запуска анимации
  const startAnimation = () => {
    if (animationStarted) return;

    animationStarted = true;

    // Генерируем случайное число от 350000 до 600000
    const randomEarned =
      Math.floor(Math.random() * (maxEarned - minEarned + 1)) + minEarned;

    // Запускаем анимацию числа от 0 до случайного значения
    animateNumber(0, randomEarned, 2000, earnedElement);
  };

  // Обработчик скролла
  const handleScroll = () => {
    if (!animationStarted && isElementInViewport(courseSection)) {
      startAnimation();
    }
  };

  // Инициализация
  const init = () => {
    // Устанавливаем начальные значения
    earnedElement.textContent = "0₽";
    progressBar.value = 0;

    // Добавляем обработчик скролла
    window.addEventListener("scroll", handleScroll);

    // Проверяем сразу при загрузке, может элемент уже в зоне видимости
    setTimeout(() => {
      if (isElementInViewport(courseSection)) {
        startAnimation();
      }
    }, 100);
  };

  // Запускаем при загрузке DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
};

courseAnimation();
