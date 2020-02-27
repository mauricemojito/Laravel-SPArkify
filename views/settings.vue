<template>
    <div class="spark-screen container">
        <div class="row">
            <!-- Tabs -->
            <div class="col-md-3 spark-settings-tabs">
                <aside>
                    <h3 class="nav-heading ">
                        {{ $t('setting') }}
                    </h3>
                    <ul class="nav flex-column mb-4 ">
                        <li class="nav-item ">
                            <router-link class="nav-link" :to="{name: 'profile'}">
                                <svg class="icon-20 " viewBox="0 0 20 20 " xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M10 20C4.4772 20 0 15.5228 0 10S4.4772 0 10 0s10 4.4772 10 10-4.4772 10-10 10zm0-17C8.343 3 7
              4.343 7 6v2c0 1.657 1.343 3 3 3s3-1.343 3-3V6c0-1.657-1.343-3-3-3zM3.3472 14.4444C4.7822 16.5884 7.2262 18 10
              18c2.7737 0 5.2177-1.4116 6.6528-3.5556C14.6268 13.517 12.3738 13 10 13s-4.627.517-6.6528 1.4444z "></path>
                                </svg>
                                {{ $t('profile') }}
                            </router-link>
                        </li>

                        <li class="nav-item " v-if="spark.usesTeams">
                            <router-link class="nav-link" :to="{name: spark.teamsPrefix}">
                                <svg class="icon-20 " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 19 20 ">
                                    <path d="M6 8C4 8 2 6.2 2 4s2-4 4-4c2.3 0 4 1.8 4 4S8.4 8 6 8zm0 1c2.3 0 4.3.4 6.2 1l-1 6H9.8l-1 4H3l-.6-4H1l-1-6c2-.6
              4-1 6-1zm8.4.2c1.3 0 2.6.4 3.8 1l-1 5.8H16l-1 4h-4l.4-2h1.3l1.6-8.8zM12 0c2.3 0 4 1.8 4 4s-1.7 4-4 4c-.4 0-.8
              0-1.2-.2.8-1 1.3-2.4 1.3-3.8s0-2.7-1-3.8l1-.2z "></path>
                                </svg>
                                {{ $t('teams') }}
                            </router-link>
                        </li>

                        <li class="nav-item ">
                            <router-link class="nav-link" :to="{name: 'security'}">
                                <svg class="icon-20 " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 18 20 ">
                                    <path d="M3 8V6c0-3.3 2.7-6 6-6s6 2.7 6 6v2h1c1 0 2 1 2 2v8c0 1-1 2-2 2H2c-1 0-2-1-2-2v-8c0-1 1-2 2-2h1zm5
              6.7V17h2v-2.3c.6-.3 1-1 1-1.7 0-1-1-2-2-2s-2 1-2 2c0 .7.4 1.4 1 1.7zM6 6v2h6V6c0-1.7-1.3-3-3-3S6 4.3 6 6z "
                                    ></path>
                                </svg>
                                {{ $t('security') }}
                            </router-link>
                        </li>
                        <li class="nav-item " v-if="spark.usesApi">
                            <router-link class="nav-link" :to="{name: 'api'}">
                                <svg class="icon-20 " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 20 20 ">
                                    <path d="M20 14v4c0 1-1 2-2 2h-4v-2c0-1-1-2-2-2s-2 1-2 2v2H6c-1 0-2-1-2-2v-4H2c-1 0-2-1-2-2s1-2 2-2h2V6c0-1
              1-2 2-2h4V2c0-1 1-2 2-2s2 1 2 2v2h4c1 0 2 1 2 2v4h-2c-1 0-2 1-2 2s1 2 2 2h2z "></path>
                                </svg>
                                {{ $t('api') }}
                            </router-link>
                        </li>
                    </ul>
                </aside>

                <!-- Billing Tabs -->
                <aside  v-if="spark.canBillCustomers">
                    <h3 class="nav-heading ">
                        {{ $t('billing') }}
                    </h3>
                    <ul class="nav flex-column mb-4 ">

                        <li class="nav-item " v-if="spark.hasPaidPlans">
                            <router-link class="nav-link" :to="{name: 'subscription'}">
                                <svg class="icon-20 " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 14 20 ">
                                    <path d="M7 3v2c-2.8 0-5 2.2-5 5 0 1.4.6 2.6 1.5 3.5L2 15c-1.2-1.3-2-3-2-5 0-4 3-7 7-7zm5 2c1.2 1.3 2 3
              2 5 0 4-3 7-7 7v-2c2.8 0 5-2.2 5-5 0-1.4-.6-2.6-1.5-3.5L12 5zM7 20l-4-4 4-4v8zM7 8V0l4 4-4 4z "></path>
                                </svg>
                                {{ $t('subscription') }}
                            </router-link>
                        </li>

                        <li class="nav-item ">
                            <router-link class="nav-link" :to="{name: 'payment-method'}">
                                <svg class="icon-20 " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 20 16 ">
                                    <path d="M18 4V2H2v2h16zm0 4H2v6h16V8zM0 2c0-1 1-2 2-2h16c1 0 2 1 2 2v12c0 1-1 2-2 2H2c-1 0-2-1-2-2V2zm4 8h4v2H4v-2z "></path>
                                </svg>
                                {{ $t('payment methods') }}
                            </router-link>
                        </li>

                        <li class="nav-item ">
                            <router-link class="nav-link" :to="{name: 'invoices'}">
                                <svg class="icon-20 " xmlns="http://www.w3.org/2000/svg " viewBox="0 0 20 20 ">
                                    <path d="M4 2h16l-3 9H4c-.6 0-1 .4-1 1s.5 1 1 1h13v2H4c-1.7 0-3-1.3-3-3s1.3-3 3-3h.3L3 5 2 2H0V0h3c.5 0
              1 .5 1 1v1zm1 18c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm10 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z "></path>
                                </svg>
                                {{ $t('invoice') }}
                            </router-link>
                        </li>
                    </ul>
                </aside>

            </div>

            <!-- Tab cards -->
            <div class="col-md-9">
                <div class="tab-content">
                    <div class="tab-pane active">
                        <router-view :user="user"
                                     :support-form="supportForm"
                                     :teams="teams"
                                     :billable-type="billableType">
                        </router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Api from'./settings/api'
    import Teams from'./settings/teams'
    import Profile from'./settings/profile'
    import Security from'./settings/security'
    import Invoices from './settings/invoices'
    import Subscription from'./settings/subscription'
    import PaymentMethod from './settings/payment-method'

    const base = require('settings/settings');

    export default {
        props:['user','teams','supportForm','locale'],
        mixins: [base],
        components: {Profile, Teams, Security, Api, Subscription, PaymentMethod, Invoices}
    }
</script>

<i18n>
{
    "en": {
        "setting": "Settings",
        "profile": "Profile",
        "teams": "Teams",
        "security": "Security",
        "api": "API",
        "billing": "Billing",
        "subscription": "Subscription",
        "payment methods": "Payment Methods",
        "invoice": "Invoice"
    },
    "de": {
        "setting": "Einstellung",
        "profile": "Profil",
        "teams": "Teams",
        "security": "Sicherheit",
        "api": "API",
        "billing": "Abrechnung",
        "subscription": "Abonnement",
        "payment methods": "Zahlungsmethoden",
        "invoice": "Rechnung"
    },
    "ru": {
        "setting": "Настройки",
        "profile": "Профайл",
        "teams": "Команды",
        "security": "Безопасность",
        "api": "API",
        "billing": "Выручка",
        "subscription": "Подписка",
        "payment methods": "Способ Оплаты",
        "invoice": "Квитанция"
    },
    "ua": {
        "setting": "Налаштування",
        "profile": "Профайл",
        "teams": "Команди",
        "security": "Безпека",
        "api": "API",
        "billing": "Виставлення рахунків",
        "subscription": "Підписка",
        "payment methods": "Спосіб оплати",
        "invoice": "Квитанція"
    }
}
</i18n>