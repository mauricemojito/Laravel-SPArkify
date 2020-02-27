<template>
    <div class="card card-default" v-if="user">
        <div class="card-header">
            {{ $t('Team Photo') }}
        </div>

        <div class="card-body">
            <div class="alert alert-danger" v-if="form.errors.has('photo')">
                {{ form.errors.get('photo') }}
            </div>

            <form role="form">
                <div class="form-group row justify-content-center">
                    <div class="col-md-6 d-flex align-items-center">
                        <div class="image-placeholder mr-4">
                            <span role="img" class="profile-photo-preview" :style="previewStyle"></span>
                        </div>
                        <div class="spark-uploader mr-4">
                            <input ref="photo" type="file" class="spark-uploader-control" name="photo" @change="update" :disabled="form.busy">
                            <div class="btn btn-outline-dark">{{ $t('Update Photo') }}</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    var base = require('settings/teams/update-team-photo');

    export default {
        name: "update-team-photo",
        props: ["user", "team"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Team Photo": "Team Photo",
        "Update Photo": "Update Photo"
    },
    "de": {
        "Team Photo": "Teamfoto",
        "Update Photo": "Foto aktualisieren"
    },
    "ru": {
        "Team Photo": "Командное Фото",
        "Update Photo": "Обновить Фото"
    },
    "ua": {
        "Team Photo": "Командне Фото",
        "Update Photo": "Оновити Фото"
    }
}
</i18n>