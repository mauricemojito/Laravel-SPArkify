<template>
    <div class="card card-default">
        <div class="card-header">{{ $t('Update Password') }}</div>

        <div class="card-body">
            <!-- Success Message -->
            <div class="alert alert-success" v-if="form.successful">
                {{ $t('Your password has been updated!') }}
            </div>

            <form role="form">
                <!-- Current Password -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Current Password') }}</label>

                    <div class="col-md-6">
                        <input type="password" class="form-control" name="current_password" v-model="form.current_password" :class="{'is-invalid': form.errors.has('current_password')}">

                        <span class="invalid-feedback" v-show="form.errors.has('current_password')">
                            {{ form.errors.get('current_password') }}
                        </span>
                    </div>
                </div>

                <!-- New Password -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Password') }}</label>

                    <div class="col-md-6">
                        <input type="password" class="form-control" name="password" v-model="form.password" :class="{'is-invalid': form.errors.has('password')}">

                        <span class="invalid-feedback" v-show="form.errors.has('password')">
                            {{ form.errors.get('password') }}
                        </span>
                    </div>
                </div>

                <!-- New Password Confirmation -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Confirm Password') }}</label>

                    <div class="col-md-6">
                        <input type="password" class="form-control" name="password_confirmation" v-model="form.password_confirmation" :class="{'is-invalid': form.errors.has('password_confirmation')}">

                        <span class="invalid-feedback" v-show="form.errors.has('password_confirmation')">
                            {{ form.errors.get('password_confirmation') }}
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
    var base = require('settings/security/update-password');

    export default {
        name: "update-password",
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Update Password": "Update Password",
        "Your password has been updated!": "Your password has been updated!",
        "Current Password": "Current Password",
        "Confirm Password": "Confirm Password",
        "Password": "Password",
        "Update": "Update"
    },
    "de": {
        "Update Password": "Passwort erneuern",
        "Your password has been updated!": "Dein Passwort wurde aktualisiert!",
        "Current Password": "Aktuelles Passwort",
        "Confirm Password": "Passwort bestätigen",
        "Password": "Password",
        "Update": "Aktualisieren"
    },
    "ru": {
        "Update Password": "Обновить пароль",
        "Your password has been updated!": "Ваш пароль был обновлен!",
        "Current Password": "Текущий пароль",
        "Confirm Password": "Подтвердите Пароль",
        "Password": "Пароль",
        "Update": "Обновить"
    },
    "ua": {
        "Update Password": "Оновити пароль",
        "Your password has been updated!": "Ваш пароль був оновлений!",
        "Current Password": "Поточний пароль",
        "Confirm Password": "Підтвердіть пароль",
        "Password": "Пароль",
        "Update": "Оновити"
    }
}
</i18n>