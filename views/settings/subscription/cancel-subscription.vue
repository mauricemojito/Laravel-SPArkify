<template>
    <div>
        <div class="card card-default">
            <div class="card-body">
                <button class="btn btn-outline-danger"
                        @click="confirmCancellation"
                        :disabled="form.busy">

                    {{ $t('Cancel Subscription') }}
                </button>
            </div>
        </div>

        <!-- Confirm Cancellation Modal -->
        <div class="modal" id="modal-confirm-cancellation" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('Cancel Subscription') }}
                        </h5>
                    </div>

                    <div class="modal-body">
                        {{ $t('Are you sure you want to cancel your subscription?') }}
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('No, Go Back') }}</button>

                        <button type="button" class="btn btn-danger" @click="cancel" :disabled="form.busy">
                        <span v-if="form.busy">
                            <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Cancelling') }}
                        </span>

                            <span v-else>
                            {{ $t('Yes, Cancel') }}
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var base = require('settings/subscription/cancel-subscription');

    export default {
        name: "cancel-subscription",
        props: ["user","team", "plans", "billableType"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Cancel Subscription": "Cancel Subscription",
        "Are you sure you want to cancel your subscription?": "Are you sure you want to cancel your subscription?",
        "No, Go Back": "No, Go Back",
        "All subscription plan prices are excluding applicable VAT.": "All subscription plan prices are excluding applicable VAT.",
        "Cancelling": "Cancelling",
        "Yes, Cancel": "Yes, Cancel"
    },
    "de": {
        "Cancel Subscription": "Abonnement kündigen",
        "Are you sure you want to cancel your subscription?": "Möchten Sie Ihr Abonnement wirklich kündigen?",
        "No, Go Back": "Nein, geh zurück",
        "All subscription plan prices are excluding applicable VAT.": "Alle Abonnementpreise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.",
        "Cancelling": "Stornierung",
        "Yes, Cancel": "Ja, Abbrechen"
    },
    "ru": {
        "Cancel Subscription": "Отменить подписку",
        "Are you sure you want to cancel your subscription?": "Вы уверены, что хотите отменить свою подписку?",
        "No, Go Back": "Нет, возвращайся",
        "All subscription plan prices are excluding applicable VAT.": "Все цены плана подписки указаны без учета НДС.",
        "Cancelling": "Отмена",
        "Yes, Cancel": "Да, отмена"
    },
    "ua": {
        "Cancel Subscription": "Скасувати підписку",
        "Are you sure you want to cancel your subscription?": "Ви впевнені, що хочете скасувати вашу підписку?",
        "No, Go Back": "Ні, Повернутися",
        "All subscription plan prices are excluding applicable VAT.": "Усі ціни тарифного плану виключаються з ПДВ",
        "Cancelling": "Відмінити",
        "Yes, Cancel": "Так, Скасувати"
    }
}
</i18n>