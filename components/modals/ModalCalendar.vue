<template>
    <div
        class="content__inner z-0 relative overflow-x-hidden overflow-y-scroll p-5 md:p-0 w-full flex flex-col items-center h-full md:rounded-[20px]">

        <div class="absolute right-[-34px] -top-5 md:top-5 z-0">
            <img src="/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo" />
        </div>
        <div class="absolute left-[-34px] bottom-0 md:bottom-[154px] z-0">
            <img src="/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo" />
        </div>

        <div class="md:flex">
            <div
                class="pb-4 border-b border-whiteOp-300 mb-4 md:border-b-0 flex flex-col md:mb-0 md:bg-blue-600 md:p-10 md:pr-0 md:w-full">
                <div class="hidden md:block md:mb-[65px] pb-10 border-b border-whiteOp-300 md:-ml-10">
                    <img src="/img/newLogo.png" width="100" class="mx-auto" alt="ic logo" />
                </div>
                <h2 class="text-white text-lg md:text-[30px] md:leading-[30px] font-bold mb-5">
                    {{ $t('m_calendar_text_1') }}
                </h2>
                <p class="text-white/50 text-sm flex items-center gap-2 md:hidden">
                    <svg width="14" height="14" class="fill-white/50" viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.99398 0.333496C3.31398 0.333496 0.333984 3.32016 0.333984 7.00016C0.333984 10.6802 3.31398 13.6668 6.99398 13.6668C10.6807 13.6668 13.6673 10.6802 13.6673 7.00016C13.6673 3.32016 10.6807 0.333496 6.99398 0.333496ZM7.00065 12.3335C4.05398 12.3335 1.66732 9.94683 1.66732 7.00016C1.66732 4.0535 4.05398 1.66683 7.00065 1.66683C9.94732 1.66683 12.334 4.0535 12.334 7.00016C12.334 9.94683 9.94732 12.3335 7.00065 12.3335ZM6.85398 3.66683H6.81398C6.54732 3.66683 6.33398 3.88016 6.33398 4.14683V7.2935C6.33398 7.52683 6.45398 7.74683 6.66065 7.86683L9.42732 9.52683C9.65399 9.66016 9.94732 9.5935 10.0807 9.36683C10.2207 9.14016 10.1473 8.84016 9.91399 8.70683L7.33398 7.1735V4.14683C7.33398 3.88016 7.12065 3.66683 6.85398 3.66683Z" />
                    </svg>
                    30 {{ $t('minutes') }}
                </p>
                <div class="hidden md:flex gap-y-4 gap-x-[10px] flex-wrap mt-[30px] max-w-[320px] md:mr-10 md:mt-auto">
                    <label for="rad-1" class="flex items-center cursor-pointer text-sm text-white/50">
                        <input type="radio" id="rad-1" name="location" class="hidden peer">
                        <span
                            class="min-w-4 h-4 inline-block rounded-full border border-blue-400 peer-checked:bg-blue-400 peer-checked:border-blue-400 mr-2"></span>
                        {{ $t('bali') }}
                    </label>
                    <label for="rad-2" class="flex items-center cursor-pointer text-sm text-white/50">
                        <input type="radio" id="rad-2" name="location" class="hidden peer">
                        <span
                            class="min-w-4 h-4 inline-block rounded-full border border-blue-400 peer-checked:bg-blue-400 peer-checked:border-blue-400 mr-2"></span>
                        {{ $t('kyiv') }}
                    </label>
                    <label for="rad-3" class="flex items-center cursor-pointer text-sm text-white/50 order-last">
                        <input type="radio" id="rad-3" name="location" class="hidden peer">
                        <span
                            class="min-w-4 h-4 inline-block rounded-full border w-fit border-blue-400 peer-checked:bg-blue-400 peer-checked:border-blue-400 mr-2"></span>
                        {{ $t('m_calendar_text_2') }}
                    </label>
                </div>
            </div>
            <div class="md:p-10 md:w-full">
                <h2 class="mb-5 text-white font-bold text-lg md:text-2xl">
                    {{ $t('m_calendar_text_3') }}
                </h2>
                <CalendlyInlineWidget style="height: 400px;" id="my-calendar" v-bind="options" />
            </div>
        </div>

    </div>
</template>

<script setup>
const toolkitStore = useToolkit();

const options = {
    url: toolkitStore?.settings?.schedule_meeting_link,
}
</script>
