<template>
    <section class="md:pb-20 relative bg-blue-500">

        <!-- <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[700px] absolute z-10"></div>
        <div class="bg-gradient-to-t from-blue-500 rotate-180 top-0 from-0% w-full h-[300px] opacity-70 absolute z-10"></div>

        <NuxtImg class="absolute top-0 z-0 opacity-90 w-[600vw] max-w-max md:w-full min-h-[1000px] h-screen object-cover"
            src="/img/career/img.webp" alt="Image"> -->

        <NuxtImg class="absolute top-0 z-0 opacity-40 w-[600vw] h-screen min-w-[100vw] object-cover max-w-max md:w-full"
            :src="'https://api.avalonbali.com/assets/' + toolkitStore.settings.header_img" alt="Image"
            loading="lazy" />

        <div class="bg-gradient-to-t from-blue-500 rotate-180 top-0 from-0% w-full h-[300px] opacity-70 absolute z-10">
        </div>
        <div class="bg-gradient-to-t from-blue-500 top-[calc(1000px_-_700px)] from-20% w-full h-[1000px] absolute z-10">
        </div>


        <div class="container mx-auto relative z-20 pt-32 md:pt-64">
            <h1 data-aos="fade-up"
                class="text-[24px] 375:text-[30px] md:text-[55px] lg:text-[65px] text-3xl text-white font-normalidad font-bold mb-5 md:mb-12" v-html="currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.title">
            </h1>
            <div data-aos="fade-up" data-aos-delay="100"
                class="justify-between items-center mb-[30px] xl:mb-[81px] 3xl:mb-[60px]">
                <p class="md:text-lg text-white text-sm  max-w-[548px]" v-html="currentPageReqest?.filter(item => item.languages_code.includes(langStore.lang))[0]?.description">
                </p>
            </div>

            <div data-aos="fade-up" class="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

                <NuxtLink v-for="item in props?.cooperationFetch?.data.value" :href="'#' + item.id"
                    class=" w-full py-[30px] px-2 xl:p-0 xl:border-none border border-white/50 rounded-[10px] xl:max-w-[375px]">

                    <pre>
                        <!-- {{ item }} -->
                    </pre>

                    <div
                        class="flex items-center xl:translate-y-[32px] justify-center xl:p-4 xl:bg-blue-400 xl:w-fit xl:rounded-[20px] xl:mx-auto xl:mt-[-60px]">
                        <NuxtImg class="w-9 h-9" :src="'https://api.avalonbali.com/assets/' + item?.icon"
                            alt="img" />
                    </div>
                    <div class="relative flex xl:items-end z-10 xl:pb-[30px] xl:px-4 xl:h-[172px] ">
                        <div class="relative z-[2] w-full h-fit pointer-events-none">
                            <p class="my-4 text-white font-bold leading-none text-center">
                                {{item?.translations?.find(i => i.languages_code.includes(langStore.lang)).icon_title
                                }}
                            </p>
                            <svg class="mx-auto" width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_670_12563)">
                                    <path class="animate-fade-2s"
                                        d="M0.498793 14.7875C0.497841 14.623 0.529371 14.4599 0.591577 14.3076C0.653784 14.1553 0.745441 14.0168 0.861294 13.9C0.977497 13.7829 1.11575 13.6899 1.26807 13.6264C1.42039 13.5629 1.58378 13.5303 1.74879 13.5303C1.91381 13.5303 2.07719 13.5629 2.22951 13.6264C2.38184 13.6899 2.52009 13.7829 2.63629 13.9L12.8488 24.1125C13.5519 24.8148 14.505 25.2092 15.4988 25.2092C16.4925 25.2092 17.4457 24.8148 18.1488 24.1125L28.3613 13.9C28.4778 13.7835 28.6162 13.691 28.7685 13.6279C28.9208 13.5649 29.084 13.5324 29.2488 13.5324C29.5817 13.5324 29.9009 13.6646 30.1363 13.9C30.3717 14.1354 30.5039 14.4546 30.5039 14.7875C30.5039 15.1204 30.3717 15.4396 30.1363 15.675L19.9238 25.8875C19.3432 26.4696 18.6535 26.9313 17.8942 27.2464C17.1349 27.5615 16.3209 27.7237 15.4988 27.7237C14.6767 27.7237 13.8627 27.5615 13.1034 27.2464C12.3441 26.9313 11.6544 26.4696 11.0738 25.8875L0.861294 15.675C0.745441 15.5582 0.653784 15.4197 0.591577 15.2674C0.529371 15.1151 0.497841 14.952 0.498793 14.7875Z"
                                        fill="white" />
                                    <path class="animate-fade-1s"
                                        d="M0.498793 2.28764C0.497841 2.12313 0.529371 1.96006 0.591577 1.80776C0.653784 1.65546 0.745441 1.51694 0.861294 1.40014C0.977497 1.28298 1.11575 1.18999 1.26807 1.12653C1.42039 1.06307 1.58378 1.03039 1.74879 1.03039C1.91381 1.03039 2.07719 1.06307 2.22951 1.12653C2.38184 1.18999 2.52009 1.28298 2.63629 1.40014L14.6113 13.3876C14.7275 13.5048 14.8657 13.5978 15.0181 13.6613C15.1704 13.7247 15.3338 13.7574 15.4988 13.7574C15.6638 13.7574 15.8272 13.7247 15.9795 13.6613C16.1318 13.5978 16.2701 13.5048 16.3863 13.3876L28.3613 1.40014C28.5967 1.16476 28.9159 1.03253 29.2488 1.03253C29.5817 1.03253 29.9009 1.16476 30.1363 1.40014C30.3717 1.63552 30.5039 1.95477 30.5039 2.28764C30.5039 2.62052 30.3717 2.93976 30.1363 3.17514L18.1488 15.1501C17.4457 15.8524 16.4925 16.2468 15.4988 16.2468C14.505 16.2468 13.5519 15.8524 12.8488 15.1501L0.861294 3.17514C0.745441 3.05834 0.653784 2.91982 0.591577 2.76753C0.529371 2.61523 0.497841 2.45215 0.498793 2.28764Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_670_12563">
                                        <rect width="30" height="30" fill="white" style="fill:white;fill-opacity:1;"
                                            transform="translate(30.5) rotate(90)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <svg class="absolute group hidden xl:block 3xl:hidden w-full h-full top-0 left-0" width="261"
                            height="172" viewBox="0 0 261 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                fill="#0E88EC" fill-rule="evenodd" clip-rule="evenodd"
                                d="M89 0H15C6.71573 0 0 6.71573 0 15V157C0 165.284 6.71573 172 15 172H246C254.284 172 261 165.284 261 157V15C261 6.71573 254.284 0 246 0H173V23C173 34.0457 164.046 43 153 43H109C97.9543 43 89 34.0457 89 23V0Z" />
                            <path class="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                d="M89 0H90V-1H89V0ZM173 0V-1H172V0H173ZM15 1H89V-1H15V1ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16344 -1 15H1ZM1 157V15H-1V157H1ZM15 171C7.26802 171 1 164.732 1 157H-1C-1 165.837 6.16345 173 15 173V171ZM246 171H15V173H246V171ZM260 157C260 164.732 253.732 171 246 171V173C254.837 173 262 165.837 262 157H260ZM260 15V157H262V15H260ZM246 1C253.732 1 260 7.26801 260 15H262C262 6.16344 254.837 -1 246 -1V1ZM173 1H246V-1H173V1ZM172 0V23H174V0H172ZM172 23C172 33.4934 163.493 42 153 42V44C164.598 44 174 34.598 174 23H172ZM153 42H109V44H153V42ZM109 42C98.5066 42 90 33.4934 90 23H88C88 34.598 97.402 44 109 44V42ZM90 23V0H88V23H90Z"
                                fill="white" fill-opacity="0.5" style="fill:white;fill-opacity:0.5;"
                                mask="url(#path-1-inside-1_1360_12236)" />
                        </svg>

                        <svg class="absolute group hidden 3xl:block w-full h-full top-0 left-0" viewBox="0 0 375 172"
                            fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                fill="#0E88EC" fill-rule="evenodd" clip-rule="evenodd"
                                d="M146 0H15C6.71573 0 0 6.71573 0 15V157C0 165.284 6.71574 172 15 172H360C368.284 172 375 165.284 375 157V15C375 6.71573 368.284 0 360 0H230V23C230 34.0457 221.046 43 210 43H166C154.954 43 146 34.0457 146 23V0Z" />
                            <path class="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                d="M146 0H147V-1H146V0ZM230 0V-1H229V0H230ZM15 1H146V-1H15V1ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16344 -1 15H1ZM1 157V15H-1V157H1ZM15 171C7.26802 171 1 164.732 1 157H-1C-1 165.837 6.16345 173 15 173V171ZM360 171H15V173H360V171ZM374 157C374 164.732 367.732 171 360 171V173C368.837 173 376 165.837 376 157H374ZM374 15V157H376V15H374ZM360 1C367.732 1 374 7.26801 374 15H376C376 6.16344 368.837 -1 360 -1V1ZM230 1H360V-1H230V1ZM229 0V23H231V0H229ZM229 23C229 33.4934 220.493 42 210 42V44C221.598 44 231 34.598 231 23H229ZM210 42H166V44H210V42ZM166 42C155.507 42 147 33.4934 147 23H145C145 34.598 154.402 44 166 44V42ZM147 23V0H145V23H147Z"
                                fill="white" fill-opacity="0.5" style="fill:white;fill-opacity:0.5;"
                                mask="url(#path-1-inside-1_585_1119)" />
                        </svg>


                    </div>
                </NuxtLink>


                <!-- <NuxtLink href="#agency"
                    class=" w-full py-[30px] px-2 xl:p-0 xl:border-none border border-white/50 rounded-[10px] xl:max-w-[375px]">

                    <div
                        class="flex items-center xl:translate-y-[32px] justify-center xl:p-4 xl:bg-blue-400 xl:w-fit xl:rounded-[20px] xl:mx-auto xl:mt-[-60px]">
                        <NuxtImg class="w-9 h-9" src="/img/cooperation/banner-block-icon-2.svg" alt="img" />
                    </div>
                    <div class="relative flex xl:items-end z-10 xl:pb-[30px] xl:px-4 xl:h-[172px] ">
                        <div class="relative z-[2] w-full h-fit pointer-events-none">
                            <p class="my-4 text-white leading-none font-bold text-center">
                                {{ $t('agent_nedv') }}
                            </p>
                            <svg class="mx-auto" width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_670_12563)">
                                    <path class="animate-fade-2s"
                                        d="M0.498793 14.7875C0.497841 14.623 0.529371 14.4599 0.591577 14.3076C0.653784 14.1553 0.745441 14.0168 0.861294 13.9C0.977497 13.7829 1.11575 13.6899 1.26807 13.6264C1.42039 13.5629 1.58378 13.5303 1.74879 13.5303C1.91381 13.5303 2.07719 13.5629 2.22951 13.6264C2.38184 13.6899 2.52009 13.7829 2.63629 13.9L12.8488 24.1125C13.5519 24.8148 14.505 25.2092 15.4988 25.2092C16.4925 25.2092 17.4457 24.8148 18.1488 24.1125L28.3613 13.9C28.4778 13.7835 28.6162 13.691 28.7685 13.6279C28.9208 13.5649 29.084 13.5324 29.2488 13.5324C29.5817 13.5324 29.9009 13.6646 30.1363 13.9C30.3717 14.1354 30.5039 14.4546 30.5039 14.7875C30.5039 15.1204 30.3717 15.4396 30.1363 15.675L19.9238 25.8875C19.3432 26.4696 18.6535 26.9313 17.8942 27.2464C17.1349 27.5615 16.3209 27.7237 15.4988 27.7237C14.6767 27.7237 13.8627 27.5615 13.1034 27.2464C12.3441 26.9313 11.6544 26.4696 11.0738 25.8875L0.861294 15.675C0.745441 15.5582 0.653784 15.4197 0.591577 15.2674C0.529371 15.1151 0.497841 14.952 0.498793 14.7875Z"
                                        fill="white" />
                                    <path class="animate-fade-1s"
                                        d="M0.498793 2.28764C0.497841 2.12313 0.529371 1.96006 0.591577 1.80776C0.653784 1.65546 0.745441 1.51694 0.861294 1.40014C0.977497 1.28298 1.11575 1.18999 1.26807 1.12653C1.42039 1.06307 1.58378 1.03039 1.74879 1.03039C1.91381 1.03039 2.07719 1.06307 2.22951 1.12653C2.38184 1.18999 2.52009 1.28298 2.63629 1.40014L14.6113 13.3876C14.7275 13.5048 14.8657 13.5978 15.0181 13.6613C15.1704 13.7247 15.3338 13.7574 15.4988 13.7574C15.6638 13.7574 15.8272 13.7247 15.9795 13.6613C16.1318 13.5978 16.2701 13.5048 16.3863 13.3876L28.3613 1.40014C28.5967 1.16476 28.9159 1.03253 29.2488 1.03253C29.5817 1.03253 29.9009 1.16476 30.1363 1.40014C30.3717 1.63552 30.5039 1.95477 30.5039 2.28764C30.5039 2.62052 30.3717 2.93976 30.1363 3.17514L18.1488 15.1501C17.4457 15.8524 16.4925 16.2468 15.4988 16.2468C14.505 16.2468 13.5519 15.8524 12.8488 15.1501L0.861294 3.17514C0.745441 3.05834 0.653784 2.91982 0.591577 2.76753C0.529371 2.61523 0.497841 2.45215 0.498793 2.28764Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_670_12563">
                                        <rect width="30" height="30" fill="white"
                                            transform="translate(30.5) rotate(90)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <svg class="absolute group hidden xl:block 3xl:hidden w-full h-full top-0 left-0" width="261"
                            height="172" viewBox="0 0 261 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                fill="#0E88EC" fill-rule="evenodd" clip-rule="evenodd"
                                d="M89 0H15C6.71573 0 0 6.71573 0 15V157C0 165.284 6.71573 172 15 172H246C254.284 172 261 165.284 261 157V15C261 6.71573 254.284 0 246 0H173V23C173 34.0457 164.046 43 153 43H109C97.9543 43 89 34.0457 89 23V0Z" />
                            <path class="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                d="M89 0H90V-1H89V0ZM173 0V-1H172V0H173ZM15 1H89V-1H15V1ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16344 -1 15H1ZM1 157V15H-1V157H1ZM15 171C7.26802 171 1 164.732 1 157H-1C-1 165.837 6.16345 173 15 173V171ZM246 171H15V173H246V171ZM260 157C260 164.732 253.732 171 246 171V173C254.837 173 262 165.837 262 157H260ZM260 15V157H262V15H260ZM246 1C253.732 1 260 7.26801 260 15H262C262 6.16344 254.837 -1 246 -1V1ZM173 1H246V-1H173V1ZM172 0V23H174V0H172ZM172 23C172 33.4934 163.493 42 153 42V44C164.598 44 174 34.598 174 23H172ZM153 42H109V44H153V42ZM109 42C98.5066 42 90 33.4934 90 23H88C88 34.598 97.402 44 109 44V42ZM90 23V0H88V23H90Z"
                                fill="white" fill-opacity="0.5" style="fill:white;fill-opacity:0.5;"
                                mask="url(#path-1-inside-1_1360_12236)" />
                        </svg>

                        <svg class="absolute group hidden 3xl:block w-full h-full top-0 left-0" viewBox="0 0 375 172"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                fill="#0E88EC" fill-rule="evenodd" clip-rule="evenodd"
                                d="M146 0H15C6.71573 0 0 6.71573 0 15V157C0 165.284 6.71574 172 15 172H360C368.284 172 375 165.284 375 157V15C375 6.71573 368.284 0 360 0H230V23C230 34.0457 221.046 43 210 43H166C154.954 43 146 34.0457 146 23V0Z" />
                            <path class="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                d="M146 0H147V-1H146V0ZM230 0V-1H229V0H230ZM15 1H146V-1H15V1ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16344 -1 15H1ZM1 157V15H-1V157H1ZM15 171C7.26802 171 1 164.732 1 157H-1C-1 165.837 6.16345 173 15 173V171ZM360 171H15V173H360V171ZM374 157C374 164.732 367.732 171 360 171V173C368.837 173 376 165.837 376 157H374ZM374 15V157H376V15H374ZM360 1C367.732 1 374 7.26801 374 15H376C376 6.16344 368.837 -1 360 -1V1ZM230 1H360V-1H230V1ZM229 0V23H231V0H229ZM229 23C229 33.4934 220.493 42 210 42V44C221.598 44 231 34.598 231 23H229ZM210 42H166V44H210V42ZM166 42C155.507 42 147 33.4934 147 23H145C145 34.598 154.402 44 166 44V42ZM147 23V0H145V23H147Z"
                                fill="white" fill-opacity="0.5" style="fill:white;fill-opacity:0.5;"
                                mask="url(#path-1-inside-1_585_1119)" />
                        </svg>


                    </div>
                </NuxtLink>
                <NuxtLink href="#marketing"
                    class=" w-full py-[30px] px-2 xl:p-0 xl:border-none border border-white/50 rounded-[10px] xl:max-w-[375px]">

                    <div
                        class="flex items-center xl:translate-y-[32px] justify-center xl:p-4 xl:bg-blue-400 xl:w-fit xl:rounded-[20px] xl:mx-auto xl:mt-[-60px]">
                        <NuxtImg class="w-9 h-9" src="/img/cooperation/banner-block-icon-3.svg" alt="img" />
                    </div>
                    <div class="relative flex xl:items-end z-10 xl:pb-[30px] xl:px-4 xl:h-[172px] ">
                        <div class="relative z-[2] w-full h-fit pointer-events-none">
                            <p class="my-4 text-white font-bold leading-none text-center">
                                {{ $t('marketing') }}
                            </p>
                            <svg class="mx-auto" width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_670_12563)">
                                    <path class="animate-fade-2s"
                                        d="M0.498793 14.7875C0.497841 14.623 0.529371 14.4599 0.591577 14.3076C0.653784 14.1553 0.745441 14.0168 0.861294 13.9C0.977497 13.7829 1.11575 13.6899 1.26807 13.6264C1.42039 13.5629 1.58378 13.5303 1.74879 13.5303C1.91381 13.5303 2.07719 13.5629 2.22951 13.6264C2.38184 13.6899 2.52009 13.7829 2.63629 13.9L12.8488 24.1125C13.5519 24.8148 14.505 25.2092 15.4988 25.2092C16.4925 25.2092 17.4457 24.8148 18.1488 24.1125L28.3613 13.9C28.4778 13.7835 28.6162 13.691 28.7685 13.6279C28.9208 13.5649 29.084 13.5324 29.2488 13.5324C29.5817 13.5324 29.9009 13.6646 30.1363 13.9C30.3717 14.1354 30.5039 14.4546 30.5039 14.7875C30.5039 15.1204 30.3717 15.4396 30.1363 15.675L19.9238 25.8875C19.3432 26.4696 18.6535 26.9313 17.8942 27.2464C17.1349 27.5615 16.3209 27.7237 15.4988 27.7237C14.6767 27.7237 13.8627 27.5615 13.1034 27.2464C12.3441 26.9313 11.6544 26.4696 11.0738 25.8875L0.861294 15.675C0.745441 15.5582 0.653784 15.4197 0.591577 15.2674C0.529371 15.1151 0.497841 14.952 0.498793 14.7875Z"
                                        fill="white" />
                                    <path class="animate-fade-1s"
                                        d="M0.498793 2.28764C0.497841 2.12313 0.529371 1.96006 0.591577 1.80776C0.653784 1.65546 0.745441 1.51694 0.861294 1.40014C0.977497 1.28298 1.11575 1.18999 1.26807 1.12653C1.42039 1.06307 1.58378 1.03039 1.74879 1.03039C1.91381 1.03039 2.07719 1.06307 2.22951 1.12653C2.38184 1.18999 2.52009 1.28298 2.63629 1.40014L14.6113 13.3876C14.7275 13.5048 14.8657 13.5978 15.0181 13.6613C15.1704 13.7247 15.3338 13.7574 15.4988 13.7574C15.6638 13.7574 15.8272 13.7247 15.9795 13.6613C16.1318 13.5978 16.2701 13.5048 16.3863 13.3876L28.3613 1.40014C28.5967 1.16476 28.9159 1.03253 29.2488 1.03253C29.5817 1.03253 29.9009 1.16476 30.1363 1.40014C30.3717 1.63552 30.5039 1.95477 30.5039 2.28764C30.5039 2.62052 30.3717 2.93976 30.1363 3.17514L18.1488 15.1501C17.4457 15.8524 16.4925 16.2468 15.4988 16.2468C14.505 16.2468 13.5519 15.8524 12.8488 15.1501L0.861294 3.17514C0.745441 3.05834 0.653784 2.91982 0.591577 2.76753C0.529371 2.61523 0.497841 2.45215 0.498793 2.28764Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_670_12563">
                                        <rect width="30" height="30" fill="white"
                                            transform="translate(30.5) rotate(90)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <svg class="absolute group hidden xl:block 3xl:hidden w-full h-full top-0 left-0" width="261"
                            height="172" viewBox="0 0 261 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                fill="#0E88EC" fill-rule="evenodd" clip-rule="evenodd"
                                d="M89 0H15C6.71573 0 0 6.71573 0 15V157C0 165.284 6.71573 172 15 172H246C254.284 172 261 165.284 261 157V15C261 6.71573 254.284 0 246 0H173V23C173 34.0457 164.046 43 153 43H109C97.9543 43 89 34.0457 89 23V0Z" />

                            <path class="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                d="M89 0H90V-1H89V0ZM173 0V-1H172V0H173ZM15 1H89V-1H15V1ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16344 -1 15H1ZM1 157V15H-1V157H1ZM15 171C7.26802 171 1 164.732 1 157H-1C-1 165.837 6.16345 173 15 173V171ZM246 171H15V173H246V171ZM260 157C260 164.732 253.732 171 246 171V173C254.837 173 262 165.837 262 157H260ZM260 15V157H262V15H260ZM246 1C253.732 1 260 7.26801 260 15H262C262 6.16344 254.837 -1 246 -1V1ZM173 1H246V-1H173V1ZM172 0V23H174V0H172ZM172 23C172 33.4934 163.493 42 153 42V44C164.598 44 174 34.598 174 23H172ZM153 42H109V44H153V42ZM109 42C98.5066 42 90 33.4934 90 23H88C88 34.598 97.402 44 109 44V42ZM90 23V0H88V23H90Z"
                                fill="white" fill-opacity="0.5" style="fill:white;fill-opacity:0.5;"
                                mask="url(#path-1-inside-1_1360_12236)" />
                        </svg>

                        <svg class="absolute group hidden 3xl:block w-full h-full top-0 left-0" viewBox="0 0 375 172"
                            fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                fill="#0E88EC" fill-rule="evenodd" clip-rule="evenodd"
                                d="M146 0H15C6.71573 0 0 6.71573 0 15V157C0 165.284 6.71574 172 15 172H360C368.284 172 375 165.284 375 157V15C375 6.71573 368.284 0 360 0H230V23C230 34.0457 221.046 43 210 43H166C154.954 43 146 34.0457 146 23V0Z" />
                            <path class="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                d="M146 0H147V-1H146V0ZM230 0V-1H229V0H230ZM15 1H146V-1H15V1ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16344 -1 15H1ZM1 157V15H-1V157H1ZM15 171C7.26802 171 1 164.732 1 157H-1C-1 165.837 6.16345 173 15 173V171ZM360 171H15V173H360V171ZM374 157C374 164.732 367.732 171 360 171V173C368.837 173 376 165.837 376 157H374ZM374 15V157H376V15H374ZM360 1C367.732 1 374 7.26801 374 15H376C376 6.16344 368.837 -1 360 -1V1ZM230 1H360V-1H230V1ZM229 0V23H231V0H229ZM229 23C229 33.4934 220.493 42 210 42V44C221.598 44 231 34.598 231 23H229ZM210 42H166V44H210V42ZM166 42C155.507 42 147 33.4934 147 23H145C145 34.598 154.402 44 166 44V42ZM147 23V0H145V23H147Z"
                                fill="white" fill-opacity="0.5" style="fill:white;fill-opacity:0.5;"
                                mask="url(#path-1-inside-1_585_1119)" />
                        </svg>


                    </div>
                </NuxtLink>
                <NuxtLink href="#partners"
                    class=" w-full py-[30px] px-2 xl:p-0 xl:border-none border border-white/50 rounded-[10px] xl:max-w-[375px]">

                    <div
                        class="flex items-center xl:translate-y-[32px] justify-center xl:p-4 xl:bg-blue-400 xl:w-fit xl:rounded-[20px] xl:mx-auto xl:mt-[-60px]">
                        <NuxtImg class="w-9 h-9" src="/img/cooperation/banner-block-icon-4.svg" alt="img" />
                    </div>
                    <div class="relative flex xl:items-end z-10 xl:pb-[30px] xl:px-4 xl:h-[172px] ">
                        <div class="relative z-[2] w-full h-fit pointer-events-none">
                            <p class="my-4 text-white font-bold leading-none text-center">
                                {{ $t('partnerstvo') }}
                            </p>
                            <svg class="mx-auto" width="31" height="30" viewBox="0 0 31 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_670_12563)">
                                    <path class="animate-fade-2s"
                                        d="M0.498793 14.7875C0.497841 14.623 0.529371 14.4599 0.591577 14.3076C0.653784 14.1553 0.745441 14.0168 0.861294 13.9C0.977497 13.7829 1.11575 13.6899 1.26807 13.6264C1.42039 13.5629 1.58378 13.5303 1.74879 13.5303C1.91381 13.5303 2.07719 13.5629 2.22951 13.6264C2.38184 13.6899 2.52009 13.7829 2.63629 13.9L12.8488 24.1125C13.5519 24.8148 14.505 25.2092 15.4988 25.2092C16.4925 25.2092 17.4457 24.8148 18.1488 24.1125L28.3613 13.9C28.4778 13.7835 28.6162 13.691 28.7685 13.6279C28.9208 13.5649 29.084 13.5324 29.2488 13.5324C29.5817 13.5324 29.9009 13.6646 30.1363 13.9C30.3717 14.1354 30.5039 14.4546 30.5039 14.7875C30.5039 15.1204 30.3717 15.4396 30.1363 15.675L19.9238 25.8875C19.3432 26.4696 18.6535 26.9313 17.8942 27.2464C17.1349 27.5615 16.3209 27.7237 15.4988 27.7237C14.6767 27.7237 13.8627 27.5615 13.1034 27.2464C12.3441 26.9313 11.6544 26.4696 11.0738 25.8875L0.861294 15.675C0.745441 15.5582 0.653784 15.4197 0.591577 15.2674C0.529371 15.1151 0.497841 14.952 0.498793 14.7875Z"
                                        fill="white" />
                                    <path class="animate-fade-1s"
                                        d="M0.498793 2.28764C0.497841 2.12313 0.529371 1.96006 0.591577 1.80776C0.653784 1.65546 0.745441 1.51694 0.861294 1.40014C0.977497 1.28298 1.11575 1.18999 1.26807 1.12653C1.42039 1.06307 1.58378 1.03039 1.74879 1.03039C1.91381 1.03039 2.07719 1.06307 2.22951 1.12653C2.38184 1.18999 2.52009 1.28298 2.63629 1.40014L14.6113 13.3876C14.7275 13.5048 14.8657 13.5978 15.0181 13.6613C15.1704 13.7247 15.3338 13.7574 15.4988 13.7574C15.6638 13.7574 15.8272 13.7247 15.9795 13.6613C16.1318 13.5978 16.2701 13.5048 16.3863 13.3876L28.3613 1.40014C28.5967 1.16476 28.9159 1.03253 29.2488 1.03253C29.5817 1.03253 29.9009 1.16476 30.1363 1.40014C30.3717 1.63552 30.5039 1.95477 30.5039 2.28764C30.5039 2.62052 30.3717 2.93976 30.1363 3.17514L18.1488 15.1501C17.4457 15.8524 16.4925 16.2468 15.4988 16.2468C14.505 16.2468 13.5519 15.8524 12.8488 15.1501L0.861294 3.17514C0.745441 3.05834 0.653784 2.91982 0.591577 2.76753C0.529371 2.61523 0.497841 2.45215 0.498793 2.28764Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_670_12563">
                                        <rect width="30" height="30" fill="white" style="fill:white;fill-opacity:1;"
                                            transform="translate(30.5) rotate(90)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <svg class="absolute group hidden xl:block 3xl:hidden w-full h-full top-0 left-0" width="261"
                            height="172" viewBox="0 0 261 172" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                fill="#0E88EC" fill-rule="evenodd" clip-rule="evenodd"
                                d="M89 0H15C6.71573 0 0 6.71573 0 15V157C0 165.284 6.71573 172 15 172H246C254.284 172 261 165.284 261 157V15C261 6.71573 254.284 0 246 0H173V23C173 34.0457 164.046 43 153 43H109C97.9543 43 89 34.0457 89 23V0Z" />

                            <path class="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                d="M89 0H90V-1H89V0ZM173 0V-1H172V0H173ZM15 1H89V-1H15V1ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16344 -1 15H1ZM1 157V15H-1V157H1ZM15 171C7.26802 171 1 164.732 1 157H-1C-1 165.837 6.16345 173 15 173V171ZM246 171H15V173H246V171ZM260 157C260 164.732 253.732 171 246 171V173C254.837 173 262 165.837 262 157H260ZM260 15V157H262V15H260ZM246 1C253.732 1 260 7.26801 260 15H262C262 6.16344 254.837 -1 246 -1V1ZM173 1H246V-1H173V1ZM172 0V23H174V0H172ZM172 23C172 33.4934 163.493 42 153 42V44C164.598 44 174 34.598 174 23H172ZM153 42H109V44H153V42ZM109 42C98.5066 42 90 33.4934 90 23H88C88 34.598 97.402 44 109 44V42ZM90 23V0H88V23H90Z"
                                fill="white" fill-opacity="0.5" style="fill:white;fill-opacity:0.5;"
                                mask="url(#path-1-inside-1_1360_12236)" />
                        </svg>

                        <svg class="absolute group hidden 3xl:block w-full h-full top-0 left-0" viewBox="0 0 375 172"
                            fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                fill="#0E88EC" fill-rule="evenodd" clip-rule="evenodd"
                                d="M146 0H15C6.71573 0 0 6.71573 0 15V157C0 165.284 6.71574 172 15 172H360C368.284 172 375 165.284 375 157V15C375 6.71573 368.284 0 360 0H230V23C230 34.0457 221.046 43 210 43H166C154.954 43 146 34.0457 146 23V0Z" />
                            <path class="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                                d="M146 0H147V-1H146V0ZM230 0V-1H229V0H230ZM15 1H146V-1H15V1ZM1 15C1 7.26801 7.26801 1 15 1V-1C6.16344 -1 -1 6.16344 -1 15H1ZM1 157V15H-1V157H1ZM15 171C7.26802 171 1 164.732 1 157H-1C-1 165.837 6.16345 173 15 173V171ZM360 171H15V173H360V171ZM374 157C374 164.732 367.732 171 360 171V173C368.837 173 376 165.837 376 157H374ZM374 15V157H376V15H374ZM360 1C367.732 1 374 7.26801 374 15H376C376 6.16344 368.837 -1 360 -1V1ZM230 1H360V-1H230V1ZM229 0V23H231V0H229ZM229 23C229 33.4934 220.493 42 210 42V44C221.598 44 231 34.598 231 23H229ZM210 42H166V44H210V42ZM166 42C155.507 42 147 33.4934 147 23H145C145 34.598 154.402 44 166 44V42ZM147 23V0H145V23H147Z"
                                fill="white" fill-opacity="0.5" style="fill:white;fill-opacity:0.5;"
                                mask="url(#path-1-inside-1_585_1119)" />
                        </svg>


                    </div>
                </NuxtLink> -->
            </div>


        </div>

        <div class="absolute -right-[72px] top-[250px] w-36 z-10">
            <NuxtImg src="/img/icons/vector-logo.svg" class="w-full" alt="vector-logo" />
        </div>
    </section>
</template>

<script setup>
import { usePagesStore } from '~/stores/functions/pages';

const pagesStore = usePagesStore();
const langStore = useLangStore();
const currentPageReqest = ref([]);
const toolkitStore = useToolkit();

const props = defineProps({
    cooperationFetch: {
        required: true
    }
})


watchEffect(() => {
    currentPageReqest.value = pagesStore?.pagesList?.filter(item => item.slug === 'cooperation')[0]?.translations
});
</script>
