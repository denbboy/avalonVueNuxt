<template>

  <header
    class="bg-blue-500 py-4 border-b-2 border-b-whiteOp-300 z-30 lg:bg-transparent lg:border-none transition-all absolute w-full">
    <div class="container xl:max-w-[1920px]">
      <div class="header__inner flex items-center justify-between gap-3 relative">
        <NuxtLink href="/projects/123">
          <!-- <img src="/assets/img/index/logo-desk.svg" class="hidden lg:min-w-[80px] lg:block" alt="logo"> -->
          <img src="/assets/img/icons/logo-mob.svg" class="lg:hidden" alt="logo ic">
          <svg class="hidden lg:min-w-[80px] lg:block" width="87" height="96" viewBox="0 0 87 96" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M61.0115 65.147L60.9302 65.2238L57.7947 62.3126L55.2999 59.9962L40.7578 46.4944V66.7643V70.2001V82.0043H43.2895V69.6922C47.8574 68.597 52.086 66.6009 55.7771 63.9025L60.9462 68.7017L61.0115 68.64L61.0767 68.7017L78.7334 52.3083V82.0043H81.2651V46.4944L61.0927 65.2238L61.0115 65.147ZM43.2895 66.1986V52.3083L53.2486 61.5548C50.2582 63.6455 46.898 65.2349 43.2895 66.1986Z"
              fill="white" style="fill:white;fill-opacity:1;" />
            <path
              d="M64.4712 54.786C68.1506 49.2208 70.3049 42.5594 70.3226 35.4148C70.3711 15.8955 54.5792 0 35.1614 0C15.7436 0 -0.0483664 15.8955 0.000111314 35.4148C0.0482209 54.7825 15.7942 70.6017 35.0722 70.65C35.1019 70.6501 35.1316 70.6497 35.1614 70.6497V82.0043H37.6931V70.5583V67.162V39.4944L57.3789 58.1179L59.8336 60.4402L61.0101 61.5532L84.3271 39.4944V82.0043H86.8588V33.6056L64.4712 54.786ZM35.1614 33.6056V67.2628C35.1344 67.2628 35.1075 67.2632 35.0805 67.2631C17.6509 67.2193 3.41473 52.9167 3.37134 35.406C3.32762 17.7582 17.6055 3.38693 35.1614 3.38693C52.7173 3.38693 66.9951 17.7582 66.9514 35.406C66.9317 43.3712 63.9746 50.6719 59.1169 56.2694L35.1614 33.6056Z"
              fill="white" style="fill:white;fill-opacity:1;" />
            <path
              d="M17.68 93.4539C16.576 93.4539 15.76 93.2165 15.232 92.7419C14.7093 92.2619 14.448 91.5259 14.448 90.5339C14.448 89.5579 14.7173 88.8379 15.256 88.3739C15.7947 87.9045 16.6293 87.6699 17.76 87.6699C19.6373 87.6699 20.656 88.3339 20.816 89.6619H20.064C19.9947 89.2085 19.7707 88.8752 19.392 88.6619C19.0187 88.4432 18.4747 88.3339 17.76 88.3339C16.864 88.3339 16.2133 88.5072 15.808 88.8539C15.408 89.1952 15.208 89.7579 15.208 90.5419C15.208 91.3365 15.4053 91.9099 15.8 92.2619C16.1947 92.6139 16.832 92.7899 17.712 92.7899C19.2373 92.7899 20.048 92.2965 20.144 91.3099H20.904C20.84 92.0139 20.5307 92.5472 19.976 92.9099C19.4267 93.2725 18.6613 93.4539 17.68 93.4539ZM26.8325 93.3339H22.8085V87.7899H23.5765V92.6699H26.8325V93.3339ZM28.5912 91.3739V87.7899H29.3592V91.3739C29.3592 91.8645 29.4952 92.2245 29.7672 92.4539C30.0445 92.6779 30.4845 92.7899 31.0872 92.7899C31.6952 92.7899 32.1379 92.6779 32.4152 92.4539C32.6979 92.2245 32.8392 91.8645 32.8392 91.3739V87.7899H33.5992V91.3739C33.5992 92.0779 33.3912 92.6005 32.9752 92.9419C32.5645 93.2832 31.9352 93.4539 31.0872 93.4539C30.2392 93.4539 29.6099 93.2859 29.1992 92.9499C28.7939 92.6085 28.5912 92.0832 28.5912 91.3739ZM39.7208 90.3419V90.4459C40.3715 90.6645 40.6968 91.1072 40.6968 91.7739C40.6968 92.2805 40.5261 92.6672 40.1848 92.9339C39.8435 93.2005 39.3448 93.3339 38.6888 93.3339H35.7288V87.7899H38.5288C39.1475 87.7899 39.6221 87.9099 39.9528 88.1499C40.2835 88.3845 40.4488 88.7232 40.4488 89.1659C40.4488 89.7099 40.2061 90.1019 39.7208 90.3419ZM36.4888 88.4539V90.1179H38.6088C39.3075 90.1179 39.6568 89.8272 39.6568 89.2459C39.6568 88.7179 39.2675 88.4539 38.4888 88.4539H36.4888ZM36.4888 90.7819V92.6699H38.6488C39.4968 92.6699 39.9208 92.3525 39.9208 91.7179C39.9208 91.4139 39.8035 91.1819 39.5688 91.0219C39.3395 90.8619 39.0061 90.7819 38.5688 90.7819H36.4888ZM50.0698 90.1179V87.7899H50.8378V93.3339H50.0698V90.7819H46.5578V93.3339H45.7898V87.7899H46.5578V90.1179H50.0698ZM56.0912 93.4539C54.9712 93.4539 54.1392 93.2165 53.5952 92.7419C53.0512 92.2672 52.7792 91.5365 52.7792 90.5499C52.7792 89.5739 53.0512 88.8512 53.5952 88.3819C54.1392 87.9072 54.9712 87.6699 56.0912 87.6699C57.2166 87.6699 58.0512 87.9045 58.5952 88.3739C59.1392 88.8432 59.4112 89.5685 59.4112 90.5499C59.4112 91.5365 59.1392 92.2672 58.5952 92.7419C58.0512 93.2165 57.2166 93.4539 56.0912 93.4539ZM56.0912 92.7899C56.9819 92.7899 57.6299 92.6112 58.0352 92.2539C58.4459 91.8965 58.6512 91.3285 58.6512 90.5499C58.6512 89.7712 58.4486 89.2085 58.0432 88.8619C57.6379 88.5099 56.9872 88.3339 56.0912 88.3339C55.1952 88.3339 54.5446 88.5072 54.1392 88.8539C53.7392 89.2005 53.5392 89.7659 53.5392 90.5499C53.5392 91.3339 53.7419 91.9045 54.1472 92.2619C54.5579 92.6139 55.2059 92.7899 56.0912 92.7899ZM61.2865 91.3739V87.7899H62.0545V91.3739C62.0545 91.8645 62.1905 92.2245 62.4625 92.4539C62.7398 92.6779 63.1798 92.7899 63.7825 92.7899C64.3905 92.7899 64.8332 92.6779 65.1105 92.4539C65.3932 92.2245 65.5345 91.8645 65.5345 91.3739V87.7899H66.2945V91.3739C66.2945 92.0779 66.0865 92.6005 65.6705 92.9419C65.2598 93.2832 64.6305 93.4539 63.7825 93.4539C62.9345 93.4539 62.3052 93.2859 61.8945 92.9499C61.4892 92.6085 61.2865 92.0832 61.2865 91.3739ZM70.6801 93.4539C69.8161 93.4539 69.1815 93.3019 68.7761 92.9979C68.3761 92.6939 68.1628 92.2085 68.1361 91.5419H68.8721C68.8935 91.9899 69.0428 92.3099 69.3201 92.5019C69.6028 92.6939 70.0588 92.7899 70.6881 92.7899C71.7761 92.7899 72.3201 92.4565 72.3201 91.7899C72.3201 91.2939 71.9788 90.9925 71.2961 90.8859L69.7921 90.6459C69.2855 90.5659 68.9121 90.4112 68.6721 90.1819C68.4375 89.9525 68.3201 89.6352 68.3201 89.2299C68.3201 88.7285 68.5148 88.3445 68.9041 88.0779C69.2988 87.8059 69.8615 87.6699 70.5921 87.6699C71.3548 87.6699 71.9255 87.8112 72.3041 88.0939C72.6881 88.3712 72.9121 88.8139 72.9761 89.4219H72.2241C72.1815 89.0379 72.0295 88.7605 71.7681 88.5899C71.5121 88.4192 71.1175 88.3339 70.5841 88.3339C69.5708 88.3339 69.0641 88.6272 69.0641 89.2139C69.0641 89.6352 69.3841 89.8965 70.0241 89.9979L71.5041 90.2299C72.5495 90.3792 73.0721 90.8939 73.0721 91.7739C73.0721 92.3125 72.8668 92.7285 72.4561 93.0219C72.0455 93.3099 71.4535 93.4539 70.6801 93.4539ZM79.4683 93.3339H75.0523V87.7899H79.4043V88.4539H75.8203V90.1179H79.1483V90.7819H75.8203V92.6699H79.4683V93.3339Z"
              fill="white" style="fill:white;fill-opacity:1;" />
          </svg>

        </NuxtLink>


        <div class="items-center gap-10 hidden lg:flex">
          <NuxtLink href="/" class="text-white text-sm relative transition-all
                          before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                          after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                      ">
            Главная
          </NuxtLink>
          <NuxtLink href="#about" class="text-white text-sm relative transition-all
                          before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                          after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                      ">
            <!-- {{ $t('about_company') }} -->
            Про комплекс
          </NuxtLink>
          <NuxtLink href="#location" class="text-white text-sm relative
                          before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                          after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                      ">
            <!-- {{ $t('why_bali') }} -->
            Локация
          </NuxtLink>
          <NuxtLink href="#apartments" class="text-white text-sm relative
                          before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                          after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                      ">
            <!-- {{ $t('cooperation') }} -->
            Апартаменты
          </NuxtLink>
          <NuxtLink href="#investors" class="text-white text-sm relative
                          before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                          after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                      ">
            <!-- {{ $t('career') }} -->
            Инвесторам
          </NuxtLink>
          <NuxtLink href="#contacts" class="text-white text-sm relative
                          before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300
                          after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300
                      ">
            {{ $t('contacts') }}
          </NuxtLink>
        </div>


        <button type="button" @click="handleOpenModal"
          class="3xl:flex hidden w-full max-w-[250px] border border-whiteOp-400 rounded-xl p-4 text-white text-sm font-bold hover:bg-white hover:text-blue-400 hover:border-white transition-all xl:justify-center">
          {{ $t('make_a_meeting') }}
        </button>
        <a href="tel:+6281246502783" class="3xl:flex hidden items-center gap-1 text-white text-base font-bold ">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M15.403 2.633C13.708 0.936 11.454 0.001 9.053 0C4.105 0 0.077 4.027 0.075 8.977C0.075 10.559 0.488 12.103 1.273 13.465L0 18.116L4.759 16.867C6.071 17.582 7.547 17.959 9.049 17.96H9.053C14 17.96 18.028 13.933 18.03 8.983C18.03 6.585 17.098 4.33 15.403 2.633ZM9.053 16.445H9.05C7.711 16.444 6.398 16.085 5.252 15.404L4.98 15.242L2.156 15.983L2.909 13.23L2.732 12.948C1.985 11.76 1.591 10.387 1.591 8.977C1.593 4.863 4.94 1.516 9.056 1.516C11.049 1.517 12.922 2.294 14.331 3.704C15.739 5.115 16.515 6.989 16.514 8.983C16.512 13.097 13.165 16.445 9.053 16.445ZM13.146 10.856C12.921 10.743 11.819 10.201 11.613 10.126C11.408 10.051 11.259 10.014 11.109 10.238C10.959 10.462 10.529 10.967 10.398 11.117C10.267 11.267 10.136 11.285 9.912 11.173C9.688 11.061 8.965 10.824 8.108 10.06C7.441 9.465 6.991 8.731 6.86 8.506C6.729 8.281 6.846 8.16 6.959 8.048C7.06 7.948 7.183 7.786 7.295 7.655C7.407 7.524 7.444 7.431 7.519 7.281C7.594 7.131 7.557 7 7.5 6.888C7.444 6.775 6.995 5.671 6.808 5.222C6.627 4.787 6.442 4.845 6.304 4.839C6.174 4.833 6.024 4.831 5.875 4.831C5.725 4.831 5.482 4.887 5.276 5.111C5.07 5.336 4.491 5.878 4.491 6.982C4.491 8.086 5.295 9.153 5.407 9.303C5.519 9.453 6.989 11.718 9.239 12.69C9.775 12.921 10.193 13.059 10.518 13.163C11.055 13.334 11.544 13.309 11.931 13.252C12.362 13.188 13.258 12.71 13.445 12.186C13.632 11.662 13.632 11.213 13.576 11.119C13.52 11.025 13.369 10.968 13.146 10.856Z"
              fill="white" style="fill:white;fill-opacity:1;" />
          </svg>

          +62 (812) 4650-27-83
        </a>
        <div class="hidden group xl:flex xl:flex-col relative">
          <button class="projectsButton flex items-center gap-1 text-white text-sm uppercase">
            {{ locale }}
            <img src="/assets/img/index/small-arrow-white.svg" alt="ic">
          </button>
          <div
            class="projectsMenu flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex-col p-6 rounded-xl bg-blue-500 absolute top-[30px] left-[50%] translate-x-[-50%] border border-whiteOp-300">
            <button @click="changeLocale('ua')" class="text-white text-sm mb-4 hover:text-blue-400 transition-all">
              UA
            </button>
            <button @click="changeLocale('ru')" class="text-white text-sm hover:text-blue-400 transition-all">
              RU
            </button>
          </div>
        </div>
        <div class="gap-1 hidden xl:flex">
          <a href="#"
            class="min-w-[48px] h-[48px] border border-white rounded-full hover:bg-white transition-all flex items-center justify-center group">
            <svg class="fill-white group-hover:fill-blue-600 transition-all" width="25" height="25" viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.9118 4.14053C18.6096 1.83715 15.5481 0.567634 12.2866 0.566406C5.56551 0.566406 0.0956566 6.0338 0.093202 12.7549C0.0919747 14.9032 0.653452 17.0004 1.72036 18.8485L0.0664062 24.9799L6.45416 23.47C8.23513 24.4416 10.2395 24.953 12.2804 24.9543H12.2853C19.0052 24.9543 24.4749 19.4856 24.4786 12.7658C24.4811 9.50791 23.214 6.44515 20.9118 4.14053ZM18.2519 17.1115C17.9981 17.8231 16.7542 18.5091 16.1951 18.5591C15.6361 18.6104 15.1124 18.8119 12.5392 17.7974C9.44236 16.5768 7.4868 13.4018 7.33544 13.1991C7.18285 12.9953 6.0916 11.5476 6.0916 10.0486C6.0916 8.54961 6.8789 7.81233 7.15851 7.50837C7.43802 7.20319 7.76764 7.12751 7.97147 7.12751C8.17408 7.12751 8.37791 7.12751 8.55494 7.13487C8.77217 7.14346 9.01271 7.15441 9.24099 7.66096C9.51191 8.26396 10.104 9.77034 10.1796 9.92293C10.2553 10.0755 10.3066 10.2537 10.2053 10.4563C10.104 10.659 10.0527 10.7859 9.90136 10.9642C9.74877 11.1423 9.58155 11.3609 9.44482 11.4975C9.29222 11.6489 9.1335 11.815 9.31053 12.1189C9.48879 12.424 10.0991 13.4214 11.0048 14.2282C12.1694 15.2658 13.1495 15.5868 13.4547 15.7406C13.7599 15.8932 13.9368 15.8675 14.1151 15.6637C14.2934 15.4611 14.8768 14.7751 15.0794 14.4699C15.282 14.1647 15.486 14.216 15.7655 14.3173C16.045 14.4186 17.5428 15.1559 17.8467 15.3085C18.1519 15.4611 18.3545 15.5368 18.4302 15.6637C18.5059 15.7895 18.5059 16.3998 18.2519 17.1115Z" />
            </svg>
          </a>
          <a href="#"
            class="min-w-[48px] h-[48px] border border-white rounded-full hover:bg-white transition-all flex items-center justify-center group">
            <svg class="fill-white group-hover:fill-blue-600 transition-all" width="25" height="26" viewBox="0 0 25 26"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.2727 2.71001C15.5519 2.71001 15.9401 2.72443 17.2298 2.78191C18.4283 2.83468 19.0755 3.03606 19.5069 3.20389C20.0775 3.42439 20.4897 3.69285 20.9164 4.11953C21.3478 4.55092 21.6116 4.95848 21.8321 5.52895C21.9998 5.96044 22.2012 6.61243 22.2539 7.80606C22.3114 9.10052 22.3258 9.48885 22.3258 12.7631C22.3258 16.0423 22.3114 16.4306 22.2539 17.7202C22.2012 18.9187 21.9998 19.5659 21.8321 19.9974C21.6116 20.5679 21.3431 20.9801 20.9164 21.4068C20.4849 21.8383 20.0775 22.1019 19.5069 22.3224C19.0755 22.4903 18.4235 22.6915 17.2298 22.7443C15.9354 22.8019 15.5471 22.8162 12.2727 22.8162C8.99366 22.8162 8.60533 22.8019 7.31567 22.7443C6.11724 22.6915 5.46995 22.4903 5.03857 22.3224C4.46809 22.1019 4.05573 21.8335 3.62904 21.4068C3.19766 20.9753 2.934 20.5679 2.7134 19.9974C2.54567 19.5659 2.34429 18.9139 2.29152 17.7202C2.23404 16.4258 2.21962 16.0375 2.21962 12.7631C2.21962 9.48405 2.23404 9.09571 2.29152 7.80606C2.34429 6.60762 2.54567 5.96044 2.7134 5.52895C2.934 4.95848 3.20247 4.54611 3.62904 4.11953C4.06053 3.68804 4.46809 3.42439 5.03857 3.20389C5.46995 3.03606 6.12194 2.83468 7.31567 2.78191C8.60533 2.72443 8.99366 2.71001 12.2727 2.71001ZM12.2727 0.5C8.94088 0.5 8.52382 0.514421 7.21503 0.571898C5.91106 0.629477 5.01453 0.840364 4.23798 1.14238C3.42777 1.45881 2.74224 1.87587 2.06141 2.56141C1.37587 3.24214 0.958807 3.92777 0.642375 4.73317C0.340364 5.51453 0.129477 6.40625 0.0718978 7.71023C0.0144206 9.02382 0 9.44088 0 12.7727C0 16.1046 0.0144206 16.5216 0.0718978 17.8304C0.129477 19.1344 0.340364 20.0309 0.642375 20.8076C0.958807 21.6177 1.37587 22.3033 2.06141 22.984C2.74224 23.6648 3.42777 24.0866 4.23317 24.3983C5.01453 24.7003 5.90625 24.9112 7.21023 24.9687C8.51901 25.0262 8.93608 25.0406 12.2679 25.0406C15.5998 25.0406 16.0168 25.0262 17.3256 24.9687C18.6296 24.9112 19.5261 24.7003 20.3028 24.3983C21.1082 24.0866 21.7937 23.6648 22.4744 22.984C23.1552 22.3033 23.577 21.6177 23.8887 20.8123C24.1907 20.0309 24.4017 19.1392 24.4591 17.8352C24.5167 16.5264 24.531 16.1094 24.531 12.7775C24.531 9.44569 24.5167 9.02862 24.4591 7.71984C24.4017 6.41586 24.1907 5.51934 23.8887 4.74268C23.5866 3.92777 23.1696 3.24214 22.484 2.56141C21.8033 1.88068 21.1177 1.45881 20.3123 1.14718C19.5309 0.84517 18.6392 0.634284 17.3352 0.576704C16.0216 0.51442 15.6046 0.5 12.2727 0.5Z" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M19.4332 2.5459H5.11506C3.42055 2.5459 2.04688 3.91957 2.04688 5.61408V19.9323C2.04688 21.6268 3.42055 23.0004 5.11506 23.0004H19.4332C21.1278 23.0004 22.5014 21.6268 22.5014 19.9323V5.61408C22.5014 3.91957 21.1278 2.5459 19.4332 2.5459ZM12.272 6.46909C8.79152 6.46909 5.96777 9.29284 5.96777 12.7733C5.96777 16.2537 8.79152 19.0775 12.272 19.0775C15.7524 19.0775 18.5762 16.2537 18.5762 12.7733C18.5762 9.29284 15.7524 6.46909 12.272 6.46909ZM12.272 16.8626C10.014 16.8626 8.18269 15.0313 8.18269 12.7733C8.18269 10.5153 10.014 8.68401 12.272 8.68401C14.5299 8.68401 16.3612 10.5153 16.3612 12.7733C16.3612 15.0313 14.5299 16.8626 12.272 16.8626ZM18.8262 7.69141C19.6364 7.69141 20.298 7.03461 20.298 6.2196C20.298 5.4095 19.6364 4.74789 18.8262 4.74789C18.016 4.74789 17.3545 5.40469 17.3545 6.2196C17.3545 7.0298 18.0112 7.69141 18.8262 7.69141Z" />
            </svg>
          </a>
          <a href="#"
            class="min-w-[48px] h-[48px] border border-white rounded-full hover:bg-white transition-all flex items-center justify-center group">
            <svg class="fill-white group-hover:fill-blue-600 transition-all" width="11" height="20" viewBox="0 0 11 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.21813 20V10.8777H10.2789L10.7381 7.32156H7.21813V5.05147C7.21813 4.0222 7.50278 3.32076 8.98042 3.32076L10.862 3.31999V0.13923C10.5366 0.0969453 9.41964 0 8.11964 0C5.40505 0 3.54658 1.65697 3.54658 4.69927V7.32156H0.476562V10.8777H3.54658V20H7.21813Z" />
            </svg>
          </a>
          <a href="#"
            class="min-w-[48px] h-[48px] border border-white rounded-full hover:bg-white transition-all flex items-center justify-center group">
            <svg class="fill-white group-hover:fill-blue-600 transition-all" width="20" height="14" viewBox="0 0 20 14"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6488 2.31398C18.4327 1.51072 17.7994 0.877518 16.9963 0.661224C15.529 0.259766 9.65993 0.259766 9.65993 0.259766C9.65993 0.259766 3.79105 0.259766 2.32381 0.646004C1.53611 0.862068 0.887344 1.51083 0.67128 2.31398C0.285156 3.78111 0.285156 6.82375 0.285156 6.82375C0.285156 6.82375 0.285156 9.88173 0.67128 11.3335C0.887573 12.1367 1.52066 12.7699 2.32392 12.9862C3.8065 13.3877 9.66016 13.3877 9.66016 13.3877C9.66016 13.3877 15.529 13.3877 16.9963 13.0015C17.7995 12.7853 18.4327 12.1521 18.649 11.349C19.035 9.88173 19.035 6.8392 19.035 6.8392C19.035 6.8392 19.0505 3.78111 18.6488 2.31398ZM7.79134 9.63465V4.01286L12.6718 6.82375L7.79134 9.63465Z" />
            </svg>
          </a>
        </div>

        <button @click="handleOpenBurger" id="burgerBtn" type="button" class="3xl:hidden block ">
          <img src="/assets/img/icons/burder.svg" class="min-w-[28px]" alt="burger ic">
        </button>
        <div id="burgerMenu"
          class="'burger__body absolute top-[47px] transition-all lg:top-[114px] left-0 bg-blue-500 w-[calc(100%_+_60px)] -ml-[30px] flex-col text-center pt-12 pb-8 text-white text-lg border-t-2 border-whiteOp-300 z-10'"
          :class="isOpenBurger ? 'opacity-100 visible' : 'opacity-0 invisible'">
          <div class="lg:hidden flex flex-col gap-8 mb-12 pb-7 border-b border-whiteOp-300">
            <NuxtLink @click="handleCloseBurger" href="/" class="hover:text-blue-400 transition-all">
              Главная
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" href="#about" class="hover:text-blue-400 transition-all">
              Про комплекс
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" href="#location" class="hover:text-blue-400 transition-all">
              Локация
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" href="#apartment" class="hover:text-blue-400 transition-all">
              Апартаменты
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" href="#investors" class=" hover:text-blue-400 transition-all">
              Инвесторам
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" href="#contacts" class=" hover:text-blue-400 transition-all">
              Контакты
            </NuxtLink>

          </div>
          <div class=" flex flex-col gap-4">
            <a href="tel:+6281246502783" class="hover:text-blue-400 transition-all font-bold text-white text-base">
              +62 (812) 4650-27-83
            </a>

            <button type="button" @click="handleOpenModal"
              class="py-4 w-full text-white text-xs font-bold max-w-56 m-auto border border-white rounded-xl transition-all hover:bg-white hover:text-blue-400">
              {{ $t('make_a_meeting') }}
            </button>
          </div>
          <div class="flex xl:hidden mt-12 pt-7 border-t border-whiteOp-300 gap-11 justify-center">
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
            </ul>
            <ul class="flex items-center gap-1">
              <li>
                <a href="#">
                  <img src="/assets/img/index/tw-burger.svg" alt="ic">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/index/inst-burger.svg" alt="ic">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/index/face-burger.svg" alt="ic">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/img/index/yout-burger.svg" alt="ic">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div
    class="fixed left-0 top-0 h-full w-full z-50 bg-blue-500 transition-all duration-150 flex items-center justify-center"
    :class="loading ? 'visible opacity-100' : 'opacity-0 invisible'">
    <img class="w-[100px]" src="/assets/img/loader.gif" alt="">
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import { useLangStore } from './../stores/functions/language';

const nuxtApp = useNuxtApp();
const loading = ref(true);

setTimeout(() => {
  loading.value = false
}, 500)

const { locale } = useI18n()

const props = defineProps(['header'])

const isOpenBurger = ref(false);
const isScrolled = ref(false);
const isOpen = ref(false);

const langStore = useLangStore()

const handleOpenBurger = () => {
  isOpenBurger.value = !isOpenBurger.value;
}
const handleCloseBurger = () => {
  isOpenBurger.value = false
}

const changeLocale = (newLocale) => {
  setTimeout(() => {
    locale.value = newLocale
    langStore.setLang(newLocale)
  }, 100)

  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
}

const modalsStore = useModalsStore()

const handleOpenModal = () => {
  modalsStore.addModal("calendar")
}

const handleOpen = () => {
  isOpen.value = !isOpen.value;
}

</script>