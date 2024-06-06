<template>

  <section class="map py-14 md:py-24">
    <div class="container">
      <h2 class="font-bold text-white text-3xl text-center mb-8 lg:hidden">
        Топовая локация
      </h2>

      <div class="overflow-hidden rounded-2xl mb-7 lg:mb-0 lg:rounded-none lg:rounded-t-2xl">
        <!-- <img src="/assets/img/about/map.jpg" class="scale-150 lg:scale-100" alt="map ph"> -->
        <!-- <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20587.053357881974!2d36.66047509044602!3d49.83528567477884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412715b15ca991f5%3A0xb47eee1e7df4b5c2!2z0KfRg9Cz0YPQtdCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MzUwMA!5e0!3m2!1sru!2sua!4v1717136555168!5m2!1sru!2sua"
          allowfullscreen="" loading="lazy"
          class="w-full h-[700px] border-none"
          referrerpolicy="no-referrer-when-downgrade"></iframe> -->

        <!-- <iframe src="https://www.google.com/maps/d/u/0/edit?mid=1eQ_MuJRI84FyOBXEQNonemBuQKR1hfo&usp=sharing" width="640" height="480"></iframe> -->
        <iframe src="https://www.google.com/maps/d/embed?mid=1eQ_MuJRI84FyOBXEQNonemBuQKR1hfo&ehbc=2E312F" class="w-full h-[700px] border-none -mt-[100px]"></iframe>
      </div>
      <div
        class="lg:flex lg:items-center lg:justify-between lg:gap-5 lg:py-10 lg:px-7 lg:border lg:border-whiteOp-300 lg:rounded-b-2xl lg:mt-[-1px]">
        <p class="mb-5 text-white text-base text-center md:text-xl lg:text-left lg:m-0">
          Если вы на острове,
          мы с радостью проведём вам экскурсию по объекту!
        </p>
        <button @click="handleOpenModal" type="button" class="white-button px-7 mx-auto lg:mx-0 lg:px-[60px]">
          Записаться на просмотр
        </button>
      </div>
    </div>
  </section>

</template>

<script setup>
const modalsStore = useModalsStore()

const handleOpenModal = () => {
  modalsStore.addModal('presentation')
}
</script>