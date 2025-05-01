<template>
    <div
        class="content__inner z-0 relative overflow-x-hidden overflow-y-auto p-5 lg:p-10 max-w-[600px] lg:max-h-[90vh]">

        <div class="absolute right-[-34px] -top-5 lg:top-5 z-0">
            <img src="/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo" />
        </div>
        <div class="absolute left-[-34px] bottom-0 lg:bottom-[154px] z-0">
            <img src="/img/icons/vector-logo.svg" class="w-[68px]" alt="vector-logo" />
        </div>

        <h2 class="text-white text-lg lg:text-2xl font-bold text-center mb-5">
            {{ $t("button_vac") }}
        </h2>

        <form @submit.prevent="handleSubmitForm" class="relative z-[1]">

            <label
                class="border border-dashed border-white/20 w-full flex items-center justify-center flex-col cursor-pointer py-5 lg:py-8 rounded-xl mb-[10px]">
                <input @change="handleFileChange" accept=".doc, .docx, .txt, .rtf, .odt, .pdf" type="file"
                    class="hidden">
                <p class="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0261 0C6.70014 0.00366211 4.00473 2.59089 4.00043 5.78382V15.6797C3.97809 17.216 4.81902 18.6448 6.2013 19.4192C7.58358 20.1936 9.29309 20.1936 10.6754 19.4192C12.0576 18.6448 12.8986 17.216 12.8762 15.6797V8.07042C12.8762 6.55931 11.6002 5.33431 10.0261 5.33431C8.45203 5.33431 7.17599 6.55931 7.17599 8.07042V14.5406C7.17599 14.9994 7.56349 15.3714 8.0415 15.3714C8.5195 15.3714 8.90701 14.9994 8.90701 14.5406V8.07042C8.90701 7.47708 9.40805 6.99608 10.0261 6.99608C10.6442 6.99608 11.1452 7.47708 11.1452 8.07042V15.6797C11.1627 16.6192 10.6506 17.4946 9.80594 17.9692C8.96123 18.4439 7.91543 18.4439 7.07073 17.9692C6.22602 17.4946 5.71395 16.6192 5.73145 15.6797V5.78382C5.73145 3.50682 7.65424 1.66095 10.0261 1.66095C12.398 1.66095 14.3208 3.50682 14.3208 5.78382V12.0479C14.3208 12.5068 14.7083 12.8788 15.1863 12.8788C15.6643 12.8788 16.0518 12.5068 16.0518 12.0479V5.78382C16.0475 2.59089 13.3521 0.00366211 10.0261 0Z"
                            fill="white" />
                    </svg>
                    <span v-if="!file" class="text-white text-xs lg:text-base font-bold lg:ml-2">
                        {{ $t('m_vacancy_text_1') }}
                    </span>
                    <span v-if="file" class="text-white text-xs lg:text-base font-bold lg:ml-2">{{ file.name }}</span>
                </p>
                <p v-if="!file" class="text-white/40 mt-2 text-xs lg:text-base">
                    {{ $t('m_vacancy_text_2') }}
                </p>
            </label>

            <input v-model="fullName" class="custom-input mb-[10px]" type="text" :placeholder="$t('input_name')">
            <input v-model="email" class="custom-input mb-[10px]" type="email" placeholder="Email">
            <textarea v-model="message" class="custom-input resize-none h-[94px] lg:h-[120px]" name="" id=""
                :placeholder="$t('input_textarea')"></textarea>

            <p v-if="isErrorFile" class="text-red-700 text-left transition-all h-full" :class="{
                'max-h-10 opacity-100 mt-2': isError,
                'max-h-0 opacity-0': !isError
            }">
                {{ $t('m_vacancy_text_3') }}
            </p>

            <p class="text-red-700 text-left transition-all h-full" :class="{
                'max-h-10 opacity-100 mt-2': isError,
                'max-h-0 opacity-0': !isError
            }">
                {{ $t('fill_all_fields') }}
            </p>
            <p class="text-white/50 text-left transition-all h-full" :class="{
                'max-h-10 opacity-100 mt-2': isSending,
                'max-h-0 opacity-0': !isSending
            }">
                {{ $t('wait_for_send') }}
            </p>
            <p class="text-green-500 text-left transition-all h-full" :class="{
                'max-h-10 opacity-100 mt-2': isSuccess,
                'max-h-0 opacity-0': !isSuccess
            }">
                {{ $t('message_sent_successfuly') }}
            </p>

            <button type="submit" class="white-button w-full mt-5 lg:leading-[120%] lg:py-5 leading-[90%]">
                {{ $t('send_cv') }}
            </button>

            <p class="text-center text-white text-xs lg:text-sm w-full mt-5">
                {{ $t('m_message_text_3') }}
                <NuxtLink href="/docs/privacy-police"
                    class="text-blue-400 font-bold underline transition-all hover:text-blue-700">
                    {{ $t('policy') }}
                </NuxtLink>
            </p>

        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFormsStore } from '~/stores/functions/forms';
import { useReCaptcha } from 'vue-recaptcha-v3';

const recaptchaInstance = useReCaptcha();

const recaptcha = async () => {
    await recaptchaInstance?.recaptchaLoaded();
    const token = await recaptchaInstance?.executeRecaptcha('yourActionHere');
    return token;
};


// Определение реактивных переменных
const file = ref(null);
const fullName = ref('');
const email = ref('');
const message = ref('');
const isError = ref(false);
const isSending = ref(false);
const isSuccess = ref(false);
const formsStore = useFormsStore();

const currentForm = formsStore.forms.length && formsStore.forms?.filter(item => item.slug === "vacancy-form")[0]

// Функция для сброса формы
const resetForm = () => {
    fullName.value = '';
    email.value = '';
    message.value = '';
    file.value = null;
};

// Функция для проверки правильности email
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Функция обработки отправки формы
const handleSubmitForm = async () => {
    if (currentForm?.captcha) {
        if (!recaptcha()) {
            errorText.value = 'Recaptcha error'
            return isError.value = true
        }
    }

    try {
        if (!fullName.value || !email.value || !message.value || !file.value || !validateEmail(email.value)) {
            isError.value = true;
        } else {
            isError.value = false;
            isSending.value = true;

            const formData = new FormData()
            formData.append('file', file.value)

            await useFetch('https://api.avalonbali.com/files', {
                method: 'POST',
                body: formData
            }).then(async (res) => {

                const fileId = res.data.value.data.id

                await useFetch('/api/send-form', {
                    method: 'POST',
                    body: {
                        name: fullName,
                        email,
                        message,
                        file: fileId,
                        form: "vacancy"
                    }
                }).then(() => {
                    isSending.value = false;
                    isSuccess.value = true;
                    resetForm()
                })

            })

        }

    } catch (error) {
        console.error('Contact form could not be sent', error)
    }
};

const isErrorFile = ref('');

const handleFileChange = (event) => {
    const checkFile = event.target.files[0];
    file.value = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;

    if (checkFile && checkFile.size > maxSize) {
        isErrorFile.value = true;
    } else {
        isErrorFile.value = false;
    }
};

</script>
