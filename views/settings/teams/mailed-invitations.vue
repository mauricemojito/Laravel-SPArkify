<template>
    <div>
        <div class="card card-default" v-if="invitations.length > 0">
            <div class="card-header">{{ $t('Mailed Invitations') }}</div>

            <div class="table-responsive">
                <table class="table table-valign-middle mb-0">
                    <thead>
                    <th>{{ $t('E-Mail Address') }}</th>
                    <th class="th-fit">&nbsp;</th>
                    </thead>

                    <tbody>
                    <tr class="reveal" v-for="invitation in invitations">
                        <!-- E-Mail Address -->
                        <td>
                            <div class="btn-table-align">
                                {{ invitation.email }}
                            </div>
                        </td>

                        <!-- Delete Button -->
                        <td class="td-fit">
                            <div class="reveal-target text-right ">
                                <button class="btn-reset" @click="cancel(invitation)">
                                    <svg class="icon-20 icon-sidenav " xmlns="http://www.w3.org/2000/svg ">
                                        <path fill="#95A2AE " d="M4 2l2-2h4l2 2h4v2H0V2h4zM1 6h14l-1 14H2L1 6zm5 2v10h1V8H6zm3 0v10h1V8H9z " />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    var base = require('settings/teams/mailed-invitations');

    export default {
        name: "mailed-invitations",
        props: ["invitations"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Mailed Invitations": "Mailed Invitations",
        "E-Mail Address": "E-Mail Address"
    },
    "de": {
        "Mailed Invitations": "Versanded Einladungen",
        "E-Mail Address": "E-Mail-Adresse"
    },
    "ru": {
        "Mailed Invitations": "Отправленные приглашения",
        "E-Mail Address": "E-Mail-Адрес"
    },
    "ua": {
        "Mailed Invitations": "Відправлені запрошення",
        "E-Mail Address": "E-Mail-Adresse"
    }
}
</i18n>