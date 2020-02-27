<template>
    <div class="card card-default">
        <div class="card-header">{{ $t('Extra Billing Information') }}</div>

        <div class="card-body">
            <!-- Information Message -->
            <div class="alert alert-info">
                {{ $t('This information will appear on all of your receipts') }}
            </div>

            <!-- Success Message -->
            <div class="alert alert-success" v-if="form.successful">
                {{ $t('Your billing information has been updated!') }}
            </div>

            <!-- Extra Billing Information -->
            <form role="form">
                <div class="form-group row">
                    <div class="col-md-12">
                        <textarea class="form-control" rows="7" v-model="form.information" style="font-family: monospace;" :class="{'is-invalid': form.errors.has('information')}"></textarea>

                        <span class="invalid-feedback" v-show="form.errors.has('information')">
                             {{ form.errors.get('information') }}
                        </span>
                    </div>
                </div>

                <!-- Update Button -->
                <div class="form-group row mb-0">
                    <div class="offset-md-4 col-md-8 text-right">
                        <button type="submit" class="btn btn-primary" @click.prevent="update" :disabled="form.busy">
                            {{ $t('Update') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    const base = require('settings/invoices/update-extra-billing-information');

    export default {
        name: "update-extra-billing-information",
        props: ["user", "team", "billableType"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Extra Billing Information": "Extra Billing Information",
        "This information will appear on all of your receipts":  "This information will appear on all of your receipts, and is a great place to add your full business name, VAT number, or address of record. Do not include any confidential or financial information such as credit card numbers.",
        "Your billing information has been updated!": "Your billing information has been updated!",
        "Update": "Update"
    },
    "de": {
        "Extra Billing Information": "Zusätzliche Rechnungsinformationen",
        "This information will appear on all of your receipts":  "Diese Informationen erscheinen auf allen Ihren Quittungen und sind ein großartiger Ort, um Ihren vollständigen Namen, die Umsatzsteuer-Identifikationsnummer oder die eingetragene Adresse anzugeben. Geben Sie keine vertraulichen oder finanziellen Angaben wie Kreditkartennummern an.",
        "Your billing information has been updated!": "Ihre Zahlungsinformationen wurden aktualisiert!",
        "Update": "Aktualisieren"
    },
    "ru": {
        "Extra Billing Information": "Дополнительная платежная информация",
        "This information will appear on all of your receipts":  "Эта информация будет отображаться во всех ваших квитанциях и является отличным местом для добавления вашего полного фирменного наименования, номера НДС или адреса записи. Не включайте конфиденциальную или финансовую информацию, такую как номера кредитных карт.",
        "Your billing information has been updated!": "Ваша платежная информация была обновлена!",
        "Update": "Обновить"
    },
    "ua": {
        "Extra Billing Information": "Додаткова платіжна інформація",
        "This information will appear on all of your receipts":  "Ця інформація буде відображатися у всіх ваших квитанціях і є відмінним місцем для додавання вашого повного фірмового найменування, номера ПДВ або адреси записи. Не вмикайте конфіденційну або фінансову інформацію, таку як номери кредитних карт.",
        "Your billing information has been updated!": "Ваша платіжна інформація була оновлена!",
        "Update": "Оновити"
    }
}
</i18n>