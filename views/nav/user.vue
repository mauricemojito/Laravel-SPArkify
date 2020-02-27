<template>
    <nav class="navbar navbar-light navbar-expand-md navbar-spark">
        <div class="container" v-if="user">
            <!-- Branding Image -->
            <brand></brand>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item m-3">

                    </li>
                </ul>

                <a @click="showNotifications" class="notification-pill mx-auto mb-3 mb-md-0 mr-md-0 ml-md-auto">
                    <svg class="mr-2" width="18px" height="20px" viewBox="0 0 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-1">
                                <stop stop-color="#86A0A6" offset="0%"></stop>
                                <stop stop-color="#596A79" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="header" transform="translate(-926.000000, -29.000000)" fill-rule="nonzero" fill="url(#linearGradient-1)">
                                <g id="Group-3">
                                    <path d="M929,37 C929,34.3773361 930.682712,32.1476907 933.027397,31.3318031 C933.009377,31.2238826 933,31.1130364 933,31 C933,29.8954305 933.895431,29 935,29 C936.104569,29 937,29.8954305 937,31 C937,31.1130364 936.990623,31.2238826 936.972603,31.3318031 C939.317288,32.1476907 941,34.3773361 941,37 L941,43 L944,45 L944,46 L926,46 L926,45 L929,43 L929,37 Z M937,47 C937,48.1045695 936.104569,49 935,49 C933.895431,49 933,48.1045695 933,47 L937,47 L937,47 Z"
                                          id="Combined-Shape"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    {{notificationsCount}}
                </a>
                <ul class="navbar-nav ml-4">
                    <li class="nav-item dropdown">
                        <a href="#" class="d-block d-md-flex text-center nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <img :src="user.photo_url" class="dropdown-toggle-image spark-nav-profile-photo">
                            <span class="d-none d-md-block">{{ user.name }}</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <!-- Impersonation -->
                            <div v-if="spark.impersonated">
                                <h6 class="dropdown-header">{{ $t("Impersonation") }}</h6>

                                <!-- Stop Impersonating -->
                                <a class="dropdown-item" href="/spark/kiosk/users/stop-impersonating">
                                    <i class="fa fa-fw text-left fa-btn fa-user-secret"></i>{{ $t("Back To My Account") }}
                                </a>

                                <div class="dropdown-divider"></div>
                            </div>

                            <!-- Developer -->

                            <developer v-if="spark.developer"></developer>

                            <!-- Subscription Reminders -->
                            <subscription></subscription>

                            <!-- Settings -->
                            <h6 class="dropdown-header">{{ $t("Settings") }}</h6>

                            <!-- Your Settings -->
                            <router-link :to="spark.routePrefix + '/settings'" class="dropdown-item">
                                    <i class="fa fa-fw text-left fa-btn fa-cog"></i> {{ $t("Your Settings") }}
                            </router-link>

                            <div class="dropdown-divider"></div>

                            <!-- Team Settings -->
                            <teams v-if="spark.usesTeams && spark.createsAdditionalTeams || spark.showsTeamSwitcher" :teams="teams" :user="user" current-team="current-team"></teams>

                            <!-- Support -->
                            <support v-if="spark.support"></support>

                            <!-- Logout -->
                            <a class="dropdown-item" href="/logout">
                                <i class="fa fa-fw text-left fa-btn fa-sign-out"></i> {{ $t("Logout") }}
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<script>
    const base = require('navbar/navbar');

    import Brand from './brand'
    import Developer from './developer'
    import Support from './support'
    import Subscription from './subscriptions'
    import Teams from './teams'

    export default {
        name: "user",
        props: ["user", "teams", "currentTeam", "unreadAnnouncementsCount", "unreadNotificationsCount"],
        mixins: [base],
        components: {Brand, Developer, Support, Subscription, Teams}
    }
</script>

<i18n>
{
    "en": {
        "Impersonation": "Impersonation",
        "Back To My Account": "Back To My Account",
        "Settings": "Settings",
        "Your Settings": "Your Settings",
        "Logout": "Logout"
    },
    "de": {
        "Impersonation": "Identitätswechsel",
        "Back To My Account": "Zurück zu meinem Konto",
        "Settings": "Einstellungen",
        "Your Settings": "Ihre Einstellungen",
        "Logout": "Logout"
    },
    "ru": {
        "Impersonation": "Олицетворение",
        "Back To My Account": "Вернуться к моей учетной записи",
        "Settings": "Настройки",
        "Your Settings": "Ваши настройки",
        "Logout": "Выход"
    },
    "ua": {
        "Impersonation": "Уособлення",
        "Back To My Account": "Повернутися до мого профілю",
        "Settings": "Налаштування",
        "Your Settings": "Ваші настройки",
        "Logout": "Вихід"
    }
}
</i18n>