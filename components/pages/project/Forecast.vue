<template>
    <section id="investors" class="prognoz  bg-[url('./../img/about/prognoz-bgd.png')] bg-no-repeat bg-cover py-14 md:py-24">
        <div class="container">
            <h2 data-aos="fade-up" class="text-white text-3xl font-bold mb-[30px] md:text-center md:text-[56px] md:mb-[50px]">
                Прогноз ROI
            </h2>

            <div class="">
                <div data-aos="fade-up" class="flex w-full">
                    <div class="w-full mb-[15px] md:mb-[30px]">
                        <input @change="handleChange" type="radio" name="data1" value="option1" id="option1"
                            class="sr-only" checked>
                        <label for="option1"
                            class="py-[17px] md:py-[23px] px-2 w-full flex transition-all justify-center font-bold text-[#FFFFFF66] text-sm md:text-base border-b border-[#FFFFFF66] cursor-pointer">Апартаменты</label>
                    </div>
                    <div class="w-full">
                        <input @change="handleChange" type="radio" name="data1" value="option2" id="option2"
                            class="sr-only">
                        <label for="option2"
                            class="py-[17px] md:py-[23px] px-2 w-full flex transition-all justify-center font-bold text-[#FFFFFF66] text-sm md:text-base border-b border-[#FFFFFF66] cursor-pointer">Виллы</label>
                    </div>
                </div>

                <Transition>
                    <div v-if="type === 'option1'" class="bg-blue-600 rounded-2xl px-5 py-[30px] md:p-[30px]  3xl:p-[50px]">
                        <div
                            class="xl:flex xl:items-center xl:justify-between xl:gap-[52px] pb-5 xl:pb-[50px] border-b border-whiteOp-300">
                            <h2 class="text-white font-bold text-2xl mb-5 md:text-2xl 3xl:text-3xl lg:mb-0">
                                Однокомнатные <br>
                                апартаменты
                            </h2>

                            <div class="xl:flex items-stretch xl:gap-5">
                                <div
                                    class="p-[15px] border border-whiteOp-300 rounded-[15px] mb-[10px] xl:py-[30px] 3xl:p-[30px] w-full lg:max-w-[320px] xl:mb-0">
                                    <div
                                        class="flex gap-3 items-center mb-[10px] md:flex-col md:items-start md:gap-0 md:mb-[15px]">
                                        <h3
                                            class="font-bold text-white text-xl before:block before:h-[6px] before:w-[6px] before:bg-blue-400 before:rounded flex items-center before:mr-[15px] md:text-2xl 3xl:text-3xl md:before:h-[10px] md:before:w-[10px]">
                                            110 000 $
                                        </h3>
                                        <span class="text-sm text-[#FFFFFF99] leading-3 md:text-xs">
                                            *включая <br class="md:hidden">налоги
                                        </span>
                                    </div>
                                    <p class="text-white text-sm 3xl:text-base">
                                        Цена на этапе строительства
                                    </p>
                                </div>
                                <div
                                    class="p-[15px] border border-whiteOp-300 rounded-[15px] mb-[10px] xl:py-[30px] 3xl:p-[30px] w-full lg:max-w-[320px] xl:mb-0">
                                    <div
                                        class="flex gap-3 items-center mb-[10px] md:flex-col md:items-start md:gap-0 md:mb-[15px]">
                                        <h3
                                            class="font-bold text-white text-xl before:block before:h-[6px] before:w-[6px] before:bg-blue-400 before:rounded flex items-center before:mr-[15px] md:text-2xl 3xl:text-3xl md:before:h-[10px] md:before:w-[10px]">
                                            20%
                                        </h3>
                                        <span class="text-sm text-[#FFFFFF99] leading-3 md:text-xs">
                                            *включая <br class="md:hidden">налоги
                                        </span>
                                    </div>
                                    <p class="text-white text-sm 3xl:text-base">
                                        Управление +
                                        операционные расходы
                                    </p>
                                </div>
                                <div
                                    class="p-[15px] border border-whiteOp-300 rounded-[15px] xl:py-[30px] 3xl:p-[30px] w-full lg:max-w-[320px]">
                                    <div
                                        class="flex gap-3 items-center mb-[10px] md:flex-col md:items-start md:gap-0 md:mb-[15px]">
                                        <h3
                                            class="font-bold text-white text-xl before:block before:h-[6px] before:w-[6px] before:bg-blue-400 before:rounded flex items-center before:mr-[15px] md:text-2xl 3xl:text-3xl md:before:h-[10px] md:before:w-[10px]">
                                            180 000 $
                                        </h3>
                                        <span class="text-sm text-[#FFFFFF99] leading-3 3xl:text-xs">
                                            *включая <br class="md:hidden">налоги
                                        </span>
                                    </div>
                                    <p class="text-white text-sm 3xl:text-base">
                                        Стоимость после
                                        окончания строительства
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="about-scroll w-full overflow-x-auto mt-5 pb-5 ">
                            <div class="text-white w-full flex flex-col gap-y-[15px]">
                                <!-- Headers -->
                                <div
                                    class="font-bold justify-between w-full grid grid-cols-[repeat(7,_140px)] lg:grid lg:grid-cols-[repeat(7,_minmax(180px,_183px))] md:flex items-stretch  gap-x-[10px] md:gap-x-[20px] md:mb-[10px]">
                                    <div
                                        class="w-full md:w-[189px] lg:w-full shrink-0  py-5 md:py-0">
                                        
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Стоимость <br>за сутки</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Заполняемость</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Месячная <br>выручка</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Годовой <br>доход</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Чистый доход (минус УК, минус налоги)</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>ROI (return on investment)</p>
                                    </div>
                                </div>
                                <div
                                    class="w-full justify-between grid grid-cols-[repeat(7,_140px)] lg:grid lg:grid-cols-[repeat(7,_minmax(180px,_183px))] md:flex items-stretch gap-x-[10px] md:gap-x-[20px]">
                                    <div
                                        class=" w-full md:w-[189px] lg:w-full shrink-0 border-t border-b border-whiteOp-300 md:border-none py-5 md:py-0">
                                        <p class="font-bold text-wrap text-white text-xs md:text-[14px] md:text-end">
                                            Пессимистический <br>прогноз
                                        </p>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl md:leading-6">
                                            70 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">

                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            70 %
                                        </p>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">

                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            1 470 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            17 640 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            12 348 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            11 %
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="w-full justify-between grid grid-cols-[repeat(7,_140px)] lg:grid lg:grid-cols-[repeat(7,_minmax(180px,_183px))] md:flex items-stretch gap-x-[10px] md:gap-x-[20px]">
                                    <div
                                        class="w-full md:w-[189px] lg:w-full shrink-0 border-t border-b border-whiteOp-300 md:border-none py-5 md:py-0">
                                        <p class="font-bold text-white text-xs md:text-[14px] md:text-end">
                                            Реалистичный <br>прогноз
                                        </p>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            95 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            80 %
                                        </p>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            2 280 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            27 360 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            19 152 $
                                        </p>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            17 %
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="w-full justify-between grid grid-cols-[repeat(7,_140px)] lg:grid lg:grid-cols-[repeat(7,_minmax(180px,_183px))] md:flex items-stretch gap-x-[10px] md:gap-x-[20px]">
                                    <div
                                        class="w-full md:w-[189px] lg:w-full shrink-0 border-t border-b border-whiteOp-300 md:border-none py-5 md:py-0">
                                        <p class="font-bold text-white text-xs md:text-[14px] md:text-end">
                                            Оптичистичный <br>прогноз
                                        </p>
                                    </div>
                                    <div
                                        class=" whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            100 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            90 %
                                        </p>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            2 700 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            32 400 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            22 680 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            21 %
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else-if="type === 'option2'" class="bg-blue-600 rounded-2xl px-5 py-[30px] md:p-[30px]  3xl:p-[50px]">
                        <div
                            class="xl:flex xl:items-center xl:justify-between xl:gap-[52px] pb-5 xl:pb-[50px] border-b border-whiteOp-300">
                            <h2 class="text-white font-bold text-2xl mb-5 md:text-2xl 3xl:text-3xl lg:mb-0">
                                Виллы
                            </h2>

                            <div class="xl:flex items-stretch xl:gap-5">
                                <div
                                    class="p-[15px] border border-whiteOp-300 rounded-[15px] mb-[10px] xl:py-[30px] 3xl:p-[30px] w-full lg:max-w-[320px] xl:mb-0">
                                    <div
                                        class="flex gap-3 items-center mb-[10px] md:flex-col md:items-start md:gap-0 md:mb-[15px]">
                                        <h3
                                            class="font-bold text-white text-xl before:block before:h-[6px] before:w-[6px] before:bg-blue-400 before:rounded flex items-center before:mr-[15px] md:text-2xl 3xl:text-3xl md:before:h-[10px] md:before:w-[10px]">
                                            110 000 $
                                        </h3>
                                        <span class="text-sm text-[#FFFFFF99] leading-3 md:text-xs">
                                            *включая <br class="md:hidden">налоги
                                        </span>
                                    </div>
                                    <p class="text-white text-sm 3xl:text-base">
                                        Цена на этапе строительства
                                    </p>
                                </div>
                                <div
                                    class="p-[15px] border justify-between border-whiteOp-300 rounded-[15px] mb-[10px] xl:py-[30px] 3xl:p-[30px] w-full lg:max-w-[320px] xl:mb-0">
                                    <div
                                        class="flex gap-3 items-center mb-[10px] md:flex-col md:items-start md:gap-0 md:mb-[15px]">
                                        <h3
                                            class="font-bold text-white text-xl before:block before:h-[6px] before:w-[6px] before:bg-blue-400 before:rounded flex items-center before:mr-[15px] md:text-2xl 3xl:text-3xl md:before:h-[10px] md:before:w-[10px]">
                                            20%
                                        </h3>
                                        <span class="text-sm text-[#FFFFFF99] leading-3 md:text-xs">
                                            *включая <br class="md:hidden">налоги
                                        </span>
                                    </div>
                                    <p class="text-white text-sm 3xl:text-base">
                                        Управление +
                                        операционные расходы
                                    </p>
                                </div>
                                <div
                                    class="p-[15px] border border-whiteOp-300 rounded-[15px] xl:py-[30px] 3xl:p-[30px] w-full lg:max-w-[320px]">
                                    <div
                                        class="flex gap-3 items-center mb-[10px] md:flex-col md:items-start md:gap-0 md:mb-[15px]">
                                        <h3
                                            class="font-bold text-white text-xl before:block before:h-[6px] before:w-[6px] before:bg-blue-400 before:rounded flex items-center before:mr-[15px] md:text-2xl 3xl:text-3xl md:before:h-[10px] md:before:w-[10px]">
                                            180 000 $
                                        </h3>
                                        <span class="text-sm text-[#FFFFFF99] leading-3 3xl:text-xs">
                                            *включая <br class="md:hidden">налоги
                                        </span>
                                    </div>
                                    <p class="text-white text-sm md:text-base">
                                        Стоимость после
                                        окончания строительства
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="about-scroll w-full overflow-x-auto mt-5 pb-5 ">
                            <div class="text-white w-full flex flex-col gap-y-[15px]">
                                <!-- Headers -->
                                <div
                                    class="font-bold justify-between w-full grid grid-cols-[repeat(7,_140px)] lg:grid lg:grid-cols-[repeat(7,_minmax(180px,_183px))] md:flex items-stretch  gap-x-[10px] md:gap-x-[20px] md:mb-[10px]">
                                    <div
                                        class="w-full md:w-[189px] lg:w-full shrink-0  py-5 md:py-0">
                                        
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Стоимость <br>за сутки</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Заполняемость</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Месячная <br>выручка</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Годовой <br>доход</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>Чистый доход (минус УК, минус налоги)</p>
                                    </div>
                                    <div class="w-full md:w-[124px] lg:w-full shrink-0 text-xs md:text-[13px] font-normal text-center md:text-start">
                                        <p>ROI (return on investment)</p>
                                    </div>
                                </div>
                                <div
                                    class="w-full justify-between grid grid-cols-[repeat(7,_140px)] lg:grid lg:grid-cols-[repeat(7,_minmax(180px,_183px))] md:flex items-stretch gap-x-[10px] md:gap-x-[20px]">
                                    <div
                                        class=" w-full md:w-[189px] lg:w-full shrink-0 border-t border-b border-whiteOp-300 md:border-none py-5 md:py-0">
                                        <p class="font-bold text-wrap text-white text-xs md:text-[14px] md:text-end">
                                            Пессимистический <br>прогноз
                                        </p>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl md:leading-6">
                                            70 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">

                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            70 %
                                        </p>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">

                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            1 470 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            17 640 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            12 348 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="w-full md:w-[124px] lg:w-full shrink-0  whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-blue-400 py-[13px] px-1 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            11 %
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="w-full justify-between grid grid-cols-[repeat(7,_140px)] lg:grid lg:grid-cols-[repeat(7,_minmax(180px,_183px))] md:flex items-stretch gap-x-[10px] md:gap-x-[20px]">
                                    <div
                                        class="w-full md:w-[189px] lg:w-full shrink-0 border-t border-b border-whiteOp-300 md:border-none py-5 md:py-0">
                                        <p class="font-bold text-white text-xs md:text-[14px] md:text-end">
                                            Реалистичный <br>прогноз
                                        </p>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            95 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            80 %
                                        </p>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            2 280 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            27 360 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            19 152 $
                                        </p>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#DBA51B99] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            17 %
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="w-full justify-between grid grid-cols-[repeat(7,_140px)] lg:grid lg:grid-cols-[repeat(7,_minmax(180px,_183px))] md:flex items-stretch gap-x-[10px] md:gap-x-[20px]">
                                    <div
                                        class="w-full md:w-[189px] lg:w-full shrink-0 border-t border-b border-whiteOp-300 md:border-none py-5 md:py-0">
                                        <p class="font-bold text-white text-xs md:text-[14px] md:text-end">
                                            Оптичистичный <br>прогноз
                                        </p>
                                    </div>
                                    <div
                                        class=" whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            100 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            90 %
                                        </p>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            2 700 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            32 400 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            22 680 $
                                        </p>
                                        <span class="text-xs text-[#FFFFFF99]">*включая налоги</span>
                                    </div>
                                    <div
                                        class="whitespace-nowrap flex flex-col items-center justify-center  min-h-[-webkit-fill-available] rounded-[8px] bg-[#9B4CD999] py-[13px] px-1 w-full md:w-[124px] lg:w-full shrink-0 md:py-[10px]">
                                        <p class="font-bold text-base 3xl:text-2xl 3xl:leading-6">
                                            21 %
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>

            </div>
        </div>
    </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    position: absolute;
}
</style>

<script setup>
import { ref } from 'vue'

// const option1 = ref('option1')
// const option2 = ref('option2')
const type = ref('option1')

const handleChange = (newType) => {
    console.log(newType?.target.value);
    type.value = newType?.target.value
}
</script>
