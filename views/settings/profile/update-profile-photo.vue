<template>
    <div class="card card-default" v-if="user">
        <div class="card-header">{{ $t('Profile Photo') }}</div>

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
    var base = require('settings/profile/update-profile-photo');
    export default {
        props: ["user"],
        mixins: [base],
        name: "update-profile-photo"
    }
</script>

<i18n>
    {
    "en": {
        "Profile Photo": "Profile Photo",
        "Update Photo": "Update Photo"
    },
    "de": {
        "Profile Photo": "Profilfoto",
        "Update Photo": "Foto aktualisieren"
    },
    "ru": {
        "Profile Photo": "Аватар",
        "Update Photo": "Обновить фото"
    },
    "ua": {
        "Profile Photo": "Аватар",
        "Update Photo": "Оновити фотографію"
    }
    }
</i18n>