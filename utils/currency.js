// Курс доллара к рупиям (можно обновлять или получать с API)
const USD_TO_IDR_RATE = 15750; // Примерный курс на 2024 год

/**
 * Конвертирует доллары в рупии
 * @param {number} usdAmount - сумма в долларах
 * @returns {number} сумма в рупиях
 */
export function convertUsdToIdr(usdAmount) {
    if (!usdAmount || isNaN(usdAmount)) return 0;
    return Math.round(usdAmount * USD_TO_IDR_RATE);
}

/**
 * Форматирует число с разделителями тысяч
 * @param {number} amount - сумма для форматирования
 * @returns {string} отформатированная сумма
 */
export function formatAmount(amount) {
    if (!amount || isNaN(amount)) return '0';
    return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
