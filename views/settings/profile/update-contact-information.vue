<template>
    <div class="card card-default">
        <div class="card-header">{{ $t('Contact Information') }}</div>

        <div class="card-body">
            <!-- Success Message -->
            <div class="alert alert-success" v-if="form.successful">
                {{ $t('Your contact information has been updated!') }}
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

                <!-- E-Mail Address -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('E-Mail Address') }}</label>

                    <div class="col-md-6">
                        <input type="email" class="form-control" name="email" v-model="form.email" :class="{'is-invalid': form.errors.has('email')}">

                        <span class="invalid-feedback" v-show="form.errors.has('email')">
                            {{ form.errors.get('email') }}
                        </span>
                    </div>
                </div>

                <!-- Update Button -->
                <div class="form-group row mb-0">
                    <div class="col-md-6 offset-md-4">
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
    const base = require('settings/profile/update-contact-information');

    export default {
        props: ["user"],
        mixins: [base],
        name: "update-contact-information"
    }
</script>

<i18n>
    {
    "en": {
        "Contact Information": "Contact Information",
        "Your contact information has been updated!": "Your contact information has been updated!",
        "Name": "Name",
        "E-Mail Address": "E-Mail Address",
        "Update": "Update"
    },
    "de": {
        "Contact Information": "Kontaktinformation",
        "Your contact information has been updated!": "Ihre Kontaktinformationen wurden aktualisiert!",
        "Name": "Name",
        "E-Mail Address": "E-Mail-Addresse",
        "Update": "Aktualisieren"
    },
    "ru": {
        "Contact Information": "Основное",
        "Your contact information has been updated!": "Ваша контактная информация была обновлена!",
        "Name": "Имя",
        "E-Mail Address": "E-Mail Адресс",
        "Update": "Обновить"
    },
    "ua": {
        "Contact Information": "Контактна інформація",
        "Your contact information has been updated!": "Ваша контактна інформація була оновленою!",
        "Name": "Імя",
        "E-Mail Address": "E-Mail Адрес",
        "Update": "Оновити"
    }
    }
</i18n>