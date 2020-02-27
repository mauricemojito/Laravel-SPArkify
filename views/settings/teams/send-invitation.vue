<template>
    <div class="card card-default">
        <div class="card-header">{{ $t('Send Invitation') }}</div>

        <div class="card-body">
            <!-- Success Message -->
            <div class="alert alert-success" v-if="form.successful">
                {{ $t('The invitation has been sent!') }}
            </div>

            <form role="form" v-if="canInviteMoreTeamMembers">
                <!-- E-Mail Address -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('E-Mail Address') }}</label>

                    <div class="col-md-6">
                        <input type="email" class="form-control" name="email" v-model="form.email" :class="{'is-invalid': form.errors.has('email')}">
                        <span class="invalid-feedback" v-if="hasTeamMembersLimit" v-html="$t('You have invitations remaining', { remainingTeamMembers: remainingTeamMembers  })"></span>
                        <span class="invalid-feedback" v-show="form.errors.has('email')">
                            {{ form.errors.get('email') }}
                        </span>
                    </div>
                </div>

                <!-- Role -->
                <div class="form-group row" v-if="roles.length > 0">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('Role') }}</label>

                    <div class="col-md-6">
                        <select class="form-control" v-model="form.role" :class="{'is-invalid': form.errors.has('role')}" >
                            <option v-for="role in roles" :value="role.value">{{ role.text }}</option>
                        </select>
                        <span class="invalid-feedback" v-show="form.errors.has('role')">
                            {{ form.errors.get('role') }}
                        </span>
                    </div>
                </div>

                <!-- Send Invitation Button -->
                <div class="form-group row mb-0">
                    <div class="offset-md-4 col-md-6">
                        <button type="submit" class="btn btn-primary"
                                @click.prevent="send"
                                :disabled="form.busy">

                            <span v-if="form.busy">
                                <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Sending') }}
                            </span>

                            <span v-else>
                                {{ $t('Send Invitation') }}
                            </span>
                        </button>
                    </div>
                </div>
            </form>

            <div v-else>
                <span class="text-danger">
                    {{ $t('Your current plan doesn\'t allow you to invite more members, please upgrade your subscription.') }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    var base = require('settings/teams/send-invitation');

    export default {
        name: "send-invitation",
        props: ["user", "team", "billableType","defaultRole"],
        mixins: [base],
        data() {
            return {
                ownsTeam: true
            }
        },
    }
</script>

<i18n>
{
    "en": {
        "Send Invitation": "Send Invitation",
        "The invitation has been sent!": "The invitation has been sent!",
        "You have invitations remaining": "You have {remainingTeamMembers} invitations remaining",
        "E-Mail Address": "E-Mail Address",
        "Role": "Role",
        "Sending": "Sending",
        "Your current plan doesn't allow you to invite more members, please upgrade your subscription.": "Your current plan doesn't allow you to invite more members, please upgrade your subscription."
    },
    "de": {
        "Send Invitation": "Einladung senden",
        "The invitation has been sent!": "Die Einladung wurde gesendet!",
        "You have invitations remaining": "Sie haben noch {remainingTeamMembers} Einladungen",
        "E-Mail Address": "E-Mail-Adresse",
        "Role": "Rolle",
        "Sending": "Senden",
        "Your current plan doesn't allow you to invite more members, please upgrade your subscription.": "Ihr aktueller Plan erlaubt es Ihnen nicht, weitere Mitglieder einzuladen. Aktualisieren Sie Ihr Abonnement."
    },
    "ru": {
        "Send Invitation": "Отправить приглашение",
        "The invitation has been sent!": "Приглашение отправлено!",
        "You have invitations remaining": "У вас осталось {remainingTeamMembers} приглашений",
        "E-Mail Address": "E-Mail Адресс",
        "Role": "Роль",
        "Sending": "Отправка",
        "Your current plan doesn't allow you to invite more members, please upgrade your subscription.": "Ваш текущий план не позволяет приглашать больше участников, обновите подписку."
    },
    "ua": {
        "Send Invitation": "Відправити запрошення",
        "The invitation has been sent!": "Запрошення відправлено!",
        "You have invitations remaining": "У вас залишилося {remainingTeamMembers} запрошень",
        "E-Mail Address": "E-Mail Адрес",
        "Role": "Роль",
        "Sending": "Відправлення",
        "Your current plan doesn't allow you to invite more members, please upgrade your subscription.": "Ваш поточний план не дозволяє запрошувати більше учасників, поновіть підписку."
    }
}
</i18n>