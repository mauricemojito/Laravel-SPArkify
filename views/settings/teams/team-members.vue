<template>
    <div>
        <div class="card card-default">
            <div class="card-header">
                {{ $t('Team Members') }} ({{ team.users.length }})
            </div>

            <div class="table-responsive">
                <table class="table table-valign-middle mb-0">
                    <thead>
                    <th class="th-fit"></th>
                    <th>{{ $t('Name') }}</th>
                    <th v-if="roles.length > 1">{{ $t('Role') }}</th>
                    <th>&nbsp;</th>
                    </thead>

                    <tbody>
                    <tr v-for="member in team.users">
                        <!-- Photo -->
                        <td>
                            <img :src="member.photo_url" class="spark-profile-photo">
                        </td>

                        <!-- Name -->
                        <td>
                                <span v-if="member.id === user.id">
                                    {{ $t('You') }}
                                </span>

                            <span v-else>
                                    {{ member.name }}
                                </span>
                        </td>

                        <!-- Role -->
                        <td v-if="roles.length > 0">
                            {{ teamMemberRole(member) }}
                        </td>

                        <td class="td-fit">
                            <button class="btn btn-outline-primary" @click="editTeamMember(member)" v-if="roles.length > 1 && canEditTeamMember(member)">
                                <i class="fa fa-cog"></i>
                            </button>

                            <button class="btn btn-outline-danger" @click="approveTeamMemberDelete(member)" v-if="canDeleteTeamMember(member)">
                                <i class="fa fa-remove"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Update Team Member Modal -->
        <div class="modal" id="modal-update-team-member" tabindex="-1" role="dialog">
            <div class="modal-dialog" v-if="updatingTeamMember">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('Edit Team Member') }} ({{ updatingTeamMember.name }})
                        </h5>
                    </div>

                    <div class="modal-body">
                        <!-- Update Team Member Form -->
                        <form role="form">
                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">
                                    {{ $t('Role') }}
                                </label>

                                <div class="col-md-6">
                                    <select class="form-control" v-model="updateTeamMemberForm.role" :class="{'is-invalid': updateTeamMemberForm.errors.has('role')}">
                                        <option v-for="role in roles" :value="role.value">
                                            {{ role.text }}
                                        </option>
                                    </select>

                                    <span class="invalid-feedback" v-if="updateTeamMemberForm.errors.has('role')">
                                        {{ updateTeamMemberForm.errors.get('role') }}
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

                        <button type="button" class="btn btn-primary" @click="update" :disabled="updateTeamMemberForm.busy">
                            {{ $t('Update') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Team Member Modal -->
        <div class="modal" id="modal-delete-member" tabindex="-1" role="dialog">
            <div class="modal-dialog" v-if="deletingTeamMember">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('Remove Team Member') }} ({{ deletingTeamMember.name }})
                        </h5>
                    </div>

                    <div class="modal-body">
                        {{ $t('Are you sure to delete your member') }}
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('No, Go Back') }}</button>

                        <button type="button" class="btn btn-danger" @click="deleteMember" :disabled="deleteTeamMemberForm.busy">
                            {{ $t('Yes, Remove') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var base = require('settings/teams/team-members');

    export default {
        name: "team-members",
        props: ["user", "team"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Team Members": "Team Members",
        "Name": "Name",
        "Role": "Role",
        "You": "You",
        "Edit Team Member": "Edit Team Member",
        "Update": "Update",
        "Remove Team Member": "Remove Team Member",
        "Are you sure to delete your member": "Are you sure to delete your member?",
        "No, Go Back": "No, Go Back",
        "Yes, Remove": "Yes, Remove"
    },
    "de": {
        "Team Members": "Team Members",
        "Name": "Name",
        "Role": "Role",
        "You": "You",
        "Edit Team Member": "Edit Team Member",
        "Update": "Update",
        "Remove Team Member": "Remove Team Member",
        "Are you sure to delete your member": "Are you sure to delete your member?",
        "No, Go Back": "No, Go Back",
        "Yes, Remove": "Yes, Remove"
    },
    "ru": {
        "Team Members": "Состав Команды",
        "Name": "Название",
        "Role": "Роль",
        "You": "Ты",
        "Edit Team Member": "Изменить участника команды",
        "Update": "Обновить",
        "Remove Team Member": "Удалить участника команды",
        "Are you sure to delete your member": "Вы уверены, что хотите удалить своего участника?",
        "No, Go Back": "Нет, вернуться",
        "Yes, Remove": "Да, удалить"
    },
    "ua": {
        "Team Members": "Склад Команди",
        "Name": "Назва",
        "Role": "Роль",
        "You": "Ти",
        "Edit Team Member": "Змінити учасника команди",
        "Update": "Оновити",
        "Remove Team Member": "Видалити учасника команди",
        "Are you sure to delete your member": "Ви впевнені, що хочете видалити свого учасника?",
        "No, Go Back": "Ні, повернутися",
        "Yes, Remove": "Так, видалити"
    }
}
</i18n>