<template>
    <div>
        <!-- Update Extra Billing Information -->
        <div v-if="billable">
            <update-extra-billing-information :user="user" :team="team" :billable-type="billableType"></update-extra-billing-information>
        </div>

        <!-- Invoice List -->
        <div v-if="invoices.length > 0">
            <invoice-list :user="user" :team="team" :invoices="invoices" :billable-type="billableType"></invoice-list>
        </div>
    </div>
</template>

<script>
    import UpdateExtraBillingInformation from './invoices/update-extra-billing-information'
    import InvoiceList from './invoices/invoice-list'
    var base = require('settings/invoices');

    export default {
        name: "invoices",
        props:["user", "team", "billableType"],
        mixins: [base],
        components:{UpdateExtraBillingInformation, InvoiceList}
    }
</script>

<style scoped>

</style>