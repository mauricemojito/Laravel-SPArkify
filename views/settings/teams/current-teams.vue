<template>
    <div>
        <div class="card card-default">
            <div class="card-header">{{ $t('Current teams') }}</div>

            <div class="table-responsive">
                <table class="table table-valign-middle mb-0">
                    <thead>
                    <th class="th-fit"></th>
                    <th>{{ $t('Name') }}</th>
                    <th>{{ $t('Owner') }}</th>
                    <th>&nbsp;</th>
                    </thead>

                    <tbody>
                    <tr  v-for="team in teams">
                        <!-- Photo -->
                        <td>
                            <img :src="team.photo_url" class="spark-profile-photo">
                        </td>

                        <!-- Team Name -->
                        <td>
                            <div class="btn-table-align">
                                {{ team.name }}
                            </div>
                        </td>

                        <!-- Owner Name -->
                        <td>
                            <div class="btn-table-align">
                                    <span v-if="user.id == team.owner.id">
                                        {{ $t('You') }}
                                    </span>

                                <span v-else>
                                        {{ team.owner.name }}
                                    </span>
                            </div>
                        </td>

                        <!-- Edit Button -->
                        <td class="td-fit">
                            <router-link :to="spark.routePrefix+'/settings/channels/'+team.id">
                                <button class="btn btn-outline-primary">
                                    <i class="fa fa-cog"></i>
                                </button>
                            </router-link>

                            <button class="btn btn-outline-warning" @click="approveLeavingTeam(team)"
                                    data-toggle="tooltip" title="Leave team"
                                    v-if="user.id !== team.owner_id">
                                <i class="fa fa-sign-out"></i>
                            </button>

                            <button class="btn btn-outline-danger" @click="approveTeamDelete(team)" v-if="user.id === team.owner_id">
                                <i class="fa fa-times"></i>
                            </button>

                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Leave Team Modal -->
        <div class="modal" id="modal-leave-team" tabindex="-1" role="dialog">
            <div class="modal-dialog" v-if="leavingTeam">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('Leave team') }} (@{{ leavingTeam.name }})
                        </h5>
                    </div>

                    <div class="modal-body">
                        {{ $t('Are you sure you want to leave team') }}
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('No, Go Back') }}</button>

                        <button type="button" class="btn btn-warning" @click="leaveTeam" :disabled="leaveTeamForm.busy">
                            {{ $t('Yes, Leave') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Team Modal -->
        <div class="modal" id="modal-delete-team" tabindex="-1" role="dialog">
            <div class="modal-dialog" v-if="deletingTeam">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('Delete team') }}
                        </h5>
                    </div>

                    <div class="modal-body">
                        {{ $t('Are you sure you want to delete team') }}
                        {{ $t('if you delete team all data will be deleted') }}
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('No, Go Back') }}</button>

                        <button type="button" class="btn btn-danger" @click="deleteTeam" :disabled="deleteTeamForm.busy">
                            <span v-if="deleteTeamForm.busy">
                                <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Deleting') }}
                            </span>

                            <span v-else>
                                {{ $t('Yes, Delete') }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var base = require('settings/teams/current-teams');

    export default {
        name: "current-teams",
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Current teams": "Current teams",
        "Name": "Name",
        "Owner": "Owner",
        "You": "You",
        "Leave team": "Leave team",
        "Are you sure you want to leave team": "Are you sure you want to leave the team?",
        "No, Go Back": "No, Go Back",
        "Yes, Leave": "Yes, Leave",
        "Delete team": "Delete team",
        "Are you sure you want to delete team": "Are you sure you want to delete the team",
        "if you delete team all data will be deleted": "if you delete the team, all data will be deleted",
        "Deleting": "Deleting",
        "Yes, Delete": "Yes, Delete"
    },
    "de": {
        "Current teams": "Aktuelle Teams",
        "Name": "Name",
        "Owner": "Besitzer",
        "You": "Du",
        "Leave team": "Team verlassen",
        "Are you sure you want to leave team": "Sind Sie sicher, dass Sie das Team verlassen wollen",
        "No, Go Back": "Nein, geh zurück",
        "Yes, Leave": "Ja, verlassen",
        "Delete team": "Team löschen",
        "Are you sure you want to delete team": "Möchten Sie dieses Team wirklich löschen?",
        "if you delete team all data will be deleted": "Wenn Sie ein Team löschen, werden alle Daten gelöscht.",
        "Deleting": "Löschung",
        "Yes, Delete": "Ja, löschen"
    },
    "ru": {
        "Current teams": "Текущие команды",
        "Name": "Название",
        "Owner": "Владелец",
        "You": "Ты",
        "Leave team": "Покинуть команду",
        "Are you sure you want to leave team": "Вы уверены, что хотите покинуть команду?",
        "No, Go Back": "Нет, вернуться",
        "Yes, Leave": "Да, покинуть",
        "Delete team": "Удалить команду",
        "Are you sure you want to delete team": "Вы уверены, что хотите удалить команду?",
        "if you delete team all data will be deleted": "Если вы удалите команду, все данные будут удалены",
        "Deleting": "Удаление",
        "Yes, Delete": "Да, удалить"
    },
    "ua": {
        "Current teams": "Поточні команди",
        "Name": "Назва",
        "Owner": "Власник",
        "You": "Ти",
        "Leave team": "Покинути команду",
        "Are you sure you want to leave team": "Ви впевнені, що хочете залишити команду?",
        "No, Go Back": "Ні, повернутися",
        "Yes, Leave": "Так, покинути",
        "Delete team": "Видалити команду",
        "Are you sure you want to delete team": "Ви впевнені, що хочете видалити команду?",
        "if you delete team all data will be deleted": "Якщо ви видалите команду, всі дані будуть видалені",
        "Deleting": "Видалення",
        "Yes, Delete": "Так, видалити"
    }
}
</i18n>