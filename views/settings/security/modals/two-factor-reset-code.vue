<template>
    <div class="modal" id="modal-show-two-factor-reset-code" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {{ $t('Two-Factor Authentication Reset Code') }}
                    </h5>
                </div>

                <div class="modal-body">
                    <div class="alert alert-warning">
                        {{ $t('If you lose your two-factor authentication device') }}
                    </div>

                    <pre><code>{{ twoFactorResetCode }}</code></pre>
                </div>

                <!-- Modal Actions -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal"> {{ $t('Close') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "two-factor-reset-code",
        props: ["twoFactorResetCode"]
    }
</script>

<i18n>
{
    "en": {
        "Two-Factor Authentication Reset Code": "Two-Factor Authentication Reset Code",
        "If you lose your two-factor authentication device": "If you lose your two-factor authentication device, you may use this emergency reset token to disable two-factor authentication on your account. This is the only time this token will be displayed, so be sure not to lose it!",
        "Close": "Close"
    },
    "de": {
        "Two-Factor Authentication Reset Code": "Code zum Zurücksetzen der Zwei-Faktor-Authentifizierung",
        "If you lose your two-factor authentication device": "Wenn Sie Ihr Zwei-Faktor-Authentifizierungsgerät verlieren, können Sie dieses Notfall-Reset-Token verwenden, um die Zwei-Faktor-Authentifizierung für Ihr Konto zu deaktivieren. Dies ist das einzige Mal, dass dieses Token angezeigt wird. Vergewissern Sie sich, dass es nicht verloren geht!",
        "Close": "Schließen"
    },
    "ru": {
        "Two-Factor Authentication Reset Code": "Код сброса для двухфакторной аутентификации",
        "If you lose your two-factor authentication device": " Если вы потеряете свое устройство двухфакторной аутентификации, вы можете использовать этот токен аварийного сброса, чтобы отключить двухфакторную аутентификацию в своей учетной записи. Это единственный раз, когда этот токен будет отображаться, поэтому не теряйте его!",
        "Close": "закрыть"
    },
    "ua": {
        "Two-Factor Authentication Reset Code": "Код скидання для двофакторної аутентифікації",
        "If you lose your two-factor authentication device": "Якщо ви втратите свій пристрій двофакторної аутентифікації, ви можете використовувати цей токен аварійного скидання, щоб відключити двухфакторную аутентифікацію в свого облікового запису. Це єдиний раз, коли цей токен буде відображатися, тому не втрачайте його! ",
        "Close": "закрити"
    }
}
</i18n>