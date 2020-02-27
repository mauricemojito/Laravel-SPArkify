<template>
    <div class="card card-default">
        <div class="card-header">{{ $t('Update VAT ID') }}</div>

        <div class="card-body">
            <!-- Success Message -->
            <div class="alert alert-success" v-if="form.successful">
                {{ $t('Your VAT ID has been updated!') }}
            </div>

            <form role="form">
                <!-- VAT ID -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t('VAT ID') }}</label>

                    <div class="col-md-6">
                        <input type="text" class="form-control" name="vat_id" v-model="form.vat_id" :class="{'is-invalid': form.errors.has('vat_id')}">

                        <span class="invalid-feedback" v-show="form.errors.has('vat_id')">
                            {{ form.errors.get('vat_id') }}
                        </span>
                    </div>
                </div>

                <!-- Update Button -->
                <div class="form-group row mb-0">
                    <div class="offset-md-4 col-md-6">
                        <button type="submit" class="btn btn-primary"
                                @click.prevent="update"
                                :disabled="form.busy">

                            <span v-if="form.busy">
                                <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t('Updating') }}
                            </span>

                            <span v-else>
                                {{ $t('Update') }}
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    const base = require('settings/payment-method/update-vat-id');
    export default {
        name: "update-vat-id",
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Update VAT ID": "Update VAT ID",
        "Your VAT ID has been updated!":  "Your VAT ID has been updated!",
        "VAT ID": "VAT ID",
        "Updating": "Updating",
        "Update": "Update"
    },
    "de": {
        "Update VAT ID": "MwSt.-ID aktualisieren",
        "Your VAT ID has been updated!":  "Ihre Umsatzsteuer-ID wurde aktualisiert!",
        "VAT ID": "Umsatzsteuer-ID",
        "Updating": "Aktualisierung",
        "Update": "Aktualisieren"
    },
    "ru": {
        "Update VAT ID": "Обновить идентификатор НДС",
        "Your VAT ID has been updated!":  "Ваш идентификатор НДС обновлен!",
        "VAT ID": "Идентификатор НДС",
        "Updating": "Обновление",
        "Update": "Обновить"
    },
    "ua": {
        "Update VAT ID": "Оновити ідентифікатор ПДВ",
        "Your VAT ID has been updated!":  "Ваш ідентифікатор ПДВ оновлено!",
        "VAT ID": "Ідентифікатор ПДВ",
        "Updating": "Оновлення",
        "Update": "Оновити"
    }
}
</i18n>