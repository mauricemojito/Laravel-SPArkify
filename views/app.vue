<template>
    <div>
        <user-navbar :user="user"
                     :teams="teams"
                     :current-team="currentTeam"
                     :unread-announcements-count="unreadAnnouncementsCount"
                     :unread-notifications-count="unreadNotificationsCount"
                     ></user-navbar>
        <main class="py-4">
            <router-view :user="user"
                         :support-form="supportForm"
                         :teams="teams"
                         locale="locale"
                         :current-team="currentTeam"
                         :unread-announcements-count="unreadAnnouncementsCount"
                         :unread-notifications-count="unreadNotificationsCount"></router-view>
        </main>

        <notifications
                :notifications="notifications"
                :has-unread-announcements="hasUnreadAnnouncements"
                :loading-notifications="loadingNotifications">
        </notifications>
    </div>
</template>

<script>

    import UserNavbar from './nav/user'
    import Notifications from './modals/notfications'

    export default {
        name: "app",
        props: [
            "user",
            "supportForm",
            "teams",
            "currentTeam",
            "notifications",
            "hasUnreadAnnouncements",
            "loadingNotifications",
            "unreadAnnouncementsCount",
            "unreadNotificationsCount"
        ],
        components: {UserNavbar, Notifications},
    }
</script>

<style scoped>

</style>