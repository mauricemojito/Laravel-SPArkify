<template>
    <div class="card card-default">
        <!-- Update Payment Method Heading -->
        <div class="card-header">
            <div class="float-left">
                {{ $t('Update Payment Method') }}
            </div>

            <div class="float-right">
                <!-- Paypal Indicator -->
                <span v-if="billable.paypal_email">
                    <i class="fa fa-btn fa-paypal"></i>
                    {{ billable.paypal_email }}
                </span>

                <!-- Credit Card Indicator -->
                <span v-if="billable.card_last_four">
                    <i class="['fa', 'fa-btn', cardIcon]"></i>
                    ************{{ billable.card_last_four }}
                </span>
            </div>

            <div class="clearfix"></div>
        </div>

        <div class="card-body">
            <!-- Payment Method Update Success Message -->
            <div class="alert alert-success" v-if="form.successful">
                {{ $t('Your payment method has been updated.') }}
            </div>

            <!-- Generic 500 Level Error Message / Braintree Threw Exception -->
            <div class="alert alert-danger" v-if="form.errors.has('form')">
                {{ $t('We had trouble updating your payment method') }}
            </div>

            <form role="form">
                <!-- Braintree Container -->
                <div id="braintree-payment-method-container" class="m-b-md"></div>

                <!-- Update Button -->
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" :disabled="form.busy">
                        <span v-if="form.busy">
                            <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Updating') }}
                        </span>

                        <span v-else>
                            {{ $t('Update') }}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    const base = require('settings/payment-method/update-payment-method-braintree');

    export default {
        name: "update-payment-method-braintree",
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Update Payment Method": "Update Payment Method",
        "Your card has been updated.":  "Your card has been updated.",
        "We had trouble updating your card": "We had trouble updating your card. It's possible your card provider is preventing us from charging the card. Please contact your card provider or customer support.",
        "Updating": "Updating",
        "Update": "Update"
    },
    "de": {
        "Update Payment Method": "Zahlungsmethode aktualisieren",
        "Your card has been updated.":  "Ihre Karte wurde aktualisiert.",
        "We had trouble updating your card": "Wir hatten Probleme beim Validieren Ihrer Karte. Möglicherweise hat der Kartenanbieter das abheben verhindert. Bitte wenden Sie sich an Ihren Kartenanbieter oder Kundendienst.",
        "Updating": "Aktualisierung",
        "Update": "Aktualisieren"
    },
    "ru": {
        "Update Payment Method": "Обновить способ оплаты",
        "Your card has been updated.":  "Ваша карта была обновлена.",
        "We had trouble updating your card": "У нас возникли проблемы с проверкой вашей карты. Возможно, поставщик карточки мешает нам соединиться с ней. Обратитесь к поставщику карточки или в службу поддержки клиентов.",
        "Updating": "Обновление",
        "Update": "Обновить"
    },
    "ua": {
        "Update Payment Method": "Оновити спосіб оплати",
        "Your card has been updated.":  "Ваша карта була оновлена.",
        "We had trouble updating your card": "У нас виникли проблеми з перевіркою вашої картки. Можливо, постачальник картки заважає нам з'єднатися з нею. Зверніться до постачальника картки або до служби підтримки клієнтів.",
        "Updating": "Оновлення",
        "Update": "Оновити"
    }
}
</i18n>