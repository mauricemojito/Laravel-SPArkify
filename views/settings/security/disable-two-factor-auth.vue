<template>
    <div class="card card-default">
        <div class="card-body">
            <button class="btn btn-outline-danger" @click="disable" :disabled="form.busy">
                <span v-if="form.busy">
                    <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Disabling') }}
                </span>

                <span v-else>
                    {{ $t('Disable Two-Factor Authentication') }}
                </span>
            </button>
        </div>
    </div>
</template>

<script>
    var base = require('settings/security/disable-two-factor-auth');

    export default {
        name: "disable-two-factor-auth",
        props: ["user"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Disabling": "Disabling",
        "Disable Two-Factor Authentication": "Disable Two-Factor Authentication"
    },
    "de": {
        "Disabling": "Deaktivierung",
        "Disable Two-Factor Authentication": "Zwei-Faktor-Authentifizierung Deaktivieren"
    },
    "ru": {
        "Disabling": "Отключение",
        "Disable Two-Factor Authentication": "Отключить двухфакторную аутентификацию"
    },
    "ua": {
        "Disabling": "Відключення",
        "Disable Two-Factor Authentication": "Відключити двофакторну аутентифікацію"
    }
}
</i18n>