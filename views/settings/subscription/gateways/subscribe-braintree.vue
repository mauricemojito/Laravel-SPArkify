<template>
    <div>
        <!-- Common Subscribe Form Contents -->
        <div class="card card-default">
            <div class="card-header">
                <div class="float-left" :class="{'btn-table-align': hasMonthlyAndYearlyPlans}">
                    {{ $t('Subscribe') }}
                </div>

                <!-- Interval Selector Button Group -->
                <div class="float-right">
                    <div class="btn-group btn-group-sm" role="group" v-if="hasMonthlyAndYearlyPaidPlans">
                        <!-- Monthly Plans -->
                        <button type="button" class="btn btn-light"
                                @click="showMonthlyPlans"
                                :class="{'active': showingMonthlyPlans}">

                            {{ $t('Monthly') }}
                        </button>

                        <!-- Yearly Plans -->
                        <button type="button" class="btn btn-light"
                                @click="showYearlyPlans"
                                :class="{'active': showingYearlyPlans}">

                            {{ $t('Yearly') }}
                        </button>
                    </div>
                </div>

                <div class="clearfix"></div>
            </div>

            <div class="table-responsive">
                <!-- European VAT Notice -->
                <p class="m-4" v-if="spark.collectsEuropeanVat">
                    {{ $t('All subscription plan prices are excluding applicable VAT.') }}
                </p>

                <!-- Plan Error Message -->
                <div class="alert alert-danger m-4" v-if="form.errors.has('plan')">
                    {{ form.errors.get('plan') }}
                </div>

                <table class="table table-responsive-sm table-valign-middle mb-0 ">
                    <thead></thead>
                    <tbody>
                    <tr v-for="plan in paidPlansForActiveInterval">
                        <!-- Plan Name -->
                        <td>
                            <div class="d-flex align-items-center">
                                <i class="radio-select mr-2" @click="selectPlan(plan)"
                                   :class="{'radio-select-selected': selectedPlan == plan, invisible: form.busy}"></i>
                                {{ plan.name }}
                            </div>
                        </td>

                        <!-- Plan Features Button -->
                        <td>
                            <button class="btn btn-default" @click="showPlanDetails(plan)">
                                <i class="fa fa-btn fa-star-o"></i> {{ $t('Features') }}
                            </button>
                        </td>

                        <!-- Plan Price -->
                        <td>
                        <span class="table-plan-text">
                            <strong class="table-plan-price">{{ plan.price | currency }}</strong>
                            {{ plan.type == 'user' && spark.chargesUsersPerSeat ? '/ '+ spark.seatName : '' }}
                            {{ plan.type == 'user' && spark.chargesUsersPerTeam ? '/ '+ 'team' : '' }}
                            {{ plan.type == 'team' && spark.chargesTeamsPerSeat ? '/ '+ spark.teamSeatName : '' }}
                            {{ plan.type == 'team' && spark.chargesTeamsPerMember ? '/ '+ 'member' : '' }}
                            / {{ (plan.interval) | capitalize }}
                        </span>
                        </td>

                        <!-- Trial Days -->
                        <td class="table-plan-price table-plane-text text-right">
                        <span v-if="plan.trialDays && ! hasSubscribed(plan)">
                            {{ plan.trialDays}} {{ $t('Day Trial') }}
                        </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Billing Information -->
        <div class="card card-default" v-show="selectedPlan">
            <div class="card-header">{{ $t('Billing Information') }}</div>

            <div class="card-body">
                <!-- Generic 500 Level Error Message / Stripe Threw Exception -->
                <div class="alert alert-danger" v-if="form.errors.has('form')">
                    {{ $t('We had trouble validating your card. It\'s possible your card provider is preventing us from charging the card. Please contact your card provider or customer support.') }}
                </div>

                <form role="form" ref="form">
                    <!-- Payment Method -->
                    <div class="form-group row" v-if="hasPaymentMethod()">
                        <label for="use_existing_payment_method" class="col-md-4 col-form-label text-md-right">{{ $t('Payment Method') }}</label>

                        <div class="col-md-6">
                            <select name="use_existing_payment_method" v-model="form.use_existing_payment_method" id="use_existing_payment_method" class="form-control">
                                <option value="1">{{ $t('Use existing payment method') }}</option>
                                <option value="0">{{ $t('Use a different method') }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Braintree Container -->
                    <div class="form-group row"  v-show="form.use_existing_payment_method != '1'">
                        <div class="col-md-6 offset-md-4">
                            <div id="braintree-subscribe-container" class="m-b-md"></div>
                        </div>
                    </div>

                    <!-- Subscribe Button -->
                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button v-if="form.use_existing_payment_method == 1" type="submit" class="btn btn-primary" @click.prevent="subscribe" :disabled="form.busy">
                                <span v-if="form.busy">
                                    <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Subscribing') }}
                                </span>

                                <span v-else>
                                    {{ $t('Subscribe') }}
                                </span>
                            </button>
                            <button v-else type="submit" class="btn btn-primary" :disabled="form.busy">
                                <span v-if="form.busy">
                                    <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Subscribing') }}
                                </span>

                                <span v-else>
                                    {{ $t('Subscribe') }}
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    var base = require('settings/subscription/subscribe-braintree');

    export default {
        name: "subscribe-braintree",
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Subscribe": "Subscribe",
        "Monthly": "Monthly",
        "Yearly": "Yearly",
        "All subscription plan prices are excluding applicable VAT.": "All subscription plan prices are excluding applicable VAT.",
        "Features": "Features",
        "Day Trial": "Day Trial",
        "Billing Information": "Billing Information",
        "We had trouble validating your card. It's possible your card provider is preventing us from charging the card. Please contact your card provider or customer support.":"We had trouble validating your card. It's possible your card provider is preventing us from charging the card. Please contact your card provider or customer support.",
        "Use existing payment method": "Use existing payment method",
        "Use a different method": "Use a different method",
        "Subscribing": "Subscribing",
        "Subscribe": "Subscribe"
    },
    "de": {
        "Subscribe": "Abonnieren",
        "Monthly": "Monatlich",
        "Yearly": "Jährlich",
        "All subscription plan prices are excluding applicable VAT.": "Alle Abonnementpreise enthalten keine Mehrwertsteuer.",
        "Features": "Features",
        "Day Trial": "Tagestest",
        "Billing Information": "Rechnungsinformationen",
        "We had trouble validating your card. It's possible your card provider is preventing us from charging the card. Please contact your card provider or customer support.":"Wir hatten Probleme beim Validieren Ihrer Karte. Möglicherweise hat der Kartenanbieter das abheben verhindert. Bitte wenden Sie sich an Ihren Kartenanbieter oder Kundendienst.",
        "Use existing payment method": "Vorhandene Zahlungsmethode verwenden",
        "Use a different method": "Verwenden Sie eine andere Methode",
        "Subscribing": "Abonnieren",
        "Subscribe": "Abonnieren"
    },
    "ru": {
        "Subscribe": "Подписаться",
        "Monthly": "Ежемесячно",
        "Yearly": "Ежегодно",
        "All subscription plan prices are excluding applicable VAT.": "Все цены на подписку без НДС.",
        "Features": "Возможности",
        "Day Trial": "Дневная пробная версия",
        "Billing Information": "Платежная информация",
        "We had trouble validating your card. It's possible your card provider is preventing us from charging the card. Please contact your card provider or customer support.": "У нас возникли проблемы с проверкой вашей карты. Возможно, поставщик карточки мешает нам соединиться с ней. Обратитесь к поставщику карточки или в службу поддержки клиентов.",
        "Use existing payment method": "Использовать существующий метод оплаты",
        "Use a different method": "Использовать другой метод",
        "Subscribing": "Подписка",
        "Subscribe": "Подписаться"
    },
    "ua": {
        "Subscribe": "Підписатися",
        "Monthly": "Щомісяця",
        "Yearly": "Щорічно",
        "All subscription plan prices are excluding applicable VAT.": "Усі ціни на передплату виключають ПДВ.",
        "Features": "Можливості",
        "Day Trial": "Денна пробна версія",
        "Billing Information": "Платіжна інформація",
        "We had trouble validating your card. It's possible your card provider is preventing us from charging the card. Please contact your card provider or customer support.": "У нас виникли проблеми з перевіркою вашої картки. Можливо, постачальник картки заважає нам з'єднатися з нею. Зверніться до постачальника картки або до служби підтримки клієнтів.",
        "Use existing payment method": "Використовувати існуючий метод оплати",
        "Use a different method": "Використовувати інший метод",
        "Subscribing": "Підписка",
        "Subscribe": "Підписатися"
    }
}
</i18n>