<template>
    <div>
        <div>
            <div class="card card-default" v-if="tokens.length > 0">
                <div class="card-header">{{ $t('API Tokens') }}</div>

                <div class="table-responsive">
                    <table class="table table-valign-middle mb-0">
                        <thead>
                        <th>{{ $t('Name') }}</th>
                        <th>{{ $t('Created') }}</th>
                        <th>{{ $t('Last Used') }}</th>
                        <th>&nbsp;</th>
                        </thead>

                        <tbody>
                        <tr v-for="token in tokens">
                            <!-- Name -->
                            <td>
                                <div class="btn-table-align">
                                    {{ token.name }}
                                </div>
                            </td>

                            <!-- Created At -->
                            <td>
                                <div class="btn-table-align">
                                    {{ token.created_at | datetime }}
                                </div>
                            </td>

                            <!-- Last Used At -->
                            <td>
                                <div class="btn-table-align">
                                        <span v-if="token.last_used_at">
                                            {{ token.last_used_at | datetime }}
                                        </span>

                                    <span v-else>
                                            {{ $t('Never') }}
                                        </span>
                                </div>
                            </td>

                            <!-- Edit Button -->
                            <td class="td-fit">
                                <div class="text-right ">
                                    <button class="btn btn-outline-primary" @click="editToken(token)">
                                        <i class="fa fa-cog"></i>
                                    </button>

                                    <button class="btn btn-outline-danger" @click="approveTokenDelete(token)">
                                        <i class="fa fa-remove"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Update Token Modal -->
        <div class="modal" id="modal-update-token" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" v-if="updatingToken">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('Edit Token') }} ({{ updatingToken.name }})
                        </h5>
                    </div>

                    <div class="modal-body">
                        <!-- Update Token Form -->
                        <form role="form">
                            <!-- Token Name -->
                            <div class="form-group row">
                                <label class="col-md-4 col-form-label text-md-right">{{ $t('Token Name') }}</label>

                                <div class="col-md-6">
                                    <input type="text" class="form-control" name="name" v-model="updateTokenForm.name" :class="{'is-invalid': updateTokenForm.errors.has('name')}">

                                    <span class="invalid-feedback" v-show="updateTokenForm.errors.has('name')">
                                        {{ updateTokenForm.errors.get('name') }}
                                    </span>
                                </div>
                            </div>

                            <!-- Token Abilities -->
                            <div class="form-group row" v-if="availableAbilities.length > 0">
                                <label class="col-md-4 col-form-label text-md-right">{{ $t('Token Can') }}</label>

                                <div class="col-md-6">
                                    <div v-for="ability in availableAbilities">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox"
                                                       @click="toggleAbility(ability.value)"
                                                       :checked="abilityIsAssigned(ability.value)">

                                                {{ ability.name }}
                                            </label>
                                        </div>
                                    </div>

                                    <span class="invalid-feedback" v-show="updateTokenForm.errors.has('abilities')">
                                        {{ updateTokenForm.errors.get('abilities') }}
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('Close') }}</button>

                        <button type="button" class="btn btn-primary" @click="updateToken" :disabled="updateTokenForm.busy">
                            {{ $t('Update') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Token Modal -->
        <div class="modal" id="modal-delete-token" tabindex="-1" role="dialog">
            <div class="modal-dialog" v-if="deletingToken">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('Delete Token') }} ({{ deletingToken.name }})
                        </h5>
                    </div>

                    <div class="modal-body">
                        {{ $t('Are you sure you want to delete this token') }}
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('No, Go Back') }}</button>

                        <button type="button" class="btn btn-danger" @click="deleteToken" :disabled="deleteTokenForm.busy">
                            {{ $t('Yes, Delete') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const base = require('settings/api/tokens');

    export default {
        name: "tokens",
        props: ["tokens", "availableAbilities"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "API Tokens": "API Tokens",
        "Name": "Name",
        "Created": "Created",
        "Last Used": "Last Used",
        "Never": "Never",
        "Token Name": "Token Name",
        "Edit Token": "Edit Token",
        "Close": "Close",
        "Update": "Update",
        "Token Can": "Token Can",
        "Delete Token": "Delete Token",
        "Are you sure you want to delete this token" : "Are you sure you want to delete this token? If deleted, API requests that attempt to authenticate using this token will no longer be accepted.",
        "No, Go Back" : "No, Go Back",
        "Yes, Delete" : "Yes, Delete"
    },
    "de": {
        "API Tokens": "API Tokens",
        "Name": "Name",
        "Created": "Erstellt",
        "Last Used": "Zuletzt Verwendet",
        "Never": "Nie",
        "Token Name": "Token Name",
        "Edit Token": "Token Bearbeiten",
        "Close": "Schließen",
        "Update": "Aktualisieren",
        "Token Can": "Token Möglichkeiten",
        "Delete Token": "Token löschen",
        "Are you sure you want to delete this token" : "Möchten Sie dieses Token wirklich löschen? Wenn gelöscht, werden API-Anforderungen, die versuchen, sich mit diesem Token zu authentifizieren, nicht mehr akzeptiert.",
        "No, Go Back" : "Nein, geh zurück",
        "Yes, Delete" : "Ja, löschen"
    },
    "ru": {
        "API Tokens": "API Токены",
        "Name": "Название",
        "Created": "Создано",
        "Last Used": "Последнее использование",
        "Never": "Никогда",
        "Token Name": "Название Токена",
        "Edit Token": "Редактировать Токен",
        "Close": "Закрыть",
        "Update": "Обновить",
        "Token Can": "Возможности Токена",
        "Delete Token": "Удалить Токен",
        "Are you sure you want to delete this token" : "Вы уверены, что хотите удалить этот токен? Если удалить, запросы API, которые пытаются аутентифицироваться с использованием этого токена, больше не будут приниматься.",
        "No, Go Back" : "Нет, возвращайся",
        "Yes, Delete" : "Да, Удалить"
    }
}
</i18n>