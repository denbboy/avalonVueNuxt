<template>
  <div class="flex 3xl:gap-10 gap-6 items-center">
    <NuxtLinkLocale to="/">
      <img
        loading="lazy"
        src="/img/newLogo.png"
        class="hidden md:max-w-[55px] w-full 3xl:max-w-[95px] xl:block"
        alt="logo"
      />
      <img
        loading="lazy"
        format="png"
        width="145"
        height="30"
        src="/img/logo-mob.png"
        class="xl:hidden"
        alt="logo"
      />
    </NuxtLinkLocale>
    <div class="items-center md:gap-6 3xl:gap-10 hidden md:flex">
      <div class="relative group">
        <button
          type="button"
          class="projectsButton flex items-center gap-1 text-white md:text-xs 3xl:text-base before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300 after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300"
        >
          {{ $t('project') }}

          <svg
            width="6"
            height="5"
            viewBox="0 0 6 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.63428 3.93725L5.98828 0.25L0.00303125 0.25L2.36528 3.93575C2.43272 4.04304 2.52625 4.13149 2.63713 4.19285C2.74802 4.2542 2.87264 4.28646 2.99937 4.28661C3.12609 4.28676 3.25079 4.2548 3.36182 4.19371C3.47285 4.13261 3.56659 4.04438 3.63428 3.93725Z"
              fill="white"
            />
          </svg>
        </button>
        <div
          class="projectsMenu opacity-0 invisible group-hover:opacity-100 group-hover:visible flex transition-all flex-col p-6 rounded-xl bg-blue-500 absolute top-[30px] left-0 border border-whiteOp-300"
        >
          <NuxtLinkLocale
            :to="`/projects/${
              item?.translations?.filter((item) =>
                item.languages_code.toLowerCase().startsWith(props.langStore.lang.toLowerCase()),
              )[0]?.slug
            }`"
            v-for="item in props.projectsStore.projects"
            :key="item.id"
            class="text-white md:text-xs 3xl:text-base last:mb-0 mb-4 whitespace-nowrap relative before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300 after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300"
          >
            {{
              item?.translations?.filter((item) =>
                item.languages_code.toLowerCase().startsWith(props.langStore.lang.toLowerCase()),
              )[0]?.title
            }}
          </NuxtLinkLocale>
        </div>
      </div>
      <NuxtLinkLocale
        to="/#about-company"
        class="text-white md:text-xs 3xl:text-base relative transition-all before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300 after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300"
      >
        {{ $t('about_company') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
        to="/#island"
        class="text-white md:text-xs 3xl:text-base relative before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300 after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300"
      >
        {{ $t('why_bali') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
        to="/cooperation"
        class="text-white md:text-xs 3xl:text-base relative before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300 after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300"
      >
        {{ $t('cooperation') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
        to="/career"
        class="text-white md:text-xs 3xl:text-base relative before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300 after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300"
      >
        {{ $t('career') }}
      </NuxtLinkLocale>
      <NuxtLinkLocale
        to="/#contacts"
        class="text-white md:text-xs 3xl:text-base relative before:block before:w-0 hover:before:w-2/3 before:h-[1px] before:bg-white before:absolute before:bottom-[-5px] before:left-0 before:transition-all before:duration-300 after:block after:w-0 hover:after:w-2/3 after:h-[1px] after:bg-white after:absolute after:bottom-[-9px] after:right-0 after:transition-all after:duration-300"
      >
        {{ $t('contacts') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['projectsStore', 'langStore']);
</script>
