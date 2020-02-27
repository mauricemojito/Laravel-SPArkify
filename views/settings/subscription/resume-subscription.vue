<template>
    <div class="card card-default">
        <div class="card-header">
            <div class="float-left" :class="{'btn-table-align': hasMonthlyAndYearlyPlans}">
                {{ $t('Resume Subscription') }}
            </div>

            <!-- Interval Selector Button Group -->
            <div class="float-right">
                <div class="btn-group btn-group-sm" v-if="hasMonthlyAndYearlyPlans">
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
            <!-- Plan Error Message - In General Will Never Be Shown -->
            <div class="alert alert-danger mb-4" v-if="planForm.errors.has('plan')">
                {{ planForm.errors.get('plan') }}
            </div>

            <!-- Cancellation Information -->
            <div class="m-4" v-html="$t('You have cancelled your subscription to the', { name: activePlan.name, interval: activePlan.interval | capitalize  })"></div>

            <div class="m-4" v-html="$t('The benefits of your subscription will continue until your current billing period ends on', { ends_at: activeSubscription.ends_at | date })"></div>

            <!-- European VAT Notice -->
            <p class="m-4" v-if="spark.collectsEuropeanVat">
                {{ $t('All subscription plan prices include applicable VAT.') }}
            </p>

            <table class="table table-responsive-sm table-valign-middle mb-0 ">
                <thead></thead>
                <tbody>
                <tr v-for="plan in paidPlansForActiveInterval">
                    <!-- Plan Name -->
                    <td>
                        <div class="d-flex align-items-center">
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
                        <div class="btn-table-align">
                            <strong class="table-plan-price">{{ priceWithTax(plan) | currency }}</strong>
                            {{ plan.type == 'user' && spark.chargesUsersPerSeat ? '/ '+ spark.seatName : '' }}
                            {{ plan.type == 'user' && spark.chargesUsersPerTeam ? '/ '+ 'team' : '' }}
                            {{ plan.type == 'team' && spark.chargesTeamsPerSeat ? '/ '+ spark.teamSeatName : '' }}
                            {{ plan.type == 'team' && spark.chargesTeamsPerMember ? '/ '+ 'member' : '' }}
                            / {{ __(plan.interval) | capitalize }}
                        </div>
                    </td>

                    <!-- Plan Select Button -->
                    <td class="text-right">
                        <button class="btn btn-plan"
                                v-bind:class="{'btn-default': ! isActivePlan(plan), 'btn-warning': isActivePlan(plan)}"
                                @click="updateSubscription(plan)"
                                :disabled="selectingPlan">

                                <span v-if="selectingPlan === plan">
                                    <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Resuming') }}
                                </span>

                            <span v-if="! isActivePlan(plan) && selectingPlan !== plan">
                                    {{ $t('Switch') }}
                                </span>

                            <span v-if="isActivePlan(plan) && selectingPlan !== plan">
                                    {{ $t('Resume') }}
                            </span>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    var base = require('settings/subscription/resume-subscription');

    export default {
        name: "resume-subscription",
        props: ["user","team", "plans", "billableType"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Resume Subscription": "Resume Subscription",
        "Monthly":  "Monthly",
        "Yearly": "Yearly",
        "Features": "Features",
        "Resuming": "Resuming",
        "Switch": "Switch",
        "Resume": "Resume",
        "All subscription plan prices include applicable VAT.": "All subscription plan prices include applicable VAT.",
        "You have cancelled your subscription to the":  "You have cancelled your subscription to the {name} ({interval}) plan",
        "The benefits of your subscription will continue until your current billing period ends on":  "The benefits of your subscription will continue until your current billing period ends on {ends_at}. You may resume your subscription at no extra cost until the end of the billing period."
    },
    "de": {
        "Resume Subscription": "Abonnement fortsetzen",
        "Monthly":  "Monatlich",
        "Yearly": "Jährlich",
        "Features": "Features",
        "Resuming": "Fortsetzung",
        "Switch": "Umschaltten",
        "Resume": "Resume",
        "All subscription plan prices include applicable VAT.": "Alle Abonnementpreise enthalten die jeweils gültige Mehrwertsteuer.",
        "You have cancelled your subscription to the":  "Sie haben Ihr Abonnement für den {name} ({interval}) - Paket gekündigt",
        "The benefits of your subscription will continue until your current billing period ends on":  "Die Vorteile Ihres Abonnements bleiben bis zum Ende Ihres aktuellen Abrechnungszeitraums am {ends_at} bestehen. Sie können Ihr Abonnement bis zum Ende des Abonnements ohne zusätzliche Kosten fortsetzen."
    },
    "ru": {
        "Resume Subscription": "Возобновить подписку",
        "Monthly":  "Ежемесячно",
        "Yearly": "Ежегодно",
        "Features": "Особенности",
        "Resuming": "Возобновление",
        "Switch": "Переключатель",
        "Resume": "Резюме",
        "All subscription plan prices include applicable VAT.": "Все цены в тарифных планах включают в себя применимый НДС.",
        "You have cancelled your subscription to the":  "Вы отменили подписку на план {name} ({interval})",
        "The benefits of your subscription will continue until your current billing period ends on":  "Преимущества вашей подписки будут продолжаться до тех пор, пока не истечет текущий платежный период {ends_at}. Вы можете возобновить свою подписку без дополнительной оплаты до конца расчетного периода."
    },
    "ua": {
        "Resume Subscription": "Відновити підписку",
        "Monthly":  "Щомісячно",
        "Yearly": "Щорічно",
        "Features": "Особливості",
        "Resuming": "Відновлення",
        "Switch": "Перемикнути",
        "Resume": "Відновити",
        "All subscription plan prices include applicable VAT.": "Всі ціни в тарифних планах включають в себе ПДВ.",
        "You have cancelled your subscription to the":  "Ви скасували підписку на план {name} ({interval})",
        "The benefits of your subscription will continue until your current billing period ends on":  "Переваги вашої підписки триватимуть до тих пір, поки не закінчиться поточний платіжний період {ends_at}. Ви можете відновити свою підписку без додаткової оплати до кінця розрахункового періоду."
    }
}
</i18n>