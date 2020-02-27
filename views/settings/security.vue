<template>
    <div>
        <update-password></update-password>

        <div v-if="spark.usesTwoFactorAuth">
            <div v-if="user && ! user.uses_two_factor_auth">
                <enable-two-factory-auth :user="user"></enable-two-factory-auth>
            </div>

            <div v-if="user && user.uses_two_factor_auth">
                <disable-two-factory-auth :user="user"></disable-two-factory-auth>
            </div>

            <two-factor-reset-code :twoFactorResetCode="twoFactorResetCode"></two-factor-reset-code>

        </div>


    </div>
</template>

<script>
    import UpdatePassword from './security/update-password'
    import EnableTwoFactoryAuth from './security/enable-two-factor-auth'
    import DisableTwoFactoryAuth from './security/disable-two-factor-auth'
    import TwoFactorResetCode from './security/modals/two-factor-reset-code'

    var base = require('settings/security');

    export default {
        name: "security",
        props: ["user"],
        mixins: [base],
        components: {UpdatePassword, EnableTwoFactoryAuth, DisableTwoFactoryAuth, TwoFactorResetCode}
    }
</script>

<style scoped>

</style>