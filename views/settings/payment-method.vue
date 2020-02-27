<template>
    <div>
        <div v-if="spark.billsUsingStripe">
            <payment-method-stripe :user="user" :team="team" :billable-type="billableType"></payment-method-stripe>
        </div>
        <div v-else>
            <payment-method-braintree :user="user" :team="team" :billable-type="billableType"></payment-method-braintree>
        </div>
    </div>
</template>

<script>
    import PaymentMethodStripe from './payment-method/payment-method-stripe'
    import PaymentMethodBraintree from './payment-method/payment-method-braintree'

    export default {
        name: "payment-method",
        props: ["user","team","billableType"],
        components: {PaymentMethodStripe, PaymentMethodBraintree},
    }
</script>

<style scoped>

</style>