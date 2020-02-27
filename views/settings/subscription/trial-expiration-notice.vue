<template>
    <div class="alert alert-warning mb-4" v-if="subscriptionIsOnTrial" v-html="$t('You are currently within your free trial period. Your trial will expire on', { trail_ends_at: trialEndsAt})"></div>
</template>

<script>
    export default {
        name: "trial-expiration-notice",
        props: ["subscriptionIsOnTrial"]
    }
</script>

<i18n>
{
    "en": {
        "You are currently within your free trial period. Your trial will expire on": "You are currently within your free trial period. Your trial will expire on"
    },
    "de": {
        "You are currently within your free trial period. Your trial will expire on": "Sie befinden sich derzeit in Ihrer kostenlosen Testphase. Ihre Prüfung läuft am {trail_ends_at} ab"
    },
    "ru": {
        "You are currently within your free trial period. Your trial will expire on": "В настоящее время вы находитесь в течение бесплатного пробного периода. Срок действия пробной версии истекает {trail_ends_at}"
    },
    "ua": {
        "You are currently within your free trial period. Your trial will expire on": "В даний час ви перебуваєте протягом безкоштовного пробного періоду. Термін дії пробної версії закінчується {trail_ends_at}"
    }
}
</i18n>