<template>
    <div>
        <!-- Current Discount -->
        <div class="alert alert-success" v-if="currentDiscount">
            <span v-if="currentDiscount.duration === 'repeating' && currentDiscount.duration_in_months > 1"><span v-html="$t('repeating > 1', { currentDiscount: formattedDiscount(currentDiscount), duration_in_months: currentDiscount.duration_in_months})"></span></span>
            <span v-if="currentDiscount.duration === 'repeating' && currentDiscount.duration_in_months === 1"><span v-html="$t('repeating == 1', { currentDiscount: formattedDiscount(currentDiscount)})"></span></span>
            <span v-if="currentDiscount.duration === 'forever'"><span v-html="$t('forever', { currentDiscount: formattedDiscount(currentDiscount)})"></span></span>
            <span v-if="currentDiscount.duration === 'once'"><span v-html="$t('once', { currentDiscount: formattedDiscount(currentDiscount)})"></span></span>
        </div>

        <!-- Update Card -->
        <update-payment-method-braintree :user="user" :team="team" :billable-type="billableType"></update-payment-method-braintree>

        <div>
            <div v-if="billable.current_billing_plan">
                <!-- Redeem Coupon -->
               <redeem-coupon :user="user" :team="team" :billable-type="billableType"></redeem-coupon>
            </div>
        </div>
    </div>
</template>

<script>
    import RedeemCoupon from './redeem-coupon'
    import UpdatePaymentMethodBraintree from './update-payment-method-braintree'

    const base = require('settings/payment-method-braintree');

    export default {
        name: "payment-method-braintree",
        mixins: [base],
        components: {UpdatePaymentMethodBraintree, RedeemCoupon}
    }
</script>

<i18n>
{
    "en": {
        "repeating > 1": "You currently receive a discount of {currentDiscount} for all invoices during the next {duration_in_months} billing cycles.",
        "repeating == 1":  "You currently receive a discount of {currentDiscount} for all invoices during the next billing cycle.",
        "forever": "You currently receive a discount of {currentDiscount} forever.",
        "once": "You currently receive a discount of {currentDiscount} for a single invoice."
    },
    "de": {
        "repeating > 1": "Sie erhalten derzeit einen Rabatt von {currentDiscount} für alle Rechnungen während der nächsten {duration_in_months} Abrechnungszyklen.",
        "repeating == 1":  "Sie erhalten derzeit einen Rabatt von {currentDiscount} für alle Rechnungen während des nächsten Abrechnungszyklus.",
        "forever": "Sie erhalten derzeit einen Rabatt von {currentDiscount} für immer.",
        "once": "Sie erhalten derzeit einen Rabatt von {currentDiscount} für eine einzelne Rechnung."
    },
    "ru": {
        "repeating > 1": "В настоящее время вы получаете скидку в размере {currentDiscount} для всех счетов в течение следующих {duration_in_months} циклов оплаты.",
        "repeating == 1":  "В настоящее время вы получаете скидку {currentDiscount} на все счета в течение следующего цикла выставления счетов.",
        "forever": "В настоящее время вы получаете скидку {currentDiscount} навсегда.",
        "once": "В настоящее время вы получаете скидку {currentDiscount} для одного счета."
    },
    "ua": {
        "repeating > 1": "В даний час ви отримуєте знижку в розмірі {currentDiscount} для всіх рахунків протягом наступних {duration_in_months} циклів оплати.",
        "repeating == 1":  "В даний час ви отримуєте знижку {currentDiscount} на всі рахунки протягом наступного циклу виставлення рахунків.",
        "forever": "В даний час ви отримуєте знижку {currentDiscount} назавжди.",
        "once": "В даний час ви отримуєте знижку {currentDiscount} для одного рахунку."
    }
}
</i18n>