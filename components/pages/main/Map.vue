<template>
  <section class="map py-14 md:py-24 bg-blue-600 overflow-hidden relative">
    <div class="absolute -left-36 bottom-20 w-72 h-72 z-10 hidden md:block">
      <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>
    <div class="absolute lg:-right-36 bottom-1/2 lg:top-1/3 left-auto -right-14 w-28 lg:w-72 z-[2]">
      <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>

    <div class="container relative z-20">
      <div class="md:flex">
        <div class="md:-ml-20 mx-[-150px] lg:mr-0 w-[calc(100%+400px)] lg:w-full lg:max-w-[1298px]">
          <img src="/assets/img/index/map.svg" class="w-full" alt="ic">
        </div>
        <div class="md:absolute bottom-0 max-w-[752px] right-0 mt-8">
          <h2 class="text-white font-bold text-2xl md:text-[56px] leading-[100%] mb-7 md:text-6xl md:mb-12" data-aos="fade-up">
            Топовые локации объектов
          </h2>
          <p class="text-white text-sm mb-5 md:text-xl leading-[140%]" data-aos="fade-up">
            Наши апартаменты находятся в самом привлекательном районе Бали. Это идеальное место для
            инвестирования в недвижимость, благодаря своему превосходному расположению и потенциалу для высокой
            доходности
          </p>
          <ul
            class="text-white flex gap-4 items-center text-base font-semibold justify-center md:text-xl md:justify-start" data-aos="fade-up">
            <li class="relative">
              <p
                class="before:block before:rounded-[3px] before:w-[5px] before:h-[5px] md:before:w-[10px] md:before:h-[10px] before:border-blue-400 before:bg-transparent before:border before:absolute before:right-0 before:top-[50%] before:translate-y-[-50%] pr-6">
                Берава
              </p>
            </li>
            <li class="relative">
              <p
                class="before:block before:rounded-[3px] before:w-[5px] before:h-[5px] md:before:w-[10px] md:before:h-[10px] before:border-blue-400 before:bg-transparent before:border before:absolute before:right-0 before:top-[50%] before:translate-y-[-50%] pr-6">
                Чангу
              </p>
            </li>
            <li>
              <p>
                Переренан
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>