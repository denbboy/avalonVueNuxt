<template>
    <div
        class="content__inner z-0 relative overflow-x-hidden overflow-y-auto max-w-[90vw] lg:max-h-[90vh]">

        <iframe class="w-[90vw] h-[90vh]" :src="itemData?.rtsp_code" frameborder="0" allowfullscreen></iframe>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFormsStore } from '~/stores/functions/forms';
import { useReCaptcha } from 'vue-recaptcha-v3';

const modalsStore = useModalsStore()

const itemData = ref({});

// watchEffect(() => {
    itemData.value = modalsStore.modalData
// })

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

            const result = await formRequest();
            isSending.value = true;

            setTimeout(() => {
                isSending.value = false;
                isSuccess.value = true;

                resetForm();
            }, 1000);
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

import { createDirectus, rest, readFlow } from '@directus/sdk';

const client = createDirectus('https://avalon-panel.sonisapps.com').with(rest());

const formRequest = async () => {
    const formData = new FormData();
    formData.append('phone', fullName.value);
    formData.append('email', email.value);
    formData.append('message', message.value);
    formData.append('file', file.value);

    const result = await client.request(
        readFlow('78957f27-5d57-49a2-bdfe-93be73e7e487', {
            fields: ['*'],
            body: formData, // Передаем FormData в теле запроса
            method: 'POST' // Указываем метод запроса, если это POST-запрос
        })
    );
}

</script>
