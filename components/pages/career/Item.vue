<template>
    <div data-aos="fade-up">
        <div class="select career-select group" :class="{ 'active': isOpen }">
            <div class="select__head py-6 flex justify-between items-center cursor-pointer" @click="handleOpen">
                <div class="mr-7">
                    <time class="mb-2 block text-white/60 text-xs md:text-base md:mb-5">03/10/2023</time>
                    <h2 class="text-lg text-white leading-5 font-bold md:text-3xl">Главный архитектор проекта</h2>
                </div>
                <div
                    class="flex items-center transition-all justify-center rounded-[10px] w-11 h-11 min-w-11 group-[.active]:bg-blue-400 bg-blue-700">
                    <img class="group-[.active]:block hidden" src="/assets/img/icons/minus-white.svg" alt="">
                    <img class="group-[.active]:hidden block" src="/assets/img/icons/plus-white.svg" alt="">
                </div>
            </div>
            <div class="select__body career-select-body">
                <p><b>Вид занятости:</b> полная занятость</p>
                <p><b>Контактное лицо:</b> HR менеджер</p>
                <p><b>Телефон:</b> +380 63 364 45 98</p>
                <br>
                <p><b>Привіт, Ми — Група компаній Д-І-М, активний, амбітний і соціально відповідальний гравець
                        на ринку
                        нерухомості.</b></p>
                <br>
                <p><b>Ми стали відомі завдяки проектуванню та будівництву неординарних комплексів для життя.</b></p>
                <br>
                <p>До себе в команду ми шукаємо <b> мотивованого Менеджера з продажу нерухомості</b>, який допоможе
                    нам
                    розширити нашу клієнтську базу та досягти нових висот у галузі нерухомості.</p>
                <br>
                <p><b>Твоїми основними задачами буде наступне:</b></p>
                <ul>
                    <li>Консультування клієнтів щодо вибору та придбання нерухомості</li>
                    <li>Ведення переговорів та укладання договорів з потенційними клієнтами</li>
                    <li>Підтримка та розвиток відносин з діючими клієнтами</li>
                    <li>Проведення оглядів та презентацій об'єктів нерухомості</li>
                </ul>
                <br>
                <p><b>Ти підходиш нам якщо:</b></p>
                <ul>
                    <li>Маєш досвід роботи в сфері продажу нерухомості від забудовника — це буде твоїм великим
                        плюсом
                    </li>
                    <li>Вмієш просувати послуги та переконувати клієнтів</li>
                    <li>Маєш високий рівень комунікабельності та навичок переговорів</li>
                    <li>Знанеш ринок нерухомості як свої «п'ять пальців»</li>
                    <li>Любиш працювати в команді та прагнеш досягати цілей</li>
                </ul>
                <br>
                <p><b>Ти, наш новий менеджер з продажу отримаєш у компанії:</b></p>
                <ul>
                    <li>Фіксована ставку + гарний % від продажу</li>
                    <li>Прозору систему нарахування бонусів — чим вищий результат, тим вище зарплата.</li>
                    <li>Зручний та сучасний офіс з продажу.</li>
                    <li>Лояльне керівництво та команда професіоналів</li>
                    <li>Розвиток: прогресивне навчання для співробітників усіх категорій, а не лише ТОП-менеджменту.
                    </li>
                    <li>Корпоративний відпочинок: відмінні корпоративні заходи з розмахом і в стилі DIM.</li>
                </ul>
                <br>
                <p><b>Тебе зацікавила наша робота? Надішли нам своє резюме, і ми зв’яжемося з тобою!</b></p>
                <br>
                <button @click="handleOpenModal" class="white-button px-14">Отправить резюме</button>
            </div>
        </div>
    </div>
</template>

<script setup>

const isOpen = ref(false)

const handleOpen = () => {
    isOpen.value = !isOpen.value
}

const modalsStore = useModalsStore()

const handleOpenModal = () => {
    modalsStore.addModal("presentation")
}

</script>
