<template>
    <div>
        <div v-if="user && team">
            <!-- Update Team Photo -->
            <update-team-photo :user="user" :team="team"></update-team-photo>

            <!-- Update Team Name -->
            <update-team-name :user="user" :team="team"></update-team-name>
        </div>
    </div>
</template>

<script>
    import UpdateTeamPhoto from './update-team-photo'
    import UpdateTeamName from './update-team-name'

    var base = require('settings/teams/team-profile');

    export default {
        name: "team-profile",
        props: ["user", "team"],
        mixins: [base],
        components: {UpdateTeamPhoto, UpdateTeamName}
    }
</script>

<style scoped>

</style>