<template>
    <div id="burgerMenu"
        class="'burger__body absolute z-[2] top-full left-0 transition-all w-full h-fit bg-blue-500 flex-col text-center pt-12 pb-8 text-white text-lg border-t-2 border-whiteOp-300 z-10'"
        :class="props.isOpenBurger ? 'opacity-100 visible' : 'opacity-0 invisible'">
        <div class="group burger__proj mb-8 md:hidden block">
            <p @click="openSubMenu" id="toggleProjects"
                class="flex items-center gap-1 justify-center hover:text-blue-400 transition-all cursor-pointer">
                {{ $t('project') }}
                <svg class="group-hover:-scale-y-100 transition-all" width="6" height="5" viewBox="0 0 6 5" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-white group-hover:fill-blue-400 transition-all"
                        d="M3.63428 3.93725L5.98828 0.25L0.00303125 0.25L2.36528 3.93575C2.43272 4.04304 2.52625 4.13149 2.63713 4.19285C2.74802 4.2542 2.87264 4.28646 2.99937 4.28661C3.12609 4.28676 3.25079 4.2548 3.36182 4.19371C3.47285 4.13261 3.56659 4.04438 3.63428 3.93725Z" />
                </svg>
            </p>
            <div id="projectsBody" :class="isOpenSubMenu ? 'max-h-96 mt-8' : 'max-h-0 mt-0'"
                class="burger__proj_body h-full overflow-hidden flex transition-all flex-col">

                <NuxtLink @click="handleCloseBurger"
                    :href="`/projects/${item?.translations?.filter(item => item.languages_code.includes(props.langStore.lang))[0]?.slug}`"
                    v-for="item in props?.projectsStore?.projects" :key="item.id"
                    class="mb-4 text-sm hover:text-blue-400 transition-all">
                    {{item?.translations?.filter(item => item.languages_code.includes(props.langStore.lang))[0]?.title}}
                </NuxtLink>

            </div>
        </div>
        <div class="md:hidden flex flex-col gap-8 mb-12 pb-7 border-b border-whiteOp-300">
            <NuxtLink @click="handleCloseBurger" :href="mainPageLink + '/#about-company'"
                class="hover:text-blue-400 transition-all">
                {{ $t('about_company') }}
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" :href="mainPageLink + '/#island'"
                class="hover:text-blue-400 transition-all">
                {{ $t('why_bali') }}
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" href="/cooperation" class="hover:text-blue-400 transition-all">
                {{ $t('cooperation') }}
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" href="/career" class="hover:text-blue-400 transition-all">
                {{ $t('career') }}
            </NuxtLink>
            <NuxtLink @click="handleCloseBurger" href="#contacts" class=" hover:text-blue-400 transition-all">
                {{ $t('contacts') }}
            </NuxtLink>

        </div>
        <div class=" flex flex-col gap-4">
            <a :href="`tel:${toolkitStore?.settings?.phone?.replace(/[^0-9+]/g, '')}`"
                class="hover:text-blue-400 transition-all font-bold text-white text-base">
                {{ toolkitStore?.settings?.phone }}
            </a>

            <button type="button" @click="handleOpenModal"
                class="py-4 w-full text-white text-xs font-bold max-w-56 m-auto border border-white rounded-xl transition-all hover:bg-white hover:text-blue-400">
                {{ $t('make_a_meeting') }}
            </button>
        </div>
        <div class="flex xl:hidden mt-12 pt-7 border-t border-whiteOp-300 gap-11 justify-center">
            <ul class="flex items-center gap-4">
                <li :class="locale.includes('ua') ? '*:text-blue-400' : ''">
                    <button @click="() => changeLocale('ua')"
                        class="hover:text-blue-400 transition-all text-white text-base">
                        UA
                    </button>
                </li>
                <li :class="locale.includes('ru') ? '*:text-blue-400' : ''">
                    <button @click="() => changeLocale('ru')"
                        class="hover:text-blue-400 transition-all text-white text-base">
                        RU
                    </button>
                </li>
                <li :class="locale.includes('en') ? '*:text-blue-400' : ''">
                    <button @click="() => changeLocale('en')"
                        class="hover:text-blue-400 transition-all text-white text-base">
                        EN
                    </button>
                </li>
            </ul>
            <ul class="flex items-center gap-1">
                <li v-if="toolkitStore?.settings?.soc_link_whats">
                    <a :href="`tel:${toolkitStore?.settings?.soc_link_whats}`">
                        <img loading="lazy" width="40" src="/img/index/tw-burger.svg" alt="ic" />
                    </a>
                </li>
                <li v-if="toolkitStore?.settings?.soc_link_inst">
                    <a :href="`tel:${toolkitStore?.settings?.soc_link_inst}`">
                        <img loading="lazy" width="40" src="/img/index/inst-burger.svg" alt="ic" />
                    </a>
                </li>
                <li v-if="toolkitStore?.settings?.soc_link_fb">
                    <a :href="`tel:${toolkitStore?.settings?.soc_link_fb}`">
                        <img loading="lazy" width="40" src="/img/index/face-burger.svg" alt="ic" />
                    </a>
                </li>
                <li v-if="toolkitStore?.settings?.soc_link_yt">
                    <a :href="`tel:${toolkitStore?.settings?.soc_link_yt}`">
                        <img loading="lazy" width="40" src="/img/index/yout-burger.svg" alt="ic" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['isOpenBurger', 'projectsStore', 'langStore'])
const emit = defineEmits(['update:isOpenBurger']);

const openSubMenu = () => {
    isOpenSubMenu.value = !isOpenSubMenu.value;
};
const isOpenSubMenu = ref(false);
const { t, locale } = useI18n()


console.log('props.isOpenBurger', props.isOpenBurger);

import { ref, defineProps, onMounted, computed, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLangStore } from '~/stores/functions/language';
import { useToolkit } from '~/stores/functions/toolkit';
import { usePreloaderStore } from '~/stores/functions/preloader';
import { useRouter, useRoute } from 'vue-router';
import { useModalsStore } from '~/stores/functions/modals';

const router = useRouter();
const route = useRoute();

const langStore = useLangStore();
const toolkitStore = useToolkit();
const preloaderStore = usePreloaderStore();
const modalsStore = useModalsStore();

const isLoading = ref(false);
const mainPageLink = ref('/');
const DEFAULT_LOCALE = 'en';

const changeLanguage = (newLocale) => {
    const currentPath = route.fullPath;
    let pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');

    pathWithoutLocale = newLocale !== DEFAULT_LOCALE
        ? `/${newLocale}${pathWithoutLocale}`
        : `/${pathWithoutLocale}`;

    mainPageLink.value = `/${newLocale}`;

    if (router.currentRoute.value.fullPath !== pathWithoutLocale) {
        router.push(pathWithoutLocale);
    }

    locale.value = newLocale;
    langStore.setLang(newLocale);
    localStorage.setItem('selectedLanguage', newLocale);
    
    setTimeout(preloaderStore.stop, 500);

    handleCloseBurger();
};

const changeLocale = (newLocale) => {
    isLoading.value = true;
    preloaderStore.start();
    setTimeout(() => changeLanguage(newLocale), 500);
};

onMounted(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const urlLocale = route.fullPath.match(/^\/([a-z]{2})(\/|$)/)?.[1];
    const initialLocale = urlLocale || savedLanguage || DEFAULT_LOCALE;

    // changeLocale(initialLocale);

    if (typeof window !== 'undefined') {
        mainPageLink.value = `/${(localStorage.getItem('selectedLanguage') || DEFAULT_LOCALE).replace('/', '')}`;
    }
});


const handleCloseBurger = () => {
    emit('update:isOpenBurger', false);
};

const handleOpenModal = () => {
    modalsStore.addModal("calendar");
    handleCloseBurger();
};

</script>