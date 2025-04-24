<template>
    <footer id="contacts" class="mt-a bg-blue-600 pt-12 md:pt-24 mt-auto z-10">
        <h2 class="text-center text-white text-3xl font-bold mb-7 block lg:hidden">{{ $t('contacts') }}</h2>

        <a :href="toolkitStore?.settings?.soc_link_whats" target="_blank"
            class="flex lg:hidden fixed w-full z-10 h-12 bg-blue-400 justify-center items-center transition-all duration-300"
            :class="isVisible ? 'bottom-0' : '-bottom-12 pointer-events-none'">
            <NuxtImg src="/img/index/head-whatss.svg" class="max-w-5 w-full relative z-10" alt="ic" loading="lazy" />
            <span class="text-white ml-3">
                {{ $t('connect_in_whatsapp') }}
            </span>
        </a>


        <div class="container">

            <div @click="handleScrollUp" :class="isShowArrowUp ? 'opacity-100' : 'opacity-0'"
                class="fixed lg:w-[70px] lg:h-[70px] w-[35px] h-[35px] lg:right-[45px] lg:bottom-[100px] right-5 bottom-5 flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-all z-50 bg-blue-500 rounded-full">
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" class="lg:w-full w-1/2"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.1976 4.95971L1.57866 13.5787L1.18324e-06 12L11.3137 0.686292L22.6274 12L21.0488 13.5787L12.4302 4.96009L12.4302 21.6296L10.1976 21.6297L10.1976 4.95971Z"
                        fill="white" />
                </svg>
            </div>

            <div class="xl:flex xl:items-center gap-5 justify-between md:mb-24">

                <!-- v-if="$viewport.isLessThan('tablet')" -->
                <!-- <NuxtImg v-if="toolkitStore?.settings?.footer_img && !$viewport.isLessThan('tablet')"
                    :src="`https://api.avalonbali.com/assets/${toolkitStore?.settings?.footer_img}?width=380&height=392`"
                    class="lg:max-w-[379px] md:max-w-[338px] w-full hidden xl:block" alt="ph" /> -->

                <!-- <div class="logo-clip-path hidden lg:block">
                    <video loop class="w-[379px] h-[392px] object-cover" muted autoplay
                        src="/assets/video/video-logo.webm"></video>
                </div> -->
                <div class="hidden lg:block">
                    <video v-if="isVideoLoaded" loop class="w-full h-[392px] object-cover" muted autoplay
                        @error="handleError"
                        :src="'https://api.avalonbali.com/assets/' + toolkitStore?.settings?.footer_video + '?width=392&height=392&format=webm'"></video>
                    <NuxtImg v-else
                        :src="'https://api.avalonbali.com/assets/' + toolkitStore?.settings?.footer_img"
                        loading="lazy" class="w-full h-[392px]" alt="ph" />
                </div>

                <div class="w-full xl:w-fit sm:flex justify-between xl:block">
                    <div class="md:mb-[30px] md:pb-[30px] border-b border-white/10 mb-5 pb-5">
                        <a :href="toolkitStore?.settings?.soc_link_whats" target="_blank"
                            class="flex items-center gap-4 mb-7 md:gap-4 lg:gap-5 group">

                            <div
                                class="w-[45px] h-[45px] 3xl:w-[70px] 3xl:h-[70px] bg-blue-500 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 3xl:w-8 3xl:h-8" width="33" height="32" viewBox="0 0 33 32"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.7622 4.74554C24.7607 1.74261 20.7695 0.0875375 16.5174 0.0859375C7.75514 0.0859375 0.624071 7.2138 0.620871 15.9761C0.619271 18.7769 1.35127 21.511 2.7422 23.9203L0.585938 31.9139L8.91367 29.9454C11.2355 31.2121 13.8486 31.8789 16.5094 31.8805H16.5158C25.2765 31.8805 32.4074 24.751 32.4122 15.9903C32.4154 11.743 30.7635 7.75007 27.7622 4.74554ZM24.2945 21.6558C23.9635 22.5835 22.3419 23.4779 21.613 23.5431C20.8842 23.6099 20.2014 23.8726 16.8467 22.5501C12.8094 20.9587 10.2599 16.8195 10.0626 16.5553C9.86367 16.2895 8.44101 14.4022 8.44101 12.4479C8.44101 10.4937 9.46741 9.53247 9.83194 9.1362C10.1963 8.73834 10.6261 8.63967 10.8918 8.63967C11.1559 8.63967 11.4217 8.63967 11.6525 8.64927C11.9357 8.66047 12.2493 8.67474 12.5469 9.33514C12.9001 10.1213 13.6719 12.0851 13.7706 12.2841C13.8693 12.483 13.9361 12.7153 13.8041 12.9794C13.6719 13.2437 13.6051 13.4091 13.4078 13.6415C13.2089 13.8738 12.9909 14.1587 12.8126 14.3369C12.6137 14.5342 12.4067 14.7507 12.6375 15.147C12.8699 15.5447 13.6655 16.845 14.8463 17.8969C16.3646 19.2495 17.6425 19.6681 18.0403 19.8686C18.4382 20.0675 18.6689 20.0341 18.9013 19.7683C19.1337 19.5042 19.8943 18.6098 20.1585 18.2119C20.4226 17.8141 20.6885 17.881 21.0529 18.013C21.4173 18.1451 23.3699 19.1063 23.7662 19.3053C24.1641 19.5042 24.4282 19.6029 24.5269 19.7683C24.6255 19.9323 24.6255 20.7279 24.2945 21.6558Z"
                                        fill="white" style="fill:white;fill-opacity:1;" />
                                </svg>
                            </div>

                            <div>
                                <span class="text-white/40 text-sm md:text-base md:mb-2">
                                    WhatsApp 24/7 online
                                </span>
                                <p
                                    class="text-white font-bold text-sm md:text-[16px] 3xl:text-xl group-hover:text-blue-400 transition-all">
                                    {{ toolkitStore?.settings?.phone }}
                                </p>
                            </div>
                        </a>
                        <a :href="`mailto:${toolkitStore?.settings?.email}`" target="_blank"
                            class="flex items-center gap-4 mb-7 md:gap-4 lg:gap-5 group">

                            <div
                                class="w-[45px] h-[45px] 3xl:w-[70px] 3xl:h-[70px] bg-blue-500 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-5 3xl:w-9 3xl:h-8" viewBox="0 0 38 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.54 0.959961H4.30303C2.29302 0.959961 0.648438 2.60454 0.648438 4.61464V26.5423C0.648438 28.5524 2.29302 30.1969 4.30303 30.1969H33.54C35.55 30.1969 37.1946 28.5524 37.1946 26.5423V4.61464C37.1946 2.60454 35.55 0.959961 33.54 0.959961ZM32.8091 8.72608L20.8584 16.1997C19.6707 16.949 18.1723 16.949 16.9846 16.1997L5.03398 8.72608C4.85072 8.62319 4.69031 8.4842 4.56237 8.31755C4.43434 8.1509 4.34157 7.95996 4.28945 7.75646C4.23741 7.55287 4.22721 7.34084 4.25951 7.1332C4.29173 6.92556 4.36578 6.72661 4.47719 6.54841C4.58851 6.37029 4.73492 6.21654 4.90739 6.09653C5.07986 5.9766 5.27493 5.89285 5.48071 5.85043C5.68658 5.80801 5.89878 5.80776 6.10473 5.84976C6.31059 5.89176 6.50583 5.97508 6.67856 6.09476L18.9216 13.7512L31.1645 6.09476C31.3373 5.97508 31.5324 5.89176 31.7384 5.84976C31.9443 5.80776 32.1565 5.80801 32.3623 5.85043C32.5681 5.89285 32.7632 5.9766 32.9356 6.09653C33.1082 6.21654 33.2545 6.37029 33.3658 6.54841C33.4773 6.72661 33.5513 6.92556 33.5836 7.1332C33.6158 7.34084 33.6056 7.55287 33.5536 7.75646C33.5015 7.95996 33.4087 8.1509 33.2808 8.31755C33.1527 8.4842 32.9923 8.62319 32.8091 8.72608Z"
                                        fill="white" style="fill:white;fill-opacity:1;" />
                                </svg>
                            </div>

                            <div>
                                <span class="text-white/40 text-sm md:text-base md:mb-2">
                                    Email us
                                </span>
                                <p
                                    class="text-white font-bold text-sm md:text-[16px] 3xl:text-xl group-hover:text-blue-400 transition-all">
                                    {{ toolkitStore?.settings?.email }}
                                </p>
                            </div>
                        </a>
                        <a :href="toolkitStore?.settings?.soc_link_location" target="_blank"
                            class="flex items-center gap-4 md:gap-4 lg:gap-5 group">

                            <div
                                class="w-[45px] h-[45px] 3xl:w-[70px] 3xl:h-[70px] bg-blue-500 rounded-full flex items-center justify-center">
                                <!-- <NuxtImg loading="lazy" class="w-2/3" format="png" src="/img/icons/location.png" /> -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                    <path fill="white"
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                                </svg>
                            </div>

                            <div>
                                <span class="text-white/40 text-sm md:text-base md:mb-2">
                                    {{ $t('address') }}
                                </span>
                                <p
                                    class="text-white font-bold text-sm md:text-[16px] text-ellipsis w-[300px] overflow-hidden 3xl:text-xl group-hover:text-blue-400 transition-all">
                                    {{ toolkitStore?.settings?.address }}
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="flex gap-[5px] mb-5">
                        <a aria-label="link" v-if="toolkitStore?.settings?.soc_link_whats" target="_blank"
                            :href="toolkitStore?.settings?.soc_link_whats"
                            class="w-[45px] h-[45px] md:w-[60px] md:h-[60px] border border-whiteOp-300 rounded-full hover:bg-white transition-all flex items-center justify-center group">
                            <svg class="fill-white group-hover:fill-blue-600 w-[45%] transition-all" width="25"
                                height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.9118 4.14053C18.6096 1.83715 15.5481 0.567634 12.2866 0.566406C5.56551 0.566406 0.0956566 6.0338 0.093202 12.7549C0.0919747 14.9032 0.653452 17.0004 1.72036 18.8485L0.0664062 24.9799L6.45416 23.47C8.23513 24.4416 10.2395 24.953 12.2804 24.9543H12.2853C19.0052 24.9543 24.4749 19.4856 24.4786 12.7658C24.4811 9.50791 23.214 6.44515 20.9118 4.14053ZM18.2519 17.1115C17.9981 17.8231 16.7542 18.5091 16.1951 18.5591C15.6361 18.6104 15.1124 18.8119 12.5392 17.7974C9.44236 16.5768 7.4868 13.4018 7.33544 13.1991C7.18285 12.9953 6.0916 11.5476 6.0916 10.0486C6.0916 8.54961 6.8789 7.81233 7.15851 7.50837C7.43802 7.20319 7.76764 7.12751 7.97147 7.12751C8.17408 7.12751 8.37791 7.12751 8.55494 7.13487C8.77217 7.14346 9.01271 7.15441 9.24099 7.66096C9.51191 8.26396 10.104 9.77034 10.1796 9.92293C10.2553 10.0755 10.3066 10.2537 10.2053 10.4563C10.104 10.659 10.0527 10.7859 9.90136 10.9642C9.74877 11.1423 9.58155 11.3609 9.44482 11.4975C9.29222 11.6489 9.1335 11.815 9.31053 12.1189C9.48879 12.424 10.0991 13.4214 11.0048 14.2282C12.1694 15.2658 13.1495 15.5868 13.4547 15.7406C13.7599 15.8932 13.9368 15.8675 14.1151 15.6637C14.2934 15.4611 14.8768 14.7751 15.0794 14.4699C15.282 14.1647 15.486 14.216 15.7655 14.3173C16.045 14.4186 17.5428 15.1559 17.8467 15.3085C18.1519 15.4611 18.3545 15.5368 18.4302 15.6637C18.5059 15.7895 18.5059 16.3998 18.2519 17.1115Z" />
                            </svg>
                        </a>
                        <a aria-label="link" v-if="toolkitStore?.settings?.soc_link_inst" target="_blank"
                            :href="toolkitStore?.settings?.soc_link_inst"
                            class="w-[45px] h-[45px] md:w-[60px] md:h-[60px] border border-whiteOp-300 rounded-full hover:bg-white transition-all flex items-center justify-center group">
                            <svg class="fill-white group-hover:fill-blue-600 w-[45%] transition-all" width="25"
                                height="26" viewBox="0 0 25 26" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.2727 2.71001C15.5519 2.71001 15.9401 2.72443 17.2298 2.78191C18.4283 2.83468 19.0755 3.03606 19.5069 3.20389C20.0775 3.42439 20.4897 3.69285 20.9164 4.11953C21.3478 4.55092 21.6116 4.95848 21.8321 5.52895C21.9998 5.96044 22.2012 6.61243 22.2539 7.80606C22.3114 9.10052 22.3258 9.48885 22.3258 12.7631C22.3258 16.0423 22.3114 16.4306 22.2539 17.7202C22.2012 18.9187 21.9998 19.5659 21.8321 19.9974C21.6116 20.5679 21.3431 20.9801 20.9164 21.4068C20.4849 21.8383 20.0775 22.1019 19.5069 22.3224C19.0755 22.4903 18.4235 22.6915 17.2298 22.7443C15.9354 22.8019 15.5471 22.8162 12.2727 22.8162C8.99366 22.8162 8.60533 22.8019 7.31567 22.7443C6.11724 22.6915 5.46995 22.4903 5.03857 22.3224C4.46809 22.1019 4.05573 21.8335 3.62904 21.4068C3.19766 20.9753 2.934 20.5679 2.7134 19.9974C2.54567 19.5659 2.34429 18.9139 2.29152 17.7202C2.23404 16.4258 2.21962 16.0375 2.21962 12.7631C2.21962 9.48405 2.23404 9.09571 2.29152 7.80606C2.34429 6.60762 2.54567 5.96044 2.7134 5.52895C2.934 4.95848 3.20247 4.54611 3.62904 4.11953C4.06053 3.68804 4.46809 3.42439 5.03857 3.20389C5.46995 3.03606 6.12194 2.83468 7.31567 2.78191C8.60533 2.72443 8.99366 2.71001 12.2727 2.71001ZM12.2727 0.5C8.94088 0.5 8.52382 0.514421 7.21503 0.571898C5.91106 0.629477 5.01453 0.840364 4.23798 1.14238C3.42777 1.45881 2.74224 1.87587 2.06141 2.56141C1.37587 3.24214 0.958807 3.92777 0.642375 4.73317C0.340364 5.51453 0.129477 6.40625 0.0718978 7.71023C0.0144206 9.02382 0 9.44088 0 12.7727C0 16.1046 0.0144206 16.5216 0.0718978 17.8304C0.129477 19.1344 0.340364 20.0309 0.642375 20.8076C0.958807 21.6177 1.37587 22.3033 2.06141 22.984C2.74224 23.6648 3.42777 24.0866 4.23317 24.3983C5.01453 24.7003 5.90625 24.9112 7.21023 24.9687C8.51901 25.0262 8.93608 25.0406 12.2679 25.0406C15.5998 25.0406 16.0168 25.0262 17.3256 24.9687C18.6296 24.9112 19.5261 24.7003 20.3028 24.3983C21.1082 24.0866 21.7937 23.6648 22.4744 22.984C23.1552 22.3033 23.577 21.6177 23.8887 20.8123C24.1907 20.0309 24.4017 19.1392 24.4591 17.8352C24.5167 16.5264 24.531 16.1094 24.531 12.7775C24.531 9.44569 24.5167 9.02862 24.4591 7.71984C24.4017 6.41586 24.1907 5.51934 23.8887 4.74268C23.5866 3.92777 23.1696 3.24214 22.484 2.56141C21.8033 1.88068 21.1177 1.45881 20.3123 1.14718C19.5309 0.84517 18.6392 0.634284 17.3352 0.576704C16.0216 0.51442 15.6046 0.5 12.2727 0.5Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.4332 2.5459H5.11506C3.42055 2.5459 2.04688 3.91957 2.04688 5.61408V19.9323C2.04688 21.6268 3.42055 23.0004 5.11506 23.0004H19.4332C21.1278 23.0004 22.5014 21.6268 22.5014 19.9323V5.61408C22.5014 3.91957 21.1278 2.5459 19.4332 2.5459ZM12.272 6.46909C8.79152 6.46909 5.96777 9.29284 5.96777 12.7733C5.96777 16.2537 8.79152 19.0775 12.272 19.0775C15.7524 19.0775 18.5762 16.2537 18.5762 12.7733C18.5762 9.29284 15.7524 6.46909 12.272 6.46909ZM12.272 16.8626C10.014 16.8626 8.18269 15.0313 8.18269 12.7733C8.18269 10.5153 10.014 8.68401 12.272 8.68401C14.5299 8.68401 16.3612 10.5153 16.3612 12.7733C16.3612 15.0313 14.5299 16.8626 12.272 16.8626ZM18.8262 7.69141C19.6364 7.69141 20.298 7.03461 20.298 6.2196C20.298 5.4095 19.6364 4.74789 18.8262 4.74789C18.016 4.74789 17.3545 5.40469 17.3545 6.2196C17.3545 7.0298 18.0112 7.69141 18.8262 7.69141Z" />
                            </svg>
                        </a>
                        <a aria-label="link" v-if="toolkitStore?.settings?.soc_link_fb" target="_blank"
                            :href="toolkitStore?.settings?.soc_link_fb"
                            class="w-[45px] h-[45px] md:w-[60px] md:h-[60px] border border-whiteOp-300 rounded-full hover:bg-white transition-all flex items-center justify-center group">
                            <svg class="fill-white group-hover:fill-blue-600 w-[45%] transition-all" width="11"
                                height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.21813 20V10.8777H10.2789L10.7381 7.32156H7.21813V5.05147C7.21813 4.0222 7.50278 3.32076 8.98042 3.32076L10.862 3.31999V0.13923C10.5366 0.0969453 9.41964 0 8.11964 0C5.40505 0 3.54658 1.65697 3.54658 4.69927V7.32156H0.476562V10.8777H3.54658V20H7.21813Z" />
                            </svg>
                        </a>
                        <a aria-label="link" v-if="toolkitStore?.settings?.soc_link_yt" target="_blank"
                            :href="toolkitStore?.settings?.soc_link_yt"
                            class="w-[45px] h-[45px] md:w-[60px] md:h-[60px] border border-whiteOp-300 rounded-full hover:bg-white transition-all flex items-center justify-center group">
                            <svg class="fill-white group-hover:fill-blue-600 w-[45%] transition-all" width="20"
                                height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.6488 2.31398C18.4327 1.51072 17.7994 0.877518 16.9963 0.661224C15.529 0.259766 9.65993 0.259766 9.65993 0.259766C9.65993 0.259766 3.79105 0.259766 2.32381 0.646004C1.53611 0.862068 0.887344 1.51083 0.67128 2.31398C0.285156 3.78111 0.285156 6.82375 0.285156 6.82375C0.285156 6.82375 0.285156 9.88173 0.67128 11.3335C0.887573 12.1367 1.52066 12.7699 2.32392 12.9862C3.8065 13.3877 9.66016 13.3877 9.66016 13.3877C9.66016 13.3877 15.529 13.3877 16.9963 13.0015C17.7995 12.7853 18.4327 12.1521 18.649 11.349C19.035 9.88173 19.035 6.8392 19.035 6.8392C19.035 6.8392 19.0505 3.78111 18.6488 2.31398ZM7.79134 9.63465V4.01286L12.6718 6.82375L7.79134 9.63465Z" />
                            </svg>
                        </a>
                        <a aria-label="link" v-if="toolkitStore?.settings?.soc_link_tg" target="_blank"
                            :href="toolkitStore?.settings?.soc_link_tg"
                            class="w-[45px] h-[45px] md:w-[60px] md:h-[60px] border border-whiteOp-300 rounded-full hover:bg-white transition-all flex items-center justify-center group">
                            <!-- <NuxtImg loading="lazy" class="w-2/3" src="/img/icons/location.png" /> -->
                            <svg class="fill-white group-hover:fill-blue-600 transition-all"
                                xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38" />
                            </svg>
                        </a>
                    </div>

                </div>

                <form @submit.prevent="submitForm"
                    class="flex xl:max-w-[381px] lg:max-w-full flex-col p-5 md:px-5 md:py-12 border border-whiteOp-300 rounded-2xl text-center lg:p-12 relative mb-14 md:mb-0">
                    <NuxtImg loading="lazy" src="/img/index/dot-decor-2.webp"
                        class="absolute right-[-1px] bottom-[-1px] w-5 md:w-8" alt="decor" />
                    <h2 class="font-bold text-white md:text-2xl mb-4 3xl:text-3xl md:mb-7 leading-[100%]">
                        {{ $t('want_know_more') }}
                    </h2>
                    <div class="flex flex-col gap-3 lg:gap-0">
                        <input type="text" v-model="name" placeholder="Имя"
                            class="bg-white/10 lg:mb-[10px] rounded-xl text-white text-sm py-4 leading-[90%] px-5 outline-none md:p-5 lg:p-6 md:text-base w-full">
                        <div class="phone-vti">
                            <VueTelInput :input-options="inputOptions" :value="phone" :autocomplete="false"
                                :disabledFormatting="true" :use-masking="false" ref="maskedInput" v-model="phone"
                                :preferred-countries="preferredCountries" @input="inputPhoneNumber"
                                :only-countries="sortedCountries" />
                        </div>
                        <p class="text-red-700 text-left transition-all h-full" :class="{
                            'max-h-10 opacity-100 mt-2': isError,
                            'max-h-0 opacity-0': !isError
                        }">
                            {{ $t('fill_all_fields') }}
                        </p>
                        <p class="text-white/50 text-left transition-all h-full" :class="{
                            'max-h-10 opacity-100 mt-2': isSending,
                            'max-h-0 opacity-0': !isSending
                        }">
                            {{ $t('wait_for_send') }}
                        </p>
                        <p class="text-green-500 text-left transition-all h-full" :class="{
                            'max-h-10 opacity-100 mt-2': isSuccess,
                            'max-h-0 opacity-0': !isSuccess
                        }">
                            {{ $t('message_sent_successfuly') }}
                        </p>

                        <button type="submit"
                            class="white-button w-full leading-[110%] lg:mt-8 h-[48px] py-2 xl:h-[64px]">
                            {{ $t('send_mail') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="bg-blue-500 py-7 md:py-2">
            <div class="container">
                <div class="flex items-center justify-between gap-8">

                    <!-- <video loop class="max-w-[96px] hidden md:block" muted autoplay
                        :src="'https://api.avalonbali.com/assets/' + toolkitStore?.settings?.footer_video + '?width=392&height=392&format=webm'"
                        @error="handleError"></video> -->
                    <NuxtImg
                        :src="'https://api.avalonbali.com/assets/' + toolkitStore?.settings?.footer_img"
                        format="webp" loading="lazy" class="max-w-[96px] block md:hidden" alt="ph" />

                    <!-- <div class="logo-clip-path md:hidden">
                        <video loop class="w-[96px] h-[100px] object-cover" muted autoplay>
                            <source src="/assets/video/video-logo.webm" type="video/webm">
                            <source src="/assets/video/video-logo.mp4" type="video/mp4">
                        </video>
                    </div> -->

                    <ul class="md:flex md:items-center py-2 md:justify-center md:w-full">
                        <li
                            class="text-white/60 text-xs lg:text-sm mb-2 md:mb-0 md:border-r md:pr-[14px] md:mr-[14px] border-white/10 last:pr-0 last:mr-0 last:border-none">
                            <NuxtLink href="/cooperation" class="hover:text-blue-400 transition-all">
                                {{pagesStore.pagesList?.filter(item => item.slug === 'cooperation')[0]?.translations
                                    ?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title}}
                            </NuxtLink>
                        </li>
                        <li
                            class="text-white/60 text-xs lg:text-sm mb-2 md:mb-0 md:border-r md:pr-[14px] md:mr-[14px] border-white/10 last:pr-0 last:mr-0 last:border-none">
                            <NuxtLink href="/career" class="hover:text-blue-400 transition-all">
                                {{pagesStore.pagesList?.filter(item => item.slug === 'career')[0]?.translations
                                    ?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title}}
                            </NuxtLink>
                        </li>
                        <li
                            class="text-white/60 text-xs lg:text-sm mb-2 md:mb-0 md:border-r md:pr-[14px] md:mr-[14px] border-white/10 last:pr-0 last:mr-0 last:border-none">
                            <NuxtLink href="/docs/privacy-police" class="hover:text-blue-400 transition-all">
                                {{pagesStore.pagesList?.filter(item => item.slug ===
                                    'privacy-police')[0]?.translations?.filter(item =>
                                        item.languages_code.includes(langStore.lang))[0]?.title}}
                            </NuxtLink>
                        </li>
                        <li
                            class="text-white/60 text-xs lg:text-sm mb-2 md:mb-0 md:border-r md:pr-[14px] md:mr-[14px] border-white/10 last:pr-0 last:mr-0 last:border-none">
                            <NuxtLink href="/docs/terms" class="hover:text-blue-400 transition-all">
                                {{pagesStore.pagesList?.filter(item => item.slug ===
                                    'terms')[0]?.translations?.filter(item =>
                                        item.languages_code.includes(langStore.lang))[0]?.title}}
                            </NuxtLink>
                        </li>
                        <li
                            class="text-white/60 text-xs lg:text-sm mb-2 md:mb-0 md:border-r md:pr-[14px] md:mr-[14px] border-white/10 last:pr-0 last:mr-0 last:border-none">
                            <p>
                                {{ toolkitStore?.settings.copyright }}
                                <!-- {{ copyright }} -->
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</template>



<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { usePagesStore } from '~/stores/functions/pages';
import { useToolkit } from '~/stores/functions/toolkit';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import iso31661 from 'iso-3166-1';
import IMask from 'imask';


const isVideoLoaded = ref(true)

const handleError = (e) => {
    isVideoLoaded.value = false
}


const isVisible = ref(false);
let lastScrollY = 0;

const handleScrollWS = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Прокручиваем вниз — показываем элемент
        isVisible.value = true;
    } else {
        // Прокручиваем вверх — скрываем элемент
        isVisible.value = false;
    }

    lastScrollY = currentScrollY;
};

onMounted(() => {
    window.addEventListener("scroll", handleScrollWS);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollWS);
});









const pagesStore = usePagesStore();
const langStore = useLangStore();
const isShowArrowUp = ref(false);

// import { useNuxtApp } from '#app'
// const { $viewport } = useNuxtApp()

// const regExp = /^\d{8,12}$/;

const handleScroll = () => {
    const pointToShow = document.body.offsetHeight * 60 / 100
    isShowArrowUp.value = window.scrollY > pointToShow;
};

const handleScrollUp = () => {
    window.scrollTo(0, 0);
}

const inputPhoneNumber = () => {
    phone.value = phone.value.replace(/(?!^\+)[^\d]/g, '');
}

const name = ref(null);
const phone = ref(null);
const isError = ref(null);
const isSending = ref(false);
const isSuccess = ref(false);
const maskedInput = ref(null);

const toolkitStore = useToolkit();

const resetForm = () => {
    name.value = '';
    phone.value = '';
};

const placeholderLang = {
    'ru': 'Введите ваш номер телефона',
    'en': 'Enter your phone number',
    'ua': 'Введіть ваш номер телефону'
}

const inputOptions = {
    showDialCode: true,
    autoFormat: false,
    placeholder: placeholderLang[langStore.lang],
    maxlength: 15
};


const countryChanged = (newCountry) => {
    // Обрабатываем изменение страны
}

const submitForm = async () => {
    if (!name.value || !phone.value || phone.value.length < 10) {
        return isError.value = true;
    }
    // else if (!regExp.test(phone.value)) {
    //     return isError.value = true;
    // }
    else {
        isError.value = false;
    }

    isSending.value = true;

    try {
        const { data } = await useFetch('https://crm.g-plus.app/api/actions', {
            method: 'POST',
            body: {
                action: 'partner-custom-form',
                token: 'BnYxulkF_XC5Aq7Re9oO80vbIu-ZblVbALCDNDdAJE0',
                partner_id: '25545',
                name: name.value,
                phone: phone.value,
                // building_id: '123',
                lang: 'ua',
                note: 'Запит з форми контактів',
                // adv_id: '123123123'
            }
        });

        isSending.value = false;
        isSuccess.value = true;
        resetForm();
    } catch (err) {
        isSending.value = false;
    }
};

const preferredCountries = [
    'id', // Индонезия
    'ua', // Украина
    'ru', // Россия
    'by', // Беларусь
    'kz', // Казахстан
    'us', // США
    'gb', // Англия
    'fr', // Франция
    'cn', // КНР
];

const allCountries = iso31661.all().map(country => country.alpha2);

const sortedCountries = computed(() => {
    const preferredSet = new Set(preferredCountries);
    const unselectedCountries = allCountries.filter(country => !preferredSet.has(country));
    return [...preferredCountries, ...unselectedCountries];
});

onMounted(() => {
    //   setTimeout(() => {

    //     IMask(maskedInput.value, {
    //       mask: '+{7}(000)000-00-00' // Пример маски для телефона
    //     });
    //   }, 2000)

    // Добавляем обработчик событий прокрутки
    window?.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window?.removeEventListener('scroll', handleScroll);
});

// const copyright = `© ${new Date().getFullYear()} PT Avalon Group Bali`

</script>
