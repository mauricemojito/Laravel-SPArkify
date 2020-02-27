<template>
    <div>
        <h6 class="dropdown-header">{{ $t("Developer") }}</h6>

        <!-- Kiosk -->
        <router-link class="dropdown-item" to="/spark/kiosk">
            <i class="fa fa-fw text-left fa-btn fa-fort-awesome"></i> {{ $t("Kiosk") }}
        </router-link>

        <div class="dropdown-divider"></div>
    </div>
</template>

<script>
    export default {
        name: "developer"
    }
</script>

<i18n>
{
    "en": {
        "Developer": "Developer",
        "Kiosk": "Kiosk"
    },
    "de": {
        "Developer": "Developer",
        "Kiosk": "Kiosk"
    },
    "ru": {
        "Developer": "Разработчик",
        "Kiosk": "Киоск"
    },
    "ua": {
        "Developer": "Розробник",
        "Kiosk": "Кіоск"
    }
}
</i18n>