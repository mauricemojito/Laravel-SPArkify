<template>
    <div>
        <!-- Create Team -->
        <a v-if="spark.createsAdditionalTeams" class="dropdown-item" :href="'/settings#/'+ spark.teamsPrefix">
            <i class="fa fa-fw text-left fa-btn fa-plus-circle"></i> {{ $t("Create Team") }}
        </a>

        <!-- Switch Current Team -->
        <a v-if="spark.showsTeamSwitcher" class="dropdown-item" v-for="team in teams" :href="'/settings/'+ spark.teamsPrefix + '/'+ team.id +'/switch'">
            <span v-if="user.current_team_id == team.id">
                <i class="fa fa-fw text-left fa-btn fa-check text-success"></i> {{ team.name }}
            </span>

            <span v-else>
                <img :src="team.photo_url" class="spark-profile-photo-xs"><i class="fa fa-btn"></i> {{ team.name }}
            </span>
        </a>

        <div class="dropdown-divider"></div>
    </div>
</template>

<script>
    export default {
        name: "teams",
        props: ["teams","user","currentTeam"]
    }
</script>

<i18n>
{
    "en": {
        "Create Team": "Create Team"
    },
    "de": {
        "Create Team": "Team erstellen"
    },
    "ru": {
        "Create Team": "Создать команду"
    },
    "ua": {
        "Create Team": "Створити команду"
    }
}
</i18n>