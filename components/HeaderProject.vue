<template>

  <header class="z-30 transition-all absolute w-full">
    <div
      class="header-wrapper w-full bg-blue-500 h-fit py-4 lg:py-10 border-b-2 border-b-whiteOp-300 md:border-none transition-all"
      :class="isOpenBurger ? 'bg-blue-500' : 'md:bg-transparent'">


      <div class="header__inner px-5 flex items-center justify-between gap-4 lg:gap-8 relative">
        <!-- :href="`/projects/${projectsStore.currentProject?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.slug}`" -->
        <div class="flex items-center gap-4 lg:gap-8">
          <button class="max-w-10 w-full md:max-w-20 lg:mr-2" v-if="projectsStore.currentProject?.logo">
            <NuxtImg :src="`https://api.avalonbali.com/assets/${projectsStore.currentProject?.logo}`"
              loading="lazy" class="w-full" alt="Vector" />
          </button>
          <!-- <div class="relative mr-auto max-w-[60px] lg:absolute lg:-bottom-10 lg:ml-5">
            <NuxtImg src="/img/about/ribas.png" class="w-full h-full" alt="Image" loading="lazy" />
          </div> -->


          <div class="items-center gap-[26px] 3xl:gap-9 hidden md:flex">
            <NuxtLink href="/" class="text-white text-[12px] 3xl:text-base relative transition-all
                            before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                            after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                        ">
              Avalon
            </NuxtLink>
            <NuxtLink href="#about" class="text-white text-[12px] 3xl:text-base relative transition-all
                            before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                            after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                        ">
              {{ $t('about_compl') }}
            </NuxtLink>
            <NuxtLink href="#location" class="text-white text-[12px] 3xl:text-base relative
                            before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                            after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                        ">
              {{ $t('location') }}
            </NuxtLink>
            <NuxtLink href="#apartments" class="text-white text-[12px] 3xl:text-base relative
                            before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                            after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                        ">
              {{ $t('appatments') }}
            </NuxtLink>
            <NuxtLink href="#investors" class="text-white text-[12px] 3xl:text-base relative
                            before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                            after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                        ">
              {{ $t('investors') }}
            </NuxtLink>
            <div class="relative group">
              <button type="button" class="projectsButton flex items-center gap-1 text-white md:text-xs lg:text-sm
                before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
              ">
                {{ $t('else_projects') }}

                <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.63428 3.93725L5.98828 0.25L0.00303125 0.25L2.36528 3.93575C2.43272 4.04304 2.52625 4.13149 2.63713 4.19285C2.74802 4.2542 2.87264 4.28646 2.99937 4.28661C3.12609 4.28676 3.25079 4.2548 3.36182 4.19371C3.47285 4.13261 3.56659 4.04438 3.63428 3.93725Z"
                    fill="white" />
                </svg>

              </button>
              <div
                class="projectsMenu opacity-0 invisible group-hover:opacity-100 group-hover:visible flex transition-all flex-col p-6 rounded-xl bg-blue-500 absolute top-[30px] left-0 border border-whiteOp-300">

                <NuxtLink
                  :href="`/${mainPageLink.replace('/', '')}/projects/${item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.slug}`"
                  v-for="item in projectsStore.projects" :key="item.id" class="text-white md:text-xs lg:text-sm last:mb-0 mb-4 whitespace-nowrap relative
                  before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                  after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                ">
                  {{item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title}}
                </NuxtLink>

              </div>
            </div>
            <NuxtLink href="#contacts" class="text-white text-[12px] 3xl:text-base relative
                            before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                            after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                        ">
              {{ $t('contacts') }}
            </NuxtLink>
          </div>
        </div>


        <div class="flex items-center gap-4 lg:gap-7">
          <button type="button" @click="handleOpenModal"
            class="2xl:flex hidden border border-whiteOp-400 rounded-xl 2xl:p-4 py-3 px-4 text-white md:text-xs 3xl:text-sm font-bold hover:bg-white hover:text-blue-400 hover:border-white transition-all xl:justify-center">
            {{ $t('make_a_meeting') }}
          </button>

          <a :href="`https://wa.me/${toolkitStore?.settings?.phone?.replace(/[^\d+]/g, '')}`"
            class="2xl:flex hidden items-center gap-1 text-white md:text-sm lg:text-base font-bold ">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15.403 2.633C13.708 0.936 11.454 0.001 9.053 0C4.105 0 0.077 4.027 0.075 8.977C0.075 10.559 0.488 12.103 1.273 13.465L0 18.116L4.759 16.867C6.071 17.582 7.547 17.959 9.049 17.96H9.053C14 17.96 18.028 13.933 18.03 8.983C18.03 6.585 17.098 4.33 15.403 2.633ZM9.053 16.445H9.05C7.711 16.444 6.398 16.085 5.252 15.404L4.98 15.242L2.156 15.983L2.909 13.23L2.732 12.948C1.985 11.76 1.591 10.387 1.591 8.977C1.593 4.863 4.94 1.516 9.056 1.516C11.049 1.517 12.922 2.294 14.331 3.704C15.739 5.115 16.515 6.989 16.514 8.983C16.512 13.097 13.165 16.445 9.053 16.445ZM13.146 10.856C12.921 10.743 11.819 10.201 11.613 10.126C11.408 10.051 11.259 10.014 11.109 10.238C10.959 10.462 10.529 10.967 10.398 11.117C10.267 11.267 10.136 11.285 9.912 11.173C9.688 11.061 8.965 10.824 8.108 10.06C7.441 9.465 6.991 8.731 6.86 8.506C6.729 8.281 6.846 8.16 6.959 8.048C7.06 7.948 7.183 7.786 7.295 7.655C7.407 7.524 7.444 7.431 7.519 7.281C7.594 7.131 7.557 7 7.5 6.888C7.444 6.775 6.995 5.671 6.808 5.222C6.627 4.787 6.442 4.845 6.304 4.839C6.174 4.833 6.024 4.831 5.875 4.831C5.725 4.831 5.482 4.887 5.276 5.111C5.07 5.336 4.491 5.878 4.491 6.982C4.491 8.086 5.295 9.153 5.407 9.303C5.519 9.453 6.989 11.718 9.239 12.69C9.775 12.921 10.193 13.059 10.518 13.163C11.055 13.334 11.544 13.309 11.931 13.252C12.362 13.188 13.258 12.71 13.445 12.186C13.632 11.662 13.632 11.213 13.576 11.119C13.52 11.025 13.369 10.968 13.146 10.856Z"
                fill="white" style="fill:white;fill-opacity:1;" />
            </svg>
            {{ toolkitStore?.settings?.phone }}
          </a>
          <div class="hidden group xl:flex xl:flex-col relative">
            <button class="projectsButton flex items-center gap-1 text-white md:text-xs lg:text-sm uppercase">
              {{ locale }}
              <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.63428 3.93725L5.98828 0.25L0.00303125 0.25L2.36528 3.93575C2.43272 4.04304 2.52625 4.13149 2.63713 4.19285C2.74802 4.2542 2.87264 4.28646 2.99937 4.28661C3.12609 4.28676 3.25079 4.2548 3.36182 4.19371C3.47285 4.13261 3.56659 4.04438 3.63428 3.93725Z"
                  fill="white" />
              </svg>
            </button>
            <div
              class="projectsMenu flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex-col p-6 rounded-xl bg-blue-500 absolute top-[30px] left-[50%] translate-x-[-50%] border border-whiteOp-300">
              <button v-if="locale !== 'ua'" @click="changeLocale('ua')"
                class="text-white md:text-xs lg:text-sm mb-4 last:mb-0 hover:text-blue-400 transition-all">
                UA
              </button>
              <button v-if="locale !== 'ru'" @click="changeLocale('ru')"
                class="text-white md:text-xs lg:text-sm mb-4 last:mb-0 hover:text-blue-400 transition-all">
                RU
              </button>
              <button v-if="locale !== 'en'" @click="changeLocale('en')"
                class="text-white md:text-xs lg:text-sm mb-4 last:mb-0 hover:text-blue-400 transition-all">
                EN
              </button>
            </div>
          </div>
          <div class="gap-1 hidden 3xl:flex">
            <a v-if="toolkitStore?.settings?.soc_link_whats" :href="`${toolkitStore?.settings?.soc_link_whats}`"
              class="lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] border border-white rounded-full hover:bg-white transition-all flex items-center justify-center group">
              <svg class="fill-white w-1/2 group-hover:fill-blue-600 transition-all" width="25" height="25"
                viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.9118 4.14053C18.6096 1.83715 15.5481 0.567634 12.2866 0.566406C5.56551 0.566406 0.0956566 6.0338 0.093202 12.7549C0.0919747 14.9032 0.653452 17.0004 1.72036 18.8485L0.0664062 24.9799L6.45416 23.47C8.23513 24.4416 10.2395 24.953 12.2804 24.9543H12.2853C19.0052 24.9543 24.4749 19.4856 24.4786 12.7658C24.4811 9.50791 23.214 6.44515 20.9118 4.14053ZM18.2519 17.1115C17.9981 17.8231 16.7542 18.5091 16.1951 18.5591C15.6361 18.6104 15.1124 18.8119 12.5392 17.7974C9.44236 16.5768 7.4868 13.4018 7.33544 13.1991C7.18285 12.9953 6.0916 11.5476 6.0916 10.0486C6.0916 8.54961 6.8789 7.81233 7.15851 7.50837C7.43802 7.20319 7.76764 7.12751 7.97147 7.12751C8.17408 7.12751 8.37791 7.12751 8.55494 7.13487C8.77217 7.14346 9.01271 7.15441 9.24099 7.66096C9.51191 8.26396 10.104 9.77034 10.1796 9.92293C10.2553 10.0755 10.3066 10.2537 10.2053 10.4563C10.104 10.659 10.0527 10.7859 9.90136 10.9642C9.74877 11.1423 9.58155 11.3609 9.44482 11.4975C9.29222 11.6489 9.1335 11.815 9.31053 12.1189C9.48879 12.424 10.0991 13.4214 11.0048 14.2282C12.1694 15.2658 13.1495 15.5868 13.4547 15.7406C13.7599 15.8932 13.9368 15.8675 14.1151 15.6637C14.2934 15.4611 14.8768 14.7751 15.0794 14.4699C15.282 14.1647 15.486 14.216 15.7655 14.3173C16.045 14.4186 17.5428 15.1559 17.8467 15.3085C18.1519 15.4611 18.3545 15.5368 18.4302 15.6637C18.5059 15.7895 18.5059 16.3998 18.2519 17.1115Z" />
              </svg>
            </a>
            <a v-if="toolkitStore?.settings?.soc_link_inst" :href="`${toolkitStore?.settings?.soc_link_inst}`"
              class="lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] border border-white rounded-full hover:bg-white transition-all flex items-center justify-center group">
              <svg class="fill-white w-1/2 group-hover:fill-blue-600 transition-all" width="25" height="26"
                viewBox="0 0 25 26" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.2727 2.71001C15.5519 2.71001 15.9401 2.72443 17.2298 2.78191C18.4283 2.83468 19.0755 3.03606 19.5069 3.20389C20.0775 3.42439 20.4897 3.69285 20.9164 4.11953C21.3478 4.55092 21.6116 4.95848 21.8321 5.52895C21.9998 5.96044 22.2012 6.61243 22.2539 7.80606C22.3114 9.10052 22.3258 9.48885 22.3258 12.7631C22.3258 16.0423 22.3114 16.4306 22.2539 17.7202C22.2012 18.9187 21.9998 19.5659 21.8321 19.9974C21.6116 20.5679 21.3431 20.9801 20.9164 21.4068C20.4849 21.8383 20.0775 22.1019 19.5069 22.3224C19.0755 22.4903 18.4235 22.6915 17.2298 22.7443C15.9354 22.8019 15.5471 22.8162 12.2727 22.8162C8.99366 22.8162 8.60533 22.8019 7.31567 22.7443C6.11724 22.6915 5.46995 22.4903 5.03857 22.3224C4.46809 22.1019 4.05573 21.8335 3.62904 21.4068C3.19766 20.9753 2.934 20.5679 2.7134 19.9974C2.54567 19.5659 2.34429 18.9139 2.29152 17.7202C2.23404 16.4258 2.21962 16.0375 2.21962 12.7631C2.21962 9.48405 2.23404 9.09571 2.29152 7.80606C2.34429 6.60762 2.54567 5.96044 2.7134 5.52895C2.934 4.95848 3.20247 4.54611 3.62904 4.11953C4.06053 3.68804 4.46809 3.42439 5.03857 3.20389C5.46995 3.03606 6.12194 2.83468 7.31567 2.78191C8.60533 2.72443 8.99366 2.71001 12.2727 2.71001ZM12.2727 0.5C8.94088 0.5 8.52382 0.514421 7.21503 0.571898C5.91106 0.629477 5.01453 0.840364 4.23798 1.14238C3.42777 1.45881 2.74224 1.87587 2.06141 2.56141C1.37587 3.24214 0.958807 3.92777 0.642375 4.73317C0.340364 5.51453 0.129477 6.40625 0.0718978 7.71023C0.0144206 9.02382 0 9.44088 0 12.7727C0 16.1046 0.0144206 16.5216 0.0718978 17.8304C0.129477 19.1344 0.340364 20.0309 0.642375 20.8076C0.958807 21.6177 1.37587 22.3033 2.06141 22.984C2.74224 23.6648 3.42777 24.0866 4.23317 24.3983C5.01453 24.7003 5.90625 24.9112 7.21023 24.9687C8.51901 25.0262 8.93608 25.0406 12.2679 25.0406C15.5998 25.0406 16.0168 25.0262 17.3256 24.9687C18.6296 24.9112 19.5261 24.7003 20.3028 24.3983C21.1082 24.0866 21.7937 23.6648 22.4744 22.984C23.1552 22.3033 23.577 21.6177 23.8887 20.8123C24.1907 20.0309 24.4017 19.1392 24.4591 17.8352C24.5167 16.5264 24.531 16.1094 24.531 12.7775C24.531 9.44569 24.5167 9.02862 24.4591 7.71984C24.4017 6.41586 24.1907 5.51934 23.8887 4.74268C23.5866 3.92777 23.1696 3.24214 22.484 2.56141C21.8033 1.88068 21.1177 1.45881 20.3123 1.14718C19.5309 0.84517 18.6392 0.634284 17.3352 0.576704C16.0216 0.51442 15.6046 0.5 12.2727 0.5Z" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.4332 2.5459H5.11506C3.42055 2.5459 2.04688 3.91957 2.04688 5.61408V19.9323C2.04688 21.6268 3.42055 23.0004 5.11506 23.0004H19.4332C21.1278 23.0004 22.5014 21.6268 22.5014 19.9323V5.61408C22.5014 3.91957 21.1278 2.5459 19.4332 2.5459ZM12.272 6.46909C8.79152 6.46909 5.96777 9.29284 5.96777 12.7733C5.96777 16.2537 8.79152 19.0775 12.272 19.0775C15.7524 19.0775 18.5762 16.2537 18.5762 12.7733C18.5762 9.29284 15.7524 6.46909 12.272 6.46909ZM12.272 16.8626C10.014 16.8626 8.18269 15.0313 8.18269 12.7733C8.18269 10.5153 10.014 8.68401 12.272 8.68401C14.5299 8.68401 16.3612 10.5153 16.3612 12.7733C16.3612 15.0313 14.5299 16.8626 12.272 16.8626ZM18.8262 7.69141C19.6364 7.69141 20.298 7.03461 20.298 6.2196C20.298 5.4095 19.6364 4.74789 18.8262 4.74789C18.016 4.74789 17.3545 5.40469 17.3545 6.2196C17.3545 7.0298 18.0112 7.69141 18.8262 7.69141Z" />
              </svg>
            </a>
            <a v-if="toolkitStore?.settings?.soc_link_fb" :href="`${toolkitStore?.settings?.soc_link_fb}`"
              class="lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] border border-white rounded-full hover:bg-white transition-all flex items-center justify-center group">
              <svg class="fill-white w-1/2 group-hover:fill-blue-600 transition-all" width="11" height="20"
                viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.21813 20V10.8777H10.2789L10.7381 7.32156H7.21813V5.05147C7.21813 4.0222 7.50278 3.32076 8.98042 3.32076L10.862 3.31999V0.13923C10.5366 0.0969453 9.41964 0 8.11964 0C5.40505 0 3.54658 1.65697 3.54658 4.69927V7.32156H0.476562V10.8777H3.54658V20H7.21813Z" />
              </svg>
            </a>
            <a v-if="toolkitStore?.settings?.soc_link_yt" :href="`${toolkitStore?.settings?.soc_link_yt}`"
              class="lg:w-[48px] lg:h-[48px] md:hidden lg:flex md:w-[42px] md:h-[42px] border border-white rounded-full hover:bg-white transition-all flex items-center justify-center group">
              <svg class="fill-white w-1/2 group-hover:fill-blue-600 transition-all" width="20" height="14"
                viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.6488 2.31398C18.4327 1.51072 17.7994 0.877518 16.9963 0.661224C15.529 0.259766 9.65993 0.259766 9.65993 0.259766C9.65993 0.259766 3.79105 0.259766 2.32381 0.646004C1.53611 0.862068 0.887344 1.51083 0.67128 2.31398C0.285156 3.78111 0.285156 6.82375 0.285156 6.82375C0.285156 6.82375 0.285156 9.88173 0.67128 11.3335C0.887573 12.1367 1.52066 12.7699 2.32392 12.9862C3.8065 13.3877 9.66016 13.3877 9.66016 13.3877C9.66016 13.3877 15.529 13.3877 16.9963 13.0015C17.7995 12.7853 18.4327 12.1521 18.649 11.349C19.035 9.88173 19.035 6.8392 19.035 6.8392C19.035 6.8392 19.0505 3.78111 18.6488 2.31398ZM7.79134 9.63465V4.01286L12.6718 6.82375L7.79134 9.63465Z" />
              </svg>
            </a>
          </div>

          <button @click="handleOpenBurger" id="burgerBtn" type="button" class="3xl:hidden block ">
            <img loading="lazy" src="/img/icons/burder.svg" class="min-w-[28px]" alt="burger ic" />
          </button>
        </div>

      </div>
    </div>
    <div id="burgerMenu"
      class="'burger__body absolute top-full transition-all left-0 bg-blue-500 w-full flex-col text-center pt-12 pb-8 text-white text-lg border-t-2 border-whiteOp-300 z-10'"
      :class="isOpenBurger ? 'opacity-100 visible' : 'opacity-0 invisible'">
      <div class="md:hidden flex flex-col gap-8 mb-12 pb-7 border-b border-whiteOp-300">
        <NuxtLink @click="handleCloseBurger" href="/" class="hover:text-blue-400 transition-all">
          Avalon
        </NuxtLink>
        <NuxtLink @click="handleCloseBurger" href="#about" class="hover:text-blue-400 transition-all">
          {{ $t('about_compl') }}
        </NuxtLink>
        <NuxtLink @click="handleCloseBurger" href="#location" class="hover:text-blue-400 transition-all">
          {{ $t('location') }}
        </NuxtLink>
        <NuxtLink @click="handleCloseBurger" href="#apartment" class="hover:text-blue-400 transition-all">
          {{ $t('appatments') }}
        </NuxtLink>
        <NuxtLink @click="handleCloseBurger" href="#investors" class=" hover:text-blue-400 transition-all">
          {{ $t('investors') }}
        </NuxtLink>
        <div class="group burger__proj md:hidden block">
          <p @click="openSubMenu" id="toggleProjects"
            class="flex items-center gap-1 justify-center hover:text-blue-400 transition-all cursor-pointer">
            {{ $t('else_projects') }}
            <svg class="group-hover:-scale-y-100 transition-all" width="6" height="5" viewBox="0 0 6 5" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path class="fill-white group-hover:fill-blue-400 transition-all"
                d="M3.63428 3.93725L5.98828 0.25L0.00303125 0.25L2.36528 3.93575C2.43272 4.04304 2.52625 4.13149 2.63713 4.19285C2.74802 4.2542 2.87264 4.28646 2.99937 4.28661C3.12609 4.28676 3.25079 4.2548 3.36182 4.19371C3.47285 4.13261 3.56659 4.04438 3.63428 3.93725Z" />
            </svg>
          </p>
          <div id="projectsBody" :class="isOpenSubMenu ? 'max-h-96 mt-8' : 'max-h-0 mt-0'"
            class="burger__proj_body h-full overflow-hidden flex transition-all flex-col">

            <NuxtLink @click="handleCloseBurger"
              :href="`/projects/${item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.slug}`"
              v-for="item in projectsStore.projects" :key="item.id"
              class="mb-4 text-sm hover:text-blue-400 transition-all">
              {{item?.translations?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title}}
            </NuxtLink>

          </div>
        </div>
        <NuxtLink @click="handleCloseBurger" href="#contacts" class=" hover:text-blue-400 transition-all">
          {{ $t('contacts') }}
        </NuxtLink>

      </div>
      <div class=" flex flex-col gap-4">
        <a :href="`${toolkitStore?.settings?.phone}`"
          class="hover:text-blue-400 transition-all font-bold text-white text-base">
          {{ toolkitStore?.settings?.phone }}
        </a>

        <button type="button" @click="handleOpenModal"
          class="py-4 w-full text-white text-xs font-bold max-w-56 m-auto border border-white rounded-xl transition-all hover:bg-white hover:text-blue-400">
          {{ $t('make_a_meeting') }}
        </button>
      </div>
      <div class="flex 3xl:hidden mt-12 pt-7 border-t border-whiteOp-300 gap-11 justify-center">
        <ul class="flex items-center gap-4">
          <li>
            <button @click="changeLocale('ua')" class="hover:text-blue-400 transition-all text-white text-base">
              UA
            </button>
          </li>
          <li>
            <button @click="changeLocale('ru')" class="hover:text-blue-400 transition-all text-white text-base">
              RU
            </button>
          </li>
          <li>
            <button @click="changeLocale('en')" class="hover:text-blue-400 transition-all text-white text-base">
              EN
            </button>
          </li>
        </ul>
        <ul class="flex items-center gap-1 ">
          <li v-if="toolkitStore?.settings?.soc_link_whats" class="w-10 h-10">
            <NuxtLink class="w-full h-full" :href="`${toolkitStore?.settings?.soc_link_whats}`">
              <img class="w-full" src="/img/index/tw-burger.svg" alt="ic" />
            </NuxtLink>
          </li>
          <li v-if="toolkitStore?.settings?.soc_link_inst" class="w-10 h-10">
            <NuxtLink class="w-full h-full" :href="`${toolkitStore?.settings?.soc_link_inst}`">
              <img class="w-full" src="/img/index/inst-burger.svg" alt="ic" />
            </NuxtLink>
          </li>
          <li v-if="toolkitStore?.settings?.soc_link_fb" class="w-10 h-10">
            <NuxtLink class="w-full h-full" :href="`${toolkitStore?.settings?.soc_link_fb}`">
              <img class="w-full" src="/img/index/face-burger.svg" alt="ic" />
            </NuxtLink>
          </li>
          <li v-if="toolkitStore?.settings?.soc_link_yt" class="w-10 h-10">
            <NuxtLink class="w-full h-full" :href="`${toolkitStore?.settings?.soc_link_yt}`">
              <img class="w-full" src="/img/index/yout-burger.svg" alt="ic" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div @click="handleOpenBurger" class="fixed -z-[30] top-0 h-screen w-full left-0 bg-black transition-all "
      :class="isOpenBurger ? 'bg-opacity-60 visible pointer-events-auto' : 'bg-opacity-0 invisible pointer-events-none'">
    </div>
  </header>

  <Preloader :isActive="isLoading" />
</template>

<style>
.nuxt-loading-indicator {
  width: 100%;
  height: 20px;
}
</style>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import { useLangStore } from './../stores/functions/language';
import { usePreloaderStore } from '~/stores/functions/preloader';


const nuxtApp = useNuxtApp();
const isLoading = ref(true);
const router = useRouter();
const route = useRoute();
const toolkitStore = useToolkit();
const props = defineProps(['header'])
const preloaderStore = usePreloaderStore();
const projectsStore = useProjectsStore();
const { locale } = useI18n()
const isOpenSubMenu = ref(false);

const isOpenBurger = ref(false);
const isScrolled = ref(false);
const isOpen = ref(false);
const mainPageLink = ref('/')

const langStore = useLangStore()

const handleOpenBurger = () => {
  isOpenBurger.value = !isOpenBurger.value;
}
const handleCloseBurger = () => {
  isOpenBurger.value = false
}

const openSubMenu = () => {
  isOpenSubMenu.value = !isOpenSubMenu.value;
};

const modalsStore = useModalsStore()

const handleOpenModal = () => {
  modalsStore.addModal("calendar")
}

const handleOpen = () => {
  isOpen.value = !isOpen.value;
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 6000)
})

const DEFAULT_LOCALE = 'en';

const changeLocale = (newLocale) => {
  isLoading.value = true;

  preloaderStore.start()

  setTimeout(() => changeLanguage(newLocale), 500)
};

watchEffect(() => {
  if (typeof window !== 'undefined') {
    onMounted(() => {
      mainPageLink.value = `/${localStorage.getItem('selectedLanguage')?.replace('/', '')}`;
    });
  }
});

const changeLanguage = (newLocale) => {
  const currentPath = route.fullPath;
  let pathWithoutLocale = currentPath?.replace(/^\/[a-z]{2}(\/|$)/, '/');

  if (newLocale !== DEFAULT_LOCALE) {
    pathWithoutLocale = `/${newLocale}${pathWithoutLocale}`;
  } else {
    pathWithoutLocale = `/${pathWithoutLocale}`;
  }

  mainPageLink.value = `/${newLocale}`

  if (router.currentRoute.value.fullPath !== pathWithoutLocale) {
    router.push(pathWithoutLocale);
  }

  locale.value = newLocale;
  langStore.setLang(newLocale);

  localStorage.setItem('selectedLanguage', newLocale);

  setTimeout(() => {
    preloaderStore.stop()
  }, 500)
}

</script>