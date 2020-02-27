<template>
    <div class="card card-default">
        <div class="card-header">{{ $t('Create Team') }}</div>

        <div class="card-body">
            <form role="form" v-if="canCreateMoreTeams">
                <!-- Name -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Team Name') }}</label>

                    <div class="col-md-6">
                        <input type="text" id="create-team-name" class="form-control" name="name" v-model="form.name" :class="{'is-invalid': form.errors.has('name')}">

                        <span class="invalid-feedback" v-if="hasTeamLimit">
                            {{ $t('You currently have x Count teams remaining',{teamCount : remainingTeams}) }}
                        </span>

                        <span class="invalid-feedback" v-show="form.errors.has('name')">
                            {{ form.errors.get('name') }}
                        </span>
                    </div>
                </div>

                <!-- Slug (Only Shown When Using Paths For Teams) -->
                <div class="form-group row" v-if="spark.teamsIdentifiedByPath">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Team Slug') }}</label>

                    <div class="col-md-6">
                        <input type="text" id="create-team-slug" class="form-control" name="slug" v-model="form.slug" :class="{'is-invalid': form.errors.has('slug')}">

                        <small class="form-text text-muted" v-show=" ! form.errors.has('slug')">
                            {{ $t('Slug Input Explanation') }}
                        </small>

                        <span class="invalid-feedback" v-show="form.errors.has('slug')">
                            {{ form.errors.get('slug') }}
                        </span>
                    </div>
                </div>


                <!-- Create Button -->
                <div class="form-group row mb-0">
                    <div class="offset-md-4 col-md-6">
                        <button type="submit" class="btn btn-primary"
                                @click.prevent="create"
                                :disabled="form.busy">

                            {{ $t('Create') }}
                        </button>
                    </div>
                </div>
            </form>

            <div v-else>
                <span class="text-danger">
                    {{ $t('Teams plan allows no more teams,') }}
                    <a href="/settings#/subscription">{{ $t('Please upgrade your subscription') }}</a>.
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    const base = require('settings/teams/create-team');

    export default {
        name: "create-team",
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Create Team": "Create Team",
        "Team Name": "Team Name",
        "You currently have x Count teams remaining": "You currently have {teamCount} Count teams remaining.",
        "Team Slug": "Team Slug",
        "Slug Input Explanation": "Slug Input Explanation",
        "Create": "Create",
        "Teams plan allows no more teams": "Teams plan allows no more teams,",
        "Please upgrade your subscription": "Please upgrade your subscription"
    },
    "de": {
        "Create Team": "Team Erstellen",
        "Team Name": "Teamname",
        "You currently have x Count teams remaining": "Sie haben noch {teamCount} Teams zur Verfügung.",
        "Team Slug": "Team Slug",
        "Slug Input Explanation": "Slug-Eingangserklärung",
        "Create": "Erstellen",
        "Teams plan allows no more teams": "Teamplan erlaubt keine weiteren Teams,",
        "Please upgrade your subscription": "Bitte aktualisieren Sie Ihr Abonnement"
    },
    "ru": {
        "Create Team": "Создать команду",
        "Team Name": "Название команды",
        "You currently have x Count teams remaining": "У вас осталось {teamCount} Количество команд..",
        "Team Slug": "Командный URL",
        "Slug Input Explanation": "Slug Input Explanation",
        "Create": "Создать",
        "Teams plan allows no more teams": "Ваш план не позволяет больше команд,",
        "Please upgrade your subscription": "Пожалуйста, обновите вашу подписку"
    },
    "ua": {
        "Create Team": "Створити команду",
        "Team Name": "Назва команди",
        "You currently have x Count teams remaining": "У вас залишилося {teamCount} Кількість команд ..",
        "Team Slug": "Командний URL",
        "Slug Input Explanation": "Slug Input Explanation",
        "Create": "Створити",
        "Teams plan allows no more teams": "Ваш план не дозволяє більше команд,",
        "Please upgrade your subscription": "Будь ласка, поновіть вашу підписку"
    }
}
</i18n>