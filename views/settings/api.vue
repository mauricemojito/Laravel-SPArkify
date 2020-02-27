<template>
    <div>
        <!-- Create API Token -->
        <div>
            <create-token :available-abilities="availableAbilities"></create-token>
        </div>

        <!-- API Tokens -->
        <div>
            <tokens :tokens="tokens" :available-abilities="availableAbilities"></tokens>
        </div>
    </div>
</template>

<script>
    import CreateToken from './api/create-token'
    import Tokens from './api/tokens'

    var base = require('settings/api');

    export default {
        name: "api",
        mixins: [base],
        components: {CreateToken, Tokens}
    }
</script>

<style scoped>

</style>