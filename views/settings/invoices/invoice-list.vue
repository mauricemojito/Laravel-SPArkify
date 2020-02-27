<template>
    <div class="card card-default">
        <div class="card-header">{{ $t('Invoices') }}</div>

        <div class="table-responsive">
            <table class="table">
                <thead>
                </thead>
                <tbody>
                <tr v-for="invoice in invoices">
                    <!-- Invoice Date -->
                    <td>
                        <strong>{{ invoice.created_at | date }}</strong>
                    </td>

                    <!-- Invoice Total -->
                    <td>
                    </td>

                    <!-- Invoice Download Button -->
                    <td class="text-right">
                        <a :href="downloadUrlFor(invoice)">
                            <button class="btn btn-default">
                                <i class="fa fa-btn fa-file-pdf-o"></i> {{ $t('Download PDF') }}
                            </button>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    const base = require('settings/invoices/invoice-list');

    export default {
        name: "invoice-list",
        props: ["user", "team", "invoices", "billableType" ],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Invoices": "Invoices",
        "Download PDF":  "Download PDF"
    },
    "de": {
        "Invoices": "Rechnungen",
        "Download PDF":  "PDF herunterladen"
    },
    "ru": {
        "Invoices": "Счета",
        "Download PDF":  "Скачать PDF"
    },
    "ua": {
        "Invoices": "Рахунки-фактури",
        "Download PDF":  "Завантажити PDF"
    }
}
</i18n>