<template>
    <main class="overflow-hidden">

        <PagesCooperationMain />

        <section id="broker" class="py-[60px] lg:py-[100px]">
            <div class="container">
                <div class="md:flex md:flex-row-reverse md:items-center gap-[80px] mb-8 md:mb-20">
                    <div data-aos="fade-left" class="">
                        <h2 class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] md:mb-12">Для брокеров</h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">Мы ценим вклад тех, кто помогает развитию
                            рынка
                            недвижимости в Украине. Поэтому мы разработали специальную программу сотрудничества с
                            брокерами,
                            основанную на доверии, открытости и взаимной прибыли. Наши партнеры-брокеры получают самые
                            выгодные
                            условия для своих клиентов, а также первыми узнают о новых объектах и ​​специальных
                            предложениях.
                        </p>
                        <button @click="handleOpenModal" class="white-button hidden md:block">Начать
                            сотрудничество</button>
                    </div>
                    <img data-aos="fade-up" class="max-w-[740px] w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/assets/img/career/img.jpg" alt="img">
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 py-[60px] pl-5 pr-3 rounded-[20px] md:pt-20 md:pb-24 md:pl md:pl-[120px] md:pr-[120px]">
                    <h3 class="text-xl text-white font-bold mb-[30px] md:text-3xl">Этапы работы с брокерами</h3>
                    <ol
                        class="md:flex after:hidden md:after:block after:h-[1px] after:absolute relative after:bg-white/20 after:z-0 justify-between after:top-[89px] after:w-[calc(100%-300px)] after:left-2/4 after:-translate-x-2/4">
                        <li class="flex items-center z-10 md:block mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div
                                class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] hidden md:block md:mx-auto md:mt-5 md: mb-8">
                            </div>
                            <p class="text-sm md:text-base text-white ml-5 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                        <li class="flex items-center z-10 md:block mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div
                                class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] hidden md:block md:mx-auto md:mt-5 md: mb-8">
                            </div>
                            <p class="text-sm md:text-base text-white ml-5 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                        <li class="flex items-center z-10 md:block mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div
                                class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] hidden md:block md:mx-auto md:mt-5 md: mb-8">
                            </div>
                            <p class="text-sm md:text-base text-white ml-5 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                        <li class="flex items-center z-10 md:block mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div
                                class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] hidden md:block md:mx-auto md:mt-5 md: mb-8">
                            </div>
                            <p class="text-sm md:text-base text-white ml-5 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                    </ol>
                </div>
                <button @click="handleOpenModal" class="white-button md:hidden mt-8">Начать сотрудничество</button>
            </div>
        </section>

        <section id="agency" class="py-[60px] lg:py-[100px] bg-blue-600">
            <div class="container">
                <div class="md:flex md:flex-row md:items-center gap-[80px] mb-8 md:mb-20">
                    <div data-aos="fade-right" class="">
                        <h2 class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-[55px] md:mb-12">Агентствам
                            недвижимости</h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">Для сотрудничества с риелторами мы
                            разработали
                            инновационную программу, которая позволяет сертифицированным агентствам недвижимости
                            официально
                            предлагать своим клиентам квартиры в жилых комплексах SAGA Development и получать за это
                            достойное
                            вознаграждение.</p>
                        <button @click="handleOpenModal" class="white-button hidden md:block">Начать
                            сотрудничество</button>
                    </div>
                    <img data-aos="fade-left" class="max-w-[740px] w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/assets/img/career/img.jpg" alt="img">
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 py-[60px] pl-5 pr-3 rounded-[20px] md:pt-20 md:pb-24 md:pl md:pl-[120px] md:pr-[120px]">
                    <h3
                        class="text-xl text-white font-bold mb-[30px] md:text-3xl relative after:absolute after:top-2/4 after:-translate-x-2/4 after:right-[12px] after:w-[6px] after:h-[6px] after:bg-blue-400 before:w-[34px] md:before:w-[120px] before:h-[1px] before:bg-white/20 md:after:rounded-[4px] md:before:mt-[4px] before:mt-[2.5px] before:top-2/4 before:-translate-x-2/4 before:absolute md:before:right-[-180px] before:right-[-30px] md:after:w-[10px] md:after:right-[-15px] md:after:h-[10px] after:rounded-sm">
                        Мы сопровождаем риелторов на всех этапах сотрудничества:
                    </h3>
                    <ol class="md:flex relative justify-between after:top-[89px] md:gap-5">
                        <li class="flex items-center mb-8 last:mb-0 md:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img class="w-3 h-3 md:w-auto md:h-auto" src="/assets/img/icons/white-check.svg" alt="">
                            </div>
                            <p class="text-sm md:text-lg text-white ml-5">Оказываем информационную поддержку по нашим
                                проектам
                            </p>
                        </li>
                        <li class="flex items-center mb-8 last:mb-0 md:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img class="w-3 h-3 md:w-auto md:h-auto" src="/assets/img/icons/white-check.svg" alt="">
                            </div>
                            <p class="text-sm md:text-lg text-white ml-5">Консультируем относительно ведения рекламных
                                кампаний
                            </p>
                        </li>
                        <li class="flex items-center mb-8 last:mb-0 md:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img class="w-3 h-3 md:w-auto md:h-auto" src="/assets/img/icons/white-check.svg" alt="">
                            </div>
                            <p class="text-sm md:text-lg text-white ml-5">Помогаем в решении юридических вопросов.</p>
                        </li>
                    </ol>
                </div>
                <p data-aos="fade-up" class="hidden md:block text-white text-lg max-w-[892px] mt-12">Для обеспечения
                    прозрачности отношений
                    предусмотрена фиксация клиента за определенным риелтором. А после заключения сделки — выплата
                    вознаграждения.</p>
                <button @click="handleOpenModal" class="white-button md:hidden mt-8">Начать сотрудничество</button>
            </div>
        </section>

        <section id="marketing" class="py-[60px] lg:py-[100px] bg-blue-500">
            <div class="container">
                <div class="md:flex md:flex-row-reverse md:items-center gap-[80px] mb-8 md:mb-20">
                    <div data-aos="fade-left" class="">
                        <h2 class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] md:mb-12">Маркетингу</h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">Знакомы с нашими проектами и у вас есть
                            крутая
                            идея для сотрудничества? Мы открыты для предложений! Если ваша компания занимается рекламной
                            полиграфией или изготовлением качественных POS-материалов, если вы гуру в организации
                            ивентов
                            или
                            хотите провести мероприятие на бульваре RYBALSKY или съемку в CHICAGO Central House,
                            заполняйте
                            форму обратной связи на этой странице. </p>
                        <button @click="handleOpenModal" class="white-button hidden md:block">Начать
                            сотрудничество</button>
                    </div>
                    <img data-aos="fade-right" class="max-w-[740px] w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/assets/img/career/img.jpg" alt="img">
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 py-[60px] pl-5 pr-3 rounded-[20px] md:pt-20 md:pb-24 md:pl md:pl-[120px] md:pr-[120px]">
                    <h3
                        class="text-xl text-white font-bold mb-[30px] md:text-3xl relative after:absolute after:top-2/4 after:-translate-x-2/4 after:right-[12px] after:w-[6px] after:h-[6px] after:bg-blue-400 before:w-[34px] md:before:w-[120px] before:h-[1px] before:bg-white/20 md:after:rounded-[4px] md:before:mt-[4px] before:mt-[2.5px] before:top-2/4 before:-translate-x-2/4 before:absolute md:before:right-[-180px] before:right-[-30px] md:after:w-[10px] md:after:right-[-15px] md:after:h-[10px] after:rounded-sm">
                        Сотрудничество с маркетологами:
                    </h3>
                    <ol class="flex flex-col xl:flex-row relative justify-between after:top-[89px] md:gap-5">
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img class="w-3 h-3 md:w-auto md:h-auto" src="/assets/img/icons/white-check.svg" alt="">
                            </div>
                            <p class="text-sm md:text-lg text-white ">Оказываем информационную поддержку по нашим
                                проектам
                            </p>
                        </li>
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img class="w-3 h-3 md:w-auto md:h-auto" src="/assets/img/icons/white-check.svg" alt="">
                            </div>
                            <p class="text-sm md:text-lg text-white ">Консультируем относительно ведения рекламных
                                кампаний
                            </p>
                        </li>
                        <li class="flex gap-5 mb-8 last:mb-0 md:mb-0">
                            <div
                                class=" num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                <img class="w-3 h-3 md:w-auto md:h-auto" src="/assets/img/icons/white-check.svg" alt="">
                            </div>
                            <p class="text-sm md:text-lg text-white ">Помогаем в решении юридических вопросов.</p>
                        </li>
                    </ol>
                </div>
                <button @click="handleOpenModal" class="white-button md:hidden mt-8">Начать сотрудничество</button>
            </div>
        </section>

        <section id="partners" class="py-[60px] lg:py-[100px] bg-blue-600">
            <div class="container">
                <div class="md:flex md:flex-row md:items-center gap-[80px] mb-8 md:mb-20">
                    <div data-aos="fade-right" class="">
                        <h2 class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] md:mb-12">
                            Партнерам
                        </h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">
                            Мы готовы взять на себя комплексную или частичную реализацию проекта в случае, если цели,
                            миссия
                            и
                            философия наших компаний совпадают. Также мы открыты для предложений о земельных участках и
                            перспективных проектах.
                        </p>
                        <button @click="handleOpenModal" class="white-button hidden md:block">Начать
                            сотрудничество</button>
                    </div>
                    <img data-aos="fade-up" class="max-w-[740px] w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/assets/img/career/img.jpg" alt="img">
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 py-[60px] pl-5 pr-3 rounded-[20px] md:pt-20 md:pb-24 md:pl md:pl-[120px] md:pr-[120px]">
                    <h3 class="text-xl text-white font-bold mb-[30px] md:text-3xl">Этапы работы с брокерами</h3>
                    <ol
                        class="md:flex after:hidden md:after:block after:h-[1px] after:absolute relative after:bg-white/20 after:z-0 justify-between after:top-[89px] after:w-[calc(100%-300px)] after:left-2/4 after:-translate-x-2/4">
                        <li class="flex items-center z-10 md:block mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div
                                class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] hidden md:block md:mx-auto md:mt-5 md: mb-8">
                            </div>
                            <p class="text-sm md:text-base text-white ml-5 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                        <li class="flex items-center z-10 md:block mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div
                                class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] hidden md:block md:mx-auto md:mt-5 md: mb-8">
                            </div>
                            <p class="text-sm md:text-base text-white ml-5 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                        <li class="flex items-center z-10 md:block mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div
                                class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] hidden md:block md:mx-auto md:mt-5 md: mb-8">
                            </div>
                            <p class="text-sm md:text-base text-white ml-5 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                        <li class="flex items-center z-10 md:block mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1
                            </div>
                            <div
                                class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] hidden md:block md:mx-auto md:mt-5 md: mb-8">
                            </div>
                            <p class="text-sm md:text-base text-white ml-5 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                    </ol>
                </div>
                <button @click="handleOpenModal" class="white-button md:hidden mt-8">Начать сотрудничество</button>
            </div>
        </section>

        <section class="py-[60px] lg:py-[100px] md:py-24">
            <div class="container">
                <h2 data-aos="fade-up"
                    class="text-white md:text-center md:mx-auto text-3xl font-bold md:text-[45px] lg:text-[56px] mb-8 md:mb-12">
                    Наши проекты
                </h2>

                <swiper :modules="modules" :navigation="navigationConfig" :space-between="20" :slides-per-view="3"
                    @swiper="onSwiper" @slideChange="onSlideChange">
                    <swiper-slide>
                        <div
                            class="h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden bg-[#111111] rounded-br-none">
                            <img src="/assets/img/discounts/image.jpg" class="opacity-50" alt="">
                            <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4">
                            </div>

                            <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                                <div class="block-bottom-point"></div>

                                <div class="flex justify-between mb-auto">
                                    <img class="w-[90px]" src="/assets/img/icons/icon-club.svg" alt="">
                                    <span
                                        class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-sm text-white">
                                        80% Продано
                                    </span>
                                </div>
                                <div class="max-w-96">
                                    <h2 class="text-white font-bold text-2xl md:text-3xl mb-5 md:mb-7">
                                        OM | Club House
                                    </h2>
                                    <p class="text-white text-xs md:text-sm mb-5 md:mb-7">
                                        Премиум апартаменты в современном клубном доме. Погрузитесь в уникальную
                                        атмосферу
                                        роскоши и
                                        уюта в центре Чангу.
                                    </p>
                                    <div class="flex items-center mb-5 md:mb-7">
                                        <strong class="text-xl md:text-2xl text-white mr-[6px]">от $120
                                            000</strong>
                                        <span class="text-white/60 text-[12px] hidden md:block">*включая
                                            налоги</span>
                                    </div>

                                    <div class="flex">
                                        <NuxtLink href="/projects/123"
                                            class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-4 px-7 rounded-[10px] text-white font-bold text-sm md:text-base mr-7">
                                            Подробнее
                                        </NuxtLink>
                                        <div class="flex items-center">
                                            <img class="w-3" src="/assets/img/icons/point-white.svg" alt="">
                                            <span class="ml-1 text-sm text-white">Чангу</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden bg-[#111111] rounded-br-none">
                            <img src="/assets/img/discounts/image.jpg" class="opacity-50" alt="">
                            <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4">
                            </div>

                            <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                                <div class="block-bottom-point"></div>

                                <div class="flex justify-between mb-auto">
                                    <img class="w-[90px]" src="/assets/img/icons/icon-club.svg" alt="">
                                    <span
                                        class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-sm text-white">
                                        80% Продано
                                    </span>
                                </div>
                                <div class="max-w-96">
                                    <h2 class="text-white font-bold text-2xl md:text-3xl mb-5 md:mb-7">
                                        OM | Club House
                                    </h2>
                                    <p class="text-white text-xs md:text-sm mb-5 md:mb-7">
                                        Премиум апартаменты в современном клубном доме. Погрузитесь в уникальную
                                        атмосферу
                                        роскоши и
                                        уюта в центре Чангу.
                                    </p>
                                    <div class="flex items-center mb-5 md:mb-7">
                                        <strong class="text-xl md:text-2xl text-white mr-[6px]">от $120
                                            000</strong>
                                        <span class="text-white/60 text-[12px] hidden md:block">*включая
                                            налоги</span>
                                    </div>

                                    <div class="flex">
                                        <NuxtLink href="/projects/123"
                                            class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-4 px-7 rounded-[10px] text-white font-bold text-sm md:text-base mr-7">
                                            Подробнее
                                        </NuxtLink>
                                        <div class="flex items-center">
                                            <img class="w-3" src="/assets/img/icons/point-white.svg" alt="">
                                            <span class="ml-1 text-sm text-white">Чангу</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden bg-[#111111] rounded-br-none">
                            <img src="/assets/img/discounts/image.jpg" class="opacity-50" alt="">
                            <div class="bg-gradient-to-t from-blue-600 absolute bottom-0 left-0 w-full h-3/4">
                            </div>

                            <div class="absolute top-0 left-0 w-full h-full p-5 md:p-7 flex flex-col">
                                <div class="block-bottom-point"></div>

                                <div class="flex justify-between mb-auto">
                                    <img class="w-[90px]" src="/assets/img/icons/icon-club.svg" alt="">
                                    <span
                                        class="md:px-5 py-2 px-4 bg-[url('./../img/icons/bgd-blue-dor-rd.svg')] bg-no-repeat bg-right-bottom h-fit rounded-tl-xl rounded-bl-xl rounded-tr-xl overflow-hidden text-xs md:text-sm text-white">
                                        80% Продано
                                    </span>
                                </div>
                                <div class="max-w-96">
                                    <h2 class="text-white font-bold text-2xl md:text-3xl mb-5 md:mb-7">
                                        OM | Club House
                                    </h2>
                                    <p class="text-white text-xs md:text-sm mb-5 md:mb-7">
                                        Премиум апартаменты в современном клубном доме. Погрузитесь в уникальную
                                        атмосферу
                                        роскоши и
                                        уюта в центре Чангу.
                                    </p>
                                    <div class="flex items-center mb-5 md:mb-7">
                                        <strong class="text-xl md:text-2xl text-white mr-[6px]">от $120
                                            000</strong>
                                        <span class="text-white/60 text-[12px] hidden md:block">*включая
                                            налоги</span>
                                    </div>

                                    <div class="flex">
                                        <NuxtLink href="/projects/123"
                                            class="hover:bg-white hover:text-blue-400 transition-all border-white border-[1px] py-4 px-7 rounded-[10px] text-white font-bold text-sm md:text-base mr-7">
                                            Подробнее
                                        </NuxtLink>
                                        <div class="flex items-center">
                                            <img class="w-3" src="/assets/img/icons/point-white.svg" alt="">
                                            <span class="ml-1 text-sm text-white">Чангу</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </swiper-slide>

                </swiper>

            </div>
        </section>

    </main>
</template>

<script>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, A11y]);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const modules = {
            navigation: true,
            a11y: true,
        };
        const navigationConfig = {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        };

        const modalsStore = useModalsStore()

        const handleOpenModal = () => {
            modalsStore.addModal('vacancy')
        }

        return {
            modules,
            navigationConfig,
            handleOpenModal,
        };
    },
};
</script>
