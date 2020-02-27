<template>
    <div>
        <create-team></create-team>
        <pending-invitations></pending-invitations>

        <div v-if="user && teams.length > 0">
            <current-teams :teams="teams" :user="user"></current-teams>
        </div>
    </div>
    
</template>

<script>
    import CreateTeam from './teams/create-team'
    import CurrentTeams from './teams/current-teams'
    import PendingInvitations from './teams/pending-invitations'

    export default {
        name: "teams",
        props: ["user","teams"],
        components: {
            CreateTeam, CurrentTeams, PendingInvitations
        }
    }
</script>