<template>
    <div>
        <div class="card card-default">
            <div class="card-header">
                {{ $t('Create API Token') }}
            </div>

            <div class="card-body">
                <form role="form">
                    <!-- Token Name -->
                    <div class="form-group row">
                        <label class="col-md-4 col-form-label text-md-right">{{ $t('Token Name') }}</label>

                        <div class="col-md-6">
                            <input type="text" class="form-control" name="name" v-model="form.name"  :class="{'is-invalid': form.errors.has('name')}">

                            <span class="invalid-feedback" v-show="form.errors.has('name')">
                                {{ form.errors.get('name') }}
                            </span>
                        </div>
                    </div>

                    <!-- Token Abilities -->
                    <div class="form-group row" v-if="availableAbilities.length > 0">
                        <label class="col-md-4 col-form-label text-md-right">{{ $t('Token Can') }}</label>

                        <div class="col-md-6">
                            <div class="mb-2">
                                <button class="btn btn-default" @click.prevent="assignAllAbilities" v-if=" ! allAbilitiesAssigned">
                                    <i class="fa fa-btn fa-check"></i> {{ $t('Assign All Abilities') }}
                                </button>

                                <button class="btn btn-default" @click.prevent="removeAllAbilities" v-if="allAbilitiesAssigned">
                                    <i class="fa fa-btn fa-times"></i> {{ $t('Remove All Abilities') }}
                                </button>
                            </div>

                            <div v-for="ability in availableAbilities">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox"
                                               @click="toggleAbility(ability.value)"
                                               :class="{'is-invalid': form.errors.has('abilities')}"
                                               :checked="abilityIsAssigned(ability.value)">

                                        {{ ability.name }}
                                    </label>
                                </div>
                            </div>

                            <span class="invalid-feedback" v-show="form.errors.has('abilities')">
                                {{ form.errors.get('abilities') }}
                            </span>
                        </div>
                    </div>

                    <!-- Create Button -->
                    <div class="form-group row mb-0">
                        <div class="offset-md-4 col-md-6">
                            <button type="submit" class="btn btn-primary"
                                    @click.prevent="create"
                                    :disabled="form.busy">

                                {{ $t('Create') }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Show Token Modal -->
        <div class="modal" id="modal-show-token" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" v-if="showingToken">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ $t('API Token') }}
                        </h5>
                    </div>

                    <div class="modal-body">
                        <div class="alert alert-warning">
                            {{ $t('Here is your new API token') }}
                        </div>

                        <textarea id="api-token" class="form-control"
                                  @click="selectToken"
                                  rows="5">{{ showingToken }}</textarea>
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="selectToken">
                            <span v-if="copyCommandSupported"> {{ $t('Copy To Clipboard') }}</span>
                            <span v-else> {{ $t('Select All') }}</span>
                        </button>
                        <button type="button" class="btn btn-default" data-dismiss="modal"> {{ $t('Close') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const base = require('settings/api/create-token');

    export default {
        name: "create-token",
        props: ['availableAbilities'],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Create API Token": "Create API Token",
        "Token Name": "Token Name",
        "Token Can": "Token Can",
        "Assign All Abilities": "Assign All Abilities",
        "Remove All Abilities": "Remove All Abilities",
        "Create": "Create",
        "API Token": "API Token",
        "Here is your new API token": "Here is your new API token. This is the only time the token will ever be displayed, so be sure not to lose it! You may revoke the token at any time from your API settings",
        "Copy To Clipboard": "Copy To Clipboard",
        "Select All" : "Select All",
        "Close" : "Close"
    },
    "de": {
        "Create API Token": "API-Token erstellen",
        "Token Name": "Token Name",
        "Token Can": "Token Möglichkeiten",
        "Assign All Abilities": "Alle Fähigkeiten zuweisen",
        "Remove All Abilities": "Entferne alle Fähigkeiten",
        "Create": "Erstellen",
        "API Token": "API Token",
        "Here is your new API token": "Hier ist Ihr neues API-Token. Dies ist der einzige Zeitpunkt, zu dem das Token angezeigt wird. Verlieren Sie es also nicht! Sie können das Token jederzeit von Ihren API-Einstellungen widerrufen",
        "Copy To Clipboard": "Kopieren",
        "Select All" : "Wählen Sie Alle",
        "Close" : "Schließen"
    },
    "ru": {
        "Create API Token": "Создать API Токен",
        "Token Name": "Название Токена",
        "Token Can": "Возможности Токена",
        "Assign All Abilities": "Назначить все способности",
        "Remove All Abilities": "Удалить все способности",
        "Create": "Создать",
        "API Token": "API-токен",
        "Here is your new API token": "Вот ваш новый API-токен. Это единственный раз, когда токен будет отображаться, поэтому не теряйте его! Вы можете отозвать токен в любое время в настройках API",
        "Copy To Clipboard": "Скопировать в буфер обмена",
        "Select All" : "Выбрать все",
        "Close" : "Закрыть"
    },
    "ua": {
        "Create API Token": "Створити API-токен",
        "Token Name": "Назва токена",
        "Token Can": "Можливість Токена",
        "Assign All Abilities": "Призначити всі можливості",
        "Remove All Abilities": "Видалити всі можливості",
        "Create": "Створити",
        "API Token": "API-токен",
        "Here is your new API token": "Ось ваш новий API-токен. Це єдиний раз, коли токен буде відображатися, тому не втрачайте його! Ви можете відкликати токен в будь-який час в налаштуваннях API",
        "Copy To Clipboard": "Скопіювати в буфер обміну",
        "Select All": "Вибрати все",
        "Close": "Закрити"
    }
}
</i18n>