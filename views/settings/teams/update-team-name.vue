<template>
    <div class="card card-default">
        <div class="card-header">
            {{ $t('Update Team Name') }}
        </div>

        <div class="card-body">
            <!-- Success Message -->
            <div class="alert alert-success" v-if="form.successful">
                {{ $t('Your team name has been updated!') }}
            </div>

            <form role="form">
                <!-- Name -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Name') }}</label>

                    <div class="col-md-6">
                        <input type="text" class="form-control" name="name" v-model="form.name" :class="{'is-invalid': form.errors.has('name')}">

                        <span class="invalid-feedback" v-show="form.errors.has('name')">
                            {{ form.errors.get('name') }}
                        </span>
                    </div>
                </div>

                <!-- Update Button -->
                <div class="form-group row mb-0">
                    <div class="offset-md-4 col-md-6">
                        <button type="submit" class="btn btn-primary"
                                @click.prevent="update"
                                :disabled="form.busy">

                            {{ $t('Update') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    var base = require('settings/teams/update-team-name');

    export default {
        name: "update-team-name",
        props: ["user", "team"],
        mixins: [base]

    }
</script>

<i18n>
{
    "en": {
        "Update Team Name": "Update Team Name",
        "Your team name has been updated!": "Your team name has been updated!",
        "Name": "Name",
        "Update": "Update"
    },
    "de": {
        "Update Team Name": "Teamnamen Aktualisieren",
        "Your team name has been updated!": "Ihr Teamname wurde aktualisiert!",
        "Name": "Name",
        "Update": "Aktualisieren"
    },
    "ru": {
        "Update Team Name": "Обновить Название Команды",
        "Your team name has been updated!": "Название вашей команды было обновлено!",
        "Name": "Название",
        "Update": "Обновить"
    },
    "ua": {
        "Update Team Name": "Оновити Назву Команди",
        "Your team name has been updated!": "Назва вашої команди було оновлено!",
        "Name": "Назва",
        "Update": "Оновити"
    }
}
</i18n>