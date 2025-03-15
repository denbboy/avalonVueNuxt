<template>
    <div class="content__inner z-0 relative overflow-x-hidden overflow-y-auto w-screen h-screen lg:w-[calc(100vw_-_100px)] lg:h-[calc(100vh_-_100px)]">

        <iframe :src="itemData?.video_360" class="w-full h-full md:rounded-[20px]" frameborder="0"></iframe>

    </div>
</template>

<script setup>

const modalsStore = useModalsStore()

const itemData = ref({});

// watchEffect(() => {
    itemData.value = modalsStore.modalData
// })

</script>
