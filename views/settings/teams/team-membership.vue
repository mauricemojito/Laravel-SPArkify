<template>
    <div>
        <div v-if="ownsTeam">
            <!-- Send Invitation -->
            <div v-if="user && team">
                <send-invitation :user="user" :team="team" :billable-type="billableType" :default-role="spark.defaultRole"></send-invitation>
            </div>

            <!-- Pending Invitations -->
            <div v-if="invitations && invitations.length > 0">
                <mailed-invitations :invitations="invitations"></mailed-invitations>
            </div>
        </div>

        <!-- Team Members -->
        <div v-if="user && team">
            <team-members :user="user" :team="team"></team-members>
        </div>
    </div>
</template>

<script>
    import SendInvitation from './send-invitation'
    import MailedInvitations from './mailed-invitations'
    import TeamMembers from './team-members'

    var base = require('settings/teams/team-membership');

    export default {
        name: "team-membership",
        props: ["user", "team", "billableType", "ownsTeam"],
        mixins: [base],
        components: {SendInvitation, MailedInvitations, TeamMembers}
    }
</script>

<style scoped>

</style>