<template>
    <div>
        <div v-if="spark.onTrail">
            <!-- Trial Reminder -->
            <h6 class="dropdown-header">{{ $t("Trial") }}</h6>

            <a class="dropdown-item" href="/settings#/subscription">
                <i class="fa fa-fw text-left fa-btn fa-shopping-bag"></i>{{ $t("Subscribe") }}
            </a>

            <div class="dropdown-divider"></div>
        </div>

        <div v-if="spark.usesTeams && spark.ownsCurrentTeam && spark.currentTeamOnTrial">
            <!-- Team Trial Reminder -->
            <h6 class="dropdown-header">{{ $t("Team Trail") }}</h6>

            <router-link class="dropdown-item" :to="spark.routePrefix +'/settings/'+spark.teamsPrefix+ '/'+spark.currentTeamId+'#/subscription'">
                <i class="fa fa-fw text-left fa-btn fa-shopping-bag"></i> {{ $t("Subscribe") }}
            </router-link>

            <div class="dropdown-divider"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "subscriptions"
    }
</script>

<i18n>
{
    "en": {
        "Trial": "Trial",
        "Subscribe": "Subscribe",
        "Team Trail": "Team Trail"
    },
    "de": {
        "Trial": "Trail",
        "Subscribe": "Abonnieren",
        "Team Trail": "Team Trail"
    },
    "ru": {
        "Trial": "Пробный период",
        "Subscribe": "Подписаться",
        "Team Trail": "Пробный период команды"
    },
    "ua": {
        "Trial": "Пробний період",
        "Subscribe": "Підписатися",
        "Team Trail": "Пробний період команди"
    }
}
</i18n>