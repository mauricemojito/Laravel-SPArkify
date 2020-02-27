<template>
    <div>
        <div class="card card-default" v-if="invitations.length > 0">
            <div class="card-header">{{ $t('Pending Invitations') }}</div>

            <div class="table-responsive">
                <table class="table table-valign-middle mb-0">
                    <thead>
                    <th>{{ $t('Team') }}</th>
                    <th>&nbsp;</th>
                    </thead>

                    <tbody>
                    <tr v-for="invitation in invitations">
                        <!-- Team Name -->
                        <td>
                            <div class="btn-table-align">
                                @{{ invitation.team.name }}
                            </div>
                        </td>

                        <!-- Accept Button -->
                        <td class="td-fit">
                            <button class="btn btn-outline-success" @click="accept(invitation)">
                                <i class="fa fa-check"></i>
                            </button>

                            <button class="btn btn-outline-danger" @click="reject(invitation)">
                                <i class="fa fa-times"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    var base = require('settings/teams/pending-invitations');

    export default {
        name: "pending-invitations",
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Pending Invitations": "Pending Invitations",
        "Team": "Team"
    },
    "de": {
        "Pending Invitations": "Ausstehende Einladungen",
        "Team": "Team"
    },
    "ru": {
        "Pending Invitations": "Приглашение в ожидании",
        "Team": "Команда"
    },
    "ua": {
        "Pending Invitations": "Запрошення в очікуванні",
        "Team": "Команда"
    }
}
</i18n>