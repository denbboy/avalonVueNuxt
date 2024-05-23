<template>
  <section class="contat pb-14 md:pb-24">
    <div class="container">
      <form action=""
        class="flex flex-col p-5 lg:py-12 lg:px-[130px] border border-whiteOp-300 rounded-2xl text-center md:p-12 relative">
        <img src="/assets/img/index/dot-decor.png" class="absolute right-[-1px] bottom-[-1px] w-5 md:w-8" alt="decor">
        <h2 class="font-bold text-white text-2xl mb-4 md:text-3xl md:mb-7 leading-[100%]">
          Хотите узнать больше?
        </h2>
        <div class="flex flex-col md:flex-row gap-2 lg:gap-5">
          <input type="text" placeholder="Имя"
            class="bg-whiteOp-200 rounded-xl text-white text-sm px-5 py-4 outline-none lg:p-6 lg:text-base w-full">
          <input id="phone-index" type="tel"
            class="bg-whiteOp-200 rounded-xl text-white text-sm px-5 py-4 outline-none lg:p-6 lg:text-base w-full">
          <button type="submit" class="white-button w-full">
            Отправить заявку
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
