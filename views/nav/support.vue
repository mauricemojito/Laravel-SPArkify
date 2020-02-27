<template>
    <div>
        <h6 class="dropdown-header">{{ $t("Support") }}</h6>

        <!-- Support -->
        <a class="dropdown-item" @click.prevent="showSupportForm" style="cursor: pointer;">
            <i class="fa fa-fw text-left fa-btn fa-paper-plane"></i> {{ $t("Email Us") }}
        </a>

        <div class="dropdown-divider"></div>
    </div>
</template>

<script>
    export default {
        name: "support"
    }
</script>

<i18n>
{
    "en": {
        "Support": "Support",
        "Email Us": "Email Us"
    },
    "de": {
        "Support": "Support",
        "Email Us": "E-Mail Uns"
    },
    "ru": {
        "Support": "Поддержка",
        "Email Us": "Напишите нам"
    },
    "ua": {
        "Support": "Підтримка",
        "Email Us": "Напишіть нам"
    }
}
</i18n>