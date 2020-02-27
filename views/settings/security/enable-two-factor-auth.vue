<template>
    <div class="card card-default">
        <div class="card-header">{{ $t('Two-Factor Authentication') }}</div>

        <div class="card-body">
            <!-- Information Message -->
            <div class="alert alert-info" v-html="$t('In order to use two-factor authentication', { authy: authy  })"></div>

            <form role="form">
                <!-- Country Code -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Country Code') }}</label>

                    <div class="col-md-6">
                        <input type="number" class="form-control" name="country_code" v-model="form.country_code" :class="{'is-invalid': form.errors.has('country_code')}">

                        <span class="invalid-feedback" v-show="form.errors.has('country_code')">
                            {{ form.errors.get('country_code') }}
                        </span>
                    </div>
                </div>

                <!-- Phone Number -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Phone Number') }}</label>

                    <div class="col-md-6">
                        <input type="tel" class="form-control" name="phone" v-model="form.phone" :class="{'is-invalid': form.errors.has('phone')}">

                        <span class="invalid-feedback" v-show="form.errors.has('phone')">
                            {{ form.errors.get('phone') }}
                        </span>
                    </div>
                </div>

                <!-- Enable Button -->
                <div class="form-group row mb-0">
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="btn btn-primary"
                                @click.prevent="enable"
                                :disabled="form.busy">

                            <span v-if="form.busy">
                                <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Enabling') }}
                            </span>

                            <span v-else>
                                {{ $t('Enable') }}
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    var base = require('settings/security/enable-two-factor-auth');

    export default {
        name: "enable-two-factor-auth",
        props: ['user'],
        mixins: [base],
        data() {
            return {
                authy: '<strong><a href="https://authy.com" target="_blank">Authy</a></strong>'
            }
        }
    }
</script>

<i18n>
    {
        "en": {
            "Two-Factor Authentication": "Two-Factor Authentication",
            "In order to use two-factor authentication": "In order to use two-factor authentication, you must install the {authy} application on your smartphone. Authy is available for iOS and Android.",
            "Country Code": "Country Code",
            "Phone Number": "Phone Number",
            "Enabling": "Enabling",
            "Enable": "Enable"
        },
        "de": {
            "Two-Factor Authentication": "Zwei-Faktor-Authentifizierung",
            "In order to use two-factor authentication": "Um die Zwei-Faktor-Authentifizierung verwenden zu können, müssen Sie die Anwendung {authy} auf Ihrem Smartphone installieren. Authy ist für iOS und Android verfügbar.",
            "Country Code": "Name",
            "Phone Number": "E-Mail Address",
            "Enabling": "Aktivierung",
            "Enable": "Aktiviert"
        },
        "ru": {
            "Two-Factor Authentication": "Двухфакторная аутентификация",
            "In order to use two-factor authentication": "Чтобы использовать двухфакторную аутентификацию, вы должны установить приложение {authy} на свой смартфон. Authy доступно для iOS и Android.",
            "Country Code": "Код страны",
            "Phone Number": "Номер телефону",
            "Enabling": "Активация",
            "Enable": "Включить"
        },
        "ua": {
            "Two-Factor Authentication": "Двофакторна аутентифікація",
            "In order to use two-factor authentication": "Щоб використовувати двофакторну аутентифікацію, ви повинні встановити додаток {authy} на свій смартфон. Authy доступно для iOS і Android.",
            "Country Code": "Код країни",
            "Phone Number": "Номер телефону",
            "Enabling": "Активація",
            "Enable": "Включений"
        }
    }
</i18n>