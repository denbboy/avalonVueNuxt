<template>
  <section id="island" class="py-14 md:py-14 lg:py-24 relative overflow-hidden">
    <div class="container">
      <div class="mb-8 text-center md:mb-12">
        <p class="text-white mb-2 text-sm md:text-base" data-aos="fade-up">
          Почему выбирают Бали?
        </p>
        <h2 class="text-white font-bold text-2xl md:text-[45px] 3xl:text-[56px] leading-[100%]" data-aos="fade-up">
          Остров Богов
        </h2>
      </div>
      <div class="con_list grid gap-[30px] xl:gap-0 xl:grid-cols-[1fr_1.1fr_1fr]">
        <ul class="flex flex-col gap-4">
          <li class="flex gap-4 md:gap-7 items-center md:items-start" data-aos="fade-right">
            <div class="min-w-11 h-11 rounded-xl bg-blue-400 flex items-center justify-center md:min-w-12 md:h-12">
              <span class="font-bold text-white text-xs md:text-lg">
                1
              </span>
            </div>
            <div class="">
              <h3
                class="font-bold text-white lg:text-[30px] text-base w-full decoration-dashed underline md:no-underline md:text-[22px] md:mb-2 lg:mb-5 md:border-none">
                Высокая доходность
              </h3>
              <p class="text-white text-sm md:text-base hidden md:block">
                Инвестиции в недвижимость на Бали обеспечивают до 20% доходности в год благодаря высокому
                спросу на аренду
              </p>
            </div>
          </li>
          <div class="h-[1px] w-[calc(100%+20px)] hidden md:block ml-auto -mr-24 my-auto bg-white/20"></div>
          <li class="flex gap-4 md:gap-7 items-center md:items-start" data-aos="fade-right">
            <div class="min-w-11 h-11 rounded-xl bg-blue-400 flex items-center justify-center md:min-w-12 md:h-12">
              <span class="font-bold text-white text-xs md:text-lg">
                2
              </span>
            </div>
            <div class="">
              <h3
                class="font-bold text-white lg:text-[30px] text-base w-full decoration-dashed underline md:no-underline md:text-[22px] md:mb-2 lg:mb-5 md:border-none">
                Быстрая окупаемость
              </h3>
              <p class="text-white text-sm md:text-base hidden md:block">
                Стабильный спрос на аренду и рост цен обеспечивают быструю окупаемость инвестиций в
                недвижимость на Бали.
              </p>
            </div>
          </li>
          <div class="h-[1px] hidden md:block w-[calc(100%-76px)] ml-auto my-auto bg-white/20"></div>
          <li class="flex gap-4 md:gap-7 items-center md:items-start" data-aos="fade-right">
            <div class="min-w-11 h-11 rounded-xl bg-blue-400 flex items-center justify-center md:min-w-12 md:h-12">
              <span class="font-bold text-white text-xs md:text-lg lg:text-[22px]">
                3
              </span>
            </div>
            <div>
              <h3
                class="font-bold text-white lg:text-[30px] text-base w-full decoration-dashed underline md:no-underline md:text-[22px] md:mb-2 lg:mb-5 md:border-none">
                Туристический поток
              </h3>
              <p class="text-white text-sm md:text-sm lg:text-base hidden md:block">
                Бали привлекает огромное количество туристов каждый год, обеспечивая стабильный поток
                арендных доходов.
              </p>
            </div>
          </li>
        </ul>

        <!-- <img src="/assets/img/index/island-img.png" class="my-8 max-w-56 m-auto md:max-w-[500px] md:m-0" alt="ph" data-aos="zoom-in"> -->

        <div class="logo-clip-path max-h-[222px] max-w-[214px] md:max-w-full md:max-h-full md:min-w-[318px] md:h-[380px] lg:min-w-[553px] lg:h-[573px] mx-auto my-auto">
          <video loop class="md:min-w-[318px]  md:h-[380px] lg:min-w-[553px] lg:h-[573px] min-w-[214px] w-full h-[222px] object-cover" muted autoplay src="/assets/video/video-logo.webm"></video>
        </div>

        <ul class="flex flex-col gap-4">
          <li class="flex gap-4 items-center xl:items-start md:gap-7 xl:first:-ml-16 xl:flex-row-reverse xl:text-end"
            data-aos="fade-left">
            <div class="min-w-11 h-11 rounded-xl bg-blue-400 flex items-center justify-center md:min-w-12 md:h-12">
              <span class="font-bold text-white text-xs md:text-lg">
                4
              </span>
            </div>
            <div class="">
              <h3
                class="font-bold text-white lg:text-[30px] text-base w-full decoration-dashed underline md:no-underline md:text-[22px] md:mb-2 lg:mb-5 md:border-none">
                Стабильная экономика
              </h3>
              <p class="text-white text-sm md:text-base hidden md:block">
                Стабильная экономика способствует росту цен на недвижимость и обеспечивает долгосрочный
                роста капитала.
              </p>
            </div>
          </li>
          <div class="h-[1px] w-[calc(100%+20px)] hidden xl:block -ml-24 my-auto bg-white/20"></div>
          <li class="flex gap-4 items-center xl:items-start md:gap-7 xl:first:-ml-16 xl:flex-row-reverse xl:text-end"
            data-aos="fade-left">
            <div class="min-w-11 h-11 rounded-xl bg-blue-400 flex items-center justify-center md:min-w-12 md:h-12">
              <span class="font-bold text-white text-xs md:text-lg">
                5
              </span>
            </div>
            <div class="">
              <h3
                class="font-bold text-white lg:text-[30px] text-base w-full decoration-dashed underline md:no-underline md:text-[22px] md:mb-2 lg:mb-5 md:border-none">
                Политическая стабильность
              </h3>
              <p class="text-white text-sm md:text-base hidden md:block">
                Политическая стабильность создает благоприятную среду для инвестиций в недвижимость на Бали.
              </p>
            </div>
          </li>
          <div class="h-[1px] hidden xl:block w-[calc(100%-76px)] my-auto bg-white/20"></div>
          <li class="flex gap-4 md:gap-7 xl:items-start xl:first:-ml-16 xl:flex-row-reverse xl:text-end"
            data-aos="fade-left">
            <div class="min-w-11 h-11 rounded-xl bg-blue-400 flex items-center justify-center md:min-w-12 md:h-12">
              <span class="font-bold text-white text-xs md:text-lg">
                6
              </span>
            </div>
            <div>
              <h3
                class="font-bold text-white lg:text-[30px] text-base w-full decoration-dashed underline md:no-underline md:text-[22px] md:mb-2 lg:mb-5 md:border-none">
                Низкая инфляция
              </h3>
              <p class="text-white text-sm md:text-base hidden md:block">
                Низкий уровень инфляции обеспечивает прогнозируемые цены на аренду, делая инвестиции
                предсказуемыми.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="border border-blue-400 rounded-2xl mt-[60px] overflow-hidden lg:mt-[68px] md:mt-[80px] md:flex md:h-32 lg:h-48 md:items-center"
        data-aos="fade-left">
        <div
          class="flex items-center gap-4 py-7 px-5 border-b border-blue-400 md:border-r md:border-b-0 md:h-full md:px-8 md:w-full">
          <img src="/assets/img/index/cool.svg" class="w-16" alt="svg">
          <span class="text-base text-white md:max-w-56 md:text-[14px] 3xl:text-[16px]">
            Инновационные проекты в ключевых локациях острова
          </span>
        </div>
        <div
          class="py-7 px-5 border-b border-blue-400 md:border-r md:border-b-0 md:h-full flex flex-col md:justify-center md:w-full">
          <p class="text-white text-3xl font-bold mb-2 md:text-[30px] 3xl:text-[40px]">
            От 20%
          </p>
          <span class="text-base text-white md:text-[14px]">
            первый взнос
          </span>
        </div>
        <div
          class="py-7 px-5 border-b border-blue-400 md:border-r md:border-b-0 md:h-full flex flex-col md:justify-center md:w-full">
          <p class="text-white text-3xl font-bold mb-2 md:text-[30px] 3xl:text-[40px]">
            0%
          </p>
          <span class=" text-white text-[13px] 3xl:text-base">
            рассрочка
          </span>
        </div>
        <div class="py-7 lg:px-5 md:px-3 bg-blue-400 md:h-full flex flex-col md:justify-center md:w-full">
          <p class="text-white text-3xl font-bold mb-2 flex md:text-[30px] lg:text-[40px] items-center">
            ROI 17-22%
            <img src="/assets/img/index/A-decor.svg" class="ml-1 max-w-5 md:max-w-5 md:-mt-1 lg:max-w-7" alt="ic">
          </p>
          <span class=" text-white text-[13px] 3xl:text-base">
            годовых
          </span>
        </div>
      </div>

    </div>

    <div class="absolute md:-right-36 -bottom-14 md:hidden mt-[1px] translate-y-1 -right-14 w-28 z-[2]">
      <img src="/assets/img/icons/vector-logo.svg" alt="vector-logo">
    </div>
  </section>
</template>