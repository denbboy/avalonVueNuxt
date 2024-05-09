<template>
  <transition
      name="fade"
      @after-leave="maybeNavigate"
  >

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>


  </transition>
</template>

<style>
@import "/assets/fonts/grandis/stylesheet.css";
@import "/assets/css/general.css";
</style>
