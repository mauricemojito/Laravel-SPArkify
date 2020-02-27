<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="intro mt-5">
                    <div class="intro-img">
                        <img src="/img/create-team.svg" class="h-90">
                    </div>
                    <h4>
                        {{ $t("Where's Your Team?") }}
                    </h4>
                    <p class="intro-copy">
                        {{ $t("It looks like you're not part of any team!") }}
                    </p>
                    <div class="intro-btn">
                        <router-link :to="spark.routePrefix+'/settings#/' + spark.teamsPrefix" class="btn btn-outline-dark">
                            {{ $t("Create Team") }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "missing-team"
    }
</script>

<i18n>
{
    "en": {
        "Where's Your Team?": "Where's Your Team?",
        "It looks like you're not part of any team!": "It looks like you're not part of any team!",
        "Create Team": "Create Team"
    },
    "de": {
        "Where's Your Team?": "Wo ist dein Team?",
        "It looks like you're not part of any team!": "Es sieht so aus, als gehörst du zu keinem Team!",
        "Create Team": "Team erstellen"
    },
    "ru": {
        "Where's Your Team?": "Где твоя команда?",
        "It looks like you're not part of any team!": "Похоже, вы не являетесь частью какой-либо команды!",
        "Create Team": "Создать команду"
    },
    "ua": {
        "Where's Your Team?": "Де ваша команда?",
        "It looks like you're not part of any team!": "Схоже, ви не є частиною жодної команди!",
        "Create Team": "Створити команду"
    }
}
</i18n>