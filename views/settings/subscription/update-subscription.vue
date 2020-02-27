<template>
    <div>
        <div class="card card-default">
            <div class="card-header">
                <div class="float-left" :class="{'btn-table-align': hasMonthlyAndYearlyPlans}">
                    {{ $t('Update Subscription') }}
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
                <div class="alert alert-danger m-4" v-if="planForm.errors.has('plan')">
                    {{ planForm.errors.get('plan') }}
                </div>

                <!-- Current Subscription (Active) -->
                <div class="m-4" v-if="activePlan.active" v-html="$t('You are currently subscribed to the name (interval) plan.', { name: activePlan.name, interval: activePlan.interval | capitalize  })">
                </div>

                <!-- Current Subscription (Archived) -->
                <div class="alert alert-warning m-4" v-if=" ! activePlan.active">
                    <div v-html="$t('You are currently subscribed to the name (interval) plan.', { name: activePlan.name, interval: activePlan.interval | capitalize  })"></div>
                    <div v-html="$t('This plan has been discontinued')"></div>
                </div>

                <!-- European VAT Notice -->
                <p class="m-4" v-if="spark.collectsEuropeanVat">
                    {{ $t('All subscription plan prices include applicable VAT.') }}
                </p>

                <table class="table table-responsive-sm table-valign-middle mb-0 ">
                    <thead></thead>
                    <tbody>
                    <tr v-for="plan in plansForActiveInterval">
                        <!-- Plan Name -->
                        <td>
                            <div class="d-flex align-items-center">
                                <i class="radio-select mr-2" @click="!isActivePlan(plan) ? confirmPlanUpdate(plan) : 0"
                                   :class="{'radio-select-selected': isActivePlan(plan), invisible: selectingPlan}"></i>
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
                                    <span v-if="plan.price == 0">
                                        {{ $t('Free') }}
                                    </span>

                                <span v-else>
                                        <strong class="table-plan-price">{{ priceWithTax(plan) | currency }}</strong>
                                        {{ plan.type == 'user' && spark.chargesUsersPerSeat ? '/ '+ spark.seatName : '' }}
                                        {{ plan.type == 'user' && spark.chargesUsersPerTeam ? '/ '+ 'team' : '' }}
                                        {{ plan.type == 'team' && spark.chargesTeamsPerSeat ? '/ '+ spark.teamSeatName : '' }}
                                        {{ plan.type == 'team' && spark.chargesTeamsPerMember ? '/ '+ 'member' : '' }}
                                        / {{ __(plan.interval) | capitalize }}
                                    </span>
                            </div>
                        </td>

                        <!-- Plan Select Button -->
                        <td class="text-right">
                                <span v-if="selectingPlan && selectingPlan === plan">
                                    <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Updating') }}
                                </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Confirm Plan Update Modal -->
        <div class="modal" id="modal-confirm-plan-update" tabindex="-2" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content" v-if="confirmingPlan">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('Update Subscription') }}
                        </h5>
                    </div>

                    <!-- Modal Body -->
                    <div class="modal-body">
                        <p v-html="$t('Are you sure you want to switch to the name (interval) plan?', { name: confirmingPlan.name, interval: confirmingPlan.interval | capitalize  })"></p>
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('No, Go Back') }}</button>

                        <button type="button" class="btn btn-primary" @click="approvePlanUpdate">{{ $t("Yes, I'm Sure") }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var base = require('settings/subscription/update-subscription');

    export default {
        name: "update-subscription",
        props: ["user","team", "plans", "billableType"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Update Subscription": "Update Subscription",
        "Monthly":  "Monthly",
        "Yearly": "Yearly",
        "Features": "Features",
        "This plan has been discontinued": "This plan has been discontinued, but you may continue your subscription to this plan as long as you wish. If you cancel your subscription and later want to begin a new subscription, you will need to choose from one of the active plans listed below.",
        "Updating": "Updating",
        "You are currently subscribed to the name (interval) plan.": "You are currently subscribed to the {name} ({interval}) plan.",
        "Are you sure you want to switch to the name (interval) plan?": "Are you sure you want to switch to the {name} ({interval}) plan?",
        "No, Go Back": "No, Go Back",
        "Yes, I'm Sure": "Yes, I'm Sure"
    },
    "de": {
        "Update Subscription": "Abonnement aktualisieren",
        "Monthly":  "Monatlich",
        "Yearly": "Jährlich",
        "Features": "Features",
        "This plan has been discontinued": "Dieser Plan wurde eingestellt, Sie können Ihr Abonnement jedoch solange fortsetzen, wie Sie möchten. Wenn Sie Ihr Abonnement kündigen und später ein neues Abonnement beginnen möchten, müssen einen der unten aufgeführten aktiven Pläne wählen.",
        "Updating": "Aktualisierung",
        "You are currently subscribed to the name (interval) plan.": "Sie haben derzeit den Plan {name} ({interval}) abonniert.",
        "Are you sure you want to switch to the name (interval) plan?": "Möchten Sie wirklich zum Plan {name} ({intervall}) wechseln?",
        "No, Go Back": "Nein, geh zurück",
        "Yes, I'm Sure": "Ja, ich bin sicher"
    },
    "ru": {
        "Update Subscription": "Обновить подписку",
        "Monthly":  "Ежемесячно",
        "Yearly": "Ежегодно",
        "Features": "Особенности",
        "This plan has been discontinued": "Этот план был прекращен, но вы можете продолжать подписку на этот план так долго, как пожелаете. Если вы отмените свою подписку и позже захотите начать новую подписку, вам нужно будет выбрать один из активных планов, перечисленных ниже.",
        "Updating": "Обновление",
        "You are currently subscribed to the name (interval) plan.": "В настоящее время вы подписаны на план {name} ({interval}).",
        "Are you sure you want to switch to the name (interval) plan?": "Вы уверены, что хотите перейти на план {name} ({interval})?",
        "No, Go Back": "Нет, возвращайся",
        "Yes, I'm Sure": "Да, я уверен"
    },
    "ua": {
        "Update Subscription": "Оновити підписку",
        "Monthly":  "Щомісячно",
        "Yearly": "Щорічно",
        "Features": "Особливості",
        "This plan has been discontinued": "Цей план був припинений, але ви можете продовжувати підписку на цей план так довго, як забажаєте. Якщо ви скасуєте свою підписку і пізніше захочете почати нову підписку, вам потрібно буде вибрати один з активних планів, перерахованих нижче.",
        "Updating": "Оновлення",
        "You are currently subscribed to the name (interval) plan.": "В даний час ви підписані на план {name} ({interval}).",
        "Are you sure you want to switch to the name (interval) plan?": "Ви впевнені, що хочете перейти на план {name} ({interval})?",
        "No, Go Back": "Ні, повертайся",
        "Yes, I'm Sure": "Так, я впевнений"
    }
}
</i18n>