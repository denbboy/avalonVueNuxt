<template>
    <main class="overflow-hidden">

        <Head>
            <Title>
                {{ currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_title }}
            </Title>
            <Meta name="description"
                :content="currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.meta_description" />
        </Head>

        <PagesCooperationMain />

        <section id="broker" class="py-[60px] relative z-10 lg:py-[100px]">
            <div class="container">
                <div class="xl:flex xl:flex-row-reverse xl:items-center gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-left" class="">
                        <h2 class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">Для
                            брокеров</h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">Мы ценим вклад тех, кто помогает развитию
                            рынка
                            недвижимости в Украине. Поэтому мы разработали специальную программу сотрудничества с
                            брокерами,
                            основанную на доверии, открытости и взаимной прибыли. Наши партнеры-брокеры получают самые
                            выгодные
                            условия для своих клиентов, а также первыми узнают о новых объектах и ​​специальных
                            предложениях.
                        </p>
                        <button @click="handleOpenModal" class="white-button hidden xl:block">Начать
                            сотрудничество</button>
                    </div>
                    <img data-aos="fade-up"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/assets/img/cooperation/photo-1.jpg" alt="img">
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 py-[60px] pl-5 pr-3 rounded-[20px] xl:pt-20 xl:pb-24 xl:pl lg:pl-[120px] lg::pr-[120px]">
                    <h3 class="text-xl md:text-2xl 3xl:text-3xl text-white font-bold mb-[30px] ">Этапы работы с
                        брокерами</h3>
                    <ol class="md:grid md:grid-cols-4  relative  justify-between ">
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10 mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1

                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">
                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-2/4 -translate-y-[6px]">
                                </div>
                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить
                                заявку в
                                форме
                                ниже или на любом сайте компании в разделе «Контакты»</p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10 mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                2
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-0 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                Подписать договор для согласования условий сотрудничества
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10  mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                3
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-0 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                Пройти обучение и получить аккредитацию
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10  mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                4
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen right-1/2 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center">
                                Получить доступ к онлайн базе имеющихся квартир
                            </p>
                        </li>
                    </ol>
                </div>
                <button @click="handleOpenModal" class="white-button xl:hidden mt-8">Начать сотрудничество</button>
            </div>
        </section>

        <section id="agency" class="py-[60px] lg:py-[100px] bg-blue-600">
            <div class="container">
                <div class="xl:flex xl:flex-row xl:items-center gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-right" class="">
                        <h2 class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">Агентствам
                            недвижимости</h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">Для сотрудничества с риелторами мы
                            разработали
                            инновационную программу, которая позволяет сертифицированным агентствам недвижимости
                            официально
                            предлагать своим клиентам квартиры в жилых комплексах SAGA Development и получать за это
                            достойное
                            вознаграждение.</p>
                        <button @click="handleOpenModal" class="white-button hidden xl:block">Начать
                            сотрудничество</button>
                    </div>
                    <img data-aos="fade-left"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/assets/img/cooperation/photo-2.jpg" alt="img">
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 px-[20px] py-[60px] md:p-[48px] pb-6 3xl:py-[80px] 3xl:px-[120px] rounded-[20px] overflow-hidden">
                    <h3
                        class="text-xl w-fit md:text-2xl 3xl:text-3xl pr-4 text-white font-bold mb-[30px]  relative after:absolute after:top-2/4   after:w-[6px] after:h-[6px] md:after:w-[10px] md:after:h-[10px] after:bg-blue-400 before:w-screen before:left-[100%] before:h-[1px] before:bg-white/20 md:after:rounded-[4px] md:before:mt-[4px] before:mt-[2.5px] before:top-2/4  before:absolute after:left-full  after:rounded-sm">
                        Мы сопровождаем риелторов на всех этапах сотрудничества:
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
                <p data-aos="fade-up" class="hidden md:block text-white text-lg max-w-[892px] mt-12">Для обеспечения
                    прозрачности отношений
                    предусмотрена фиксация клиента за определенным риелтором. А после заключения сделки — выплата
                    вознаграждения.</p>
                <button @click="handleOpenModal" class="white-button xl:hidden mt-8">Начать сотрудничество</button>
            </div>
        </section>

        <section id="marketing" class="py-[60px] lg:py-[100px] bg-blue-500">
            <div class="container">
                <div class="xl:flex xl:flex-row-reverse xl:items-center gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-left" class="">
                        <h2 class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">Маркетингу
                        </h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">Знакомы с нашими проектами и у вас есть
                            крутая
                            идея для сотрудничества? Мы открыты для предложений! Если ваша компания занимается рекламной
                            полиграфией или изготовлением качественных POS-материалов, если вы гуру в организации
                            ивентов
                            или
                            хотите провести мероприятие на бульваре RYBALSKY или съемку в CHICAGO Central House,
                            заполняйте
                            форму обратной связи на этой странице. </p>
                        <button @click="handleOpenModal" class="white-button hidden xl:block">Начать
                            сотрудничество</button>
                    </div>
                    <img data-aos="fade-right"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/assets/img/cooperation/photo-3.jpg" alt="img">
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 px-[20px] py-[60px] md:p-[48px] pb-6 3xl:py-[80px] 3xl:px-[120px] rounded-[20px] overflow-hidden">
                    <h3
                        class="text-xl w-fit md:text-2xl 3xl:text-3xl pr-4 text-white font-bold mb-[30px]  relative after:absolute after:top-2/4   after:w-[6px] after:h-[6px] md:after:w-[10px] md:after:h-[10px] after:bg-blue-400 before:w-screen after:-mt-[2.5px] md:after:-mt-1 before:left-[100%] before:h-[1px] before:bg-white/20 md:after:rounded-[4px] before:top-2/4 before:absolute after:left-full after:rounded-sm">


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
                <button @click="handleOpenModal" class="white-button xl:hidden mt-8">Начать сотрудничество</button>
            </div>
        </section>

        <section id="partners" class="py-[60px] lg:py-[100px] bg-blue-600">
            <div class="container">
                <div class="xl:flex xl:flex-row md:items-center gap-6 3xl:gap-[80px] mb-8 xl:mb-20">
                    <div data-aos="fade-right" class="">
                        <h2 class="text-3xl text-white font-bold mb-8 md:text-[45px] lg:text-[56px] leading-none md:mb-12">
                            Партнерам
                        </h2>
                        <p class="text-sm text-white mb-8 md:mb-12 md:text-lg">
                            Мы готовы взять на себя комплексную или частичную реализацию проекта в случае, если цели,
                            миссия
                            и
                            философия наших компаний совпадают. Также мы открыты для предложений о земельных участках и
                            перспективных проектах.
                        </p>
                        <button @click="handleOpenModal" class="white-button hidden xl:block">Начать
                            сотрудничество</button>
                    </div>
                    <img data-aos="fade-up"
                        class="xl:max-w-[546px] lg:max-w-[740px] object-cover w-full h-[180px] md:h-[412px] rounded-[20px]"
                        src="/assets/img/cooperation/photo-4.jpg" alt="img">
                </div>
                <div data-aos="fade-up"
                    class="border border-white/20 py-[60px] pl-5 pr-3 rounded-[20px] xl:pt-20 xl:pb-24 xl:pl lg:pl-[120px] lg::pr-[120px]">
                    <h3 class="text-xl md:text-2xl 3xl:text-3xl text-white font-bold mb-[30px]">
                        Этапы работы с партнерами
                    </h3>
                    <ol class="md:grid md:grid-cols-4  relative  justify-between ">
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10 mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                1

                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">
                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-2/4 -translate-y-[6px]">
                                </div>
                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                Оставить заявку в форме ниже или на любом сайте компании в разделе «Контакты»
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10 mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                2
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-0 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                Подписать договор для согласования условий сотрудничества    
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10  mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                3
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen left-0 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center md:ml-0">
                                Пройти обучение и получить аккредитацию    
                            </p>
                        </li>
                        <li class="flex gap-5 md:gap-0 md:flex-col items-center z-10  mb-5 last:mb-0">
                            <div
                                class="md:mx-auto num font-bold text-xs md:text-lg rounded-[10px] text-white flex items-center justify-center bg-blue-400 md:min-w-16 md:w-16 md:h-16 min-w-9 w-9 h-9">
                                4
                            </div>
                            <div class="w-full  justify-center items-center hidden md:flex  overflow-hidden relative ">
                                <span class="bg-blue-400 rounded-[4px] w-[10px] h-[10px] md:mx-auto md:mt-5 mb-8 ">

                                </span>
                                <div
                                    class="hidden md:block h-[1px] absolute bg-white/20 -z-[1] top-[50%] w-screen right-1/2 -translate-y-[6px]">
                                </div>

                            </div>
                            <p class="text-sm md:text-base text-white md:px-1 md:max-w-[295px] md:text-center">
                                Получить доступ к онлайн базе имеющихся квартир    
                            </p>
                        </li>
                    </ol>
                </div>
                <button @click="handleOpenModal" class="white-button xl:hidden mt-8">Начать сотрудничество</button>
            </div>
        </section>

        <div class="mt-20">
            <PagesMainProjects/>
        </div>

    </main>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

// Состояние и сторы
const langStore = useLangStore();
const pagesStore = usePagesStore();
const modalsStore = useModalsStore();
const currentPageReqest = ref([]);

// Наблюдение за изменением страницы
watchEffect(() => {
  currentPageReqest.value = pagesStore?.pagesList?.filter(item => item.slug === 'cooperation')[0]?.translations;
});

// Конфигурация Swiper
const modules = {
  navigation: true,
  a11y: true,
  pagination: true,
};

const navigationConfig = {
  nextEl: '.button-next',
  prevEl: '.button-prev',
};

const pagination = {
  el: '.swiper-pagination',
  clickable: true,
};

const breakpoints = {
  768: {
    slidesPerView: 2,
    pagination: false,
  },
  1280: {
    slidesPerView: 3,
  },
  1441: {
    spaceBetween: 50,
  },
};

// Функция открытия модального окна
const handleOpenModal = () => {
  modalsStore.addModal('vacancy');
};

</script>
