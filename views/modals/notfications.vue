<template>
        <div>
            <div class="modal docked docked-right" id="modal-notifications" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <div class="btn-group">
                                <button class="btn btn-light" :class="{'active': showingNotifications}" @click="showNotifications" style="width: 50%;">
                                    {{ $t("Notifications") }}
                                </button>

                                <button class="btn btn-light" :class="{'active': showingAnnouncements}" @click="showAnnouncements" style="width: 50%;">
                                    {{ $t("Announcements") }} <i class="fa fa-circle text-danger p-l-xs" v-if="hasUnreadAnnouncements"></i>
                                </button>
                            </div>
                        </div>

                        <div class="modal-body">
                            <!-- Informational Messages -->
                            <div class="notification-container" v-if="loadingNotifications">
                                <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t("Loading Notifications") }}
                            </div>

                            <div class="notification-container" v-if=" ! loadingNotifications && activeNotifications.length == 0">
                                <div class="alert alert-warning m-b-none">
                                    {{ $t("We don't have anything to show you right now!") }}
                                </div>
                            </div>

                            <!-- List Of Notifications -->
                            <div class="notification-container" v-if="showingNotifications && hasNotifications">
                                <div class="notification" v-for="notification in notifications.notifications">

                                    <!-- Notification Icon -->
                                    <figure>
                                        <img v-if="notification.creator" :src="notification.creator.photo_url" class="spark-profile-photo" alt="Creator Photo" />

                                        <span v-else class="fa-stack fa-2x">
                                        <i class="fa fa-circle fa-stack-2x"></i>
                                        <i :class="['fa', 'fa-stack-1x', 'fa-inverse', notification.icon]"></i>
                                    </span>
                                    </figure>

                                    <!-- Notification -->
                                    <div class="notification-content">
                                        <div class="meta">
                                            <p class="title">
                                            <span v-if="notification.creator">
                                                {{ notification.creator.name }}
                                            </span>

                                                <span v-else>
                                                {{ spark.product }}
                                            </span>
                                            </p>

                                            <div class="date">
                                                {{ notification.created_at | relative }}
                                            </div>
                                        </div>

                                        <div class="notification-body" v-html="notification.parsed_body"></div>

                                        <!-- Notification Action -->
                                        <a :href="notification.action_url" class="btn btn-primary" v-if="notification.action_text">
                                            {{ notification.action_text }}
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <!-- List Of Announcements -->
                            <div class="notification-container" v-if="showingAnnouncements && hasAnnouncements">
                                <div class="notification" v-for="announcement in notifications.announcements">

                                    <!-- Notification Icon -->
                                    <figure>
                                        <img :src="announcement.creator.photo_url" class="spark-profile-photo" alt="Creator Photo" />
                                    </figure>

                                    <!-- Announcement -->
                                    <div class="notification-content">
                                        <div class="meta">
                                            <p class="title">{{ announcement.creator.name }}</p>

                                            <div class="date">
                                                {{ announcement.created_at | relative }}
                                            </div>
                                        </div>

                                        <div class="notification-body" v-html="announcement.parsed_body"></div>

                                        <!-- Announcement Action -->
                                        <a :href="announcement.action_url" class="btn btn-primary" v-if="announcement.action_text">
                                            {{ announcement.action_text }}
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Actions -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t("Close") }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    const base = require('notifications/notifications');

    export default {
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Notifications": "Notifications",
        "Announcements": "Announcements",
        "Loading Notifications": "Loading Notifications",
        "We don't have anything to show you right now!": "We don't have anything to show you right now! But when we do, we'll be sure to let you know. Talk to you soon!",
        "Close": "Close"
    },
    "de": {
        "Notifications": "Benachrichtigungen",
        "Announcements": "Ankündigungen",
        "Loading Notifications": "Benachrichtigungen laden",
        "We don't have anything to show you right now!": "Wir haben im Moment nichts zu zeigen! Aber wenn wir das tun, dann werden wir es Sie wissen lassen. Wir sprechen Sie bald!",
        "Close": "Schließen"
    },
    "ru": {
        "Notifications": "Уведомления",
        "Announcements": "Объявления",
        "Loading Notifications": "Загрузка уведомлений",
        "We don't have anything to show you right now!": "У нас нет ничего, чтобы показать вам прямо сейчас! Но когда мы это сделаем, мы обязательно дадим вам знать. Скоро с вами поговорим!",
        "Close": "Закрыть"
    },
    "ua": {
        "Notifications": "Повідомлення",
        "Announcements": "Оголошення",
        "Loading Notifications": "Завантаження повідомлень",
        "We don't have anything to show you right now!": "У нас немає нічого, щоб показати вам прямо зараз! Але коли ми це зробимо, ми обов'язково дамо вам знати. Скоро з вами поговоримо!",
        "Close": "Закрити"
    }
}
</i18n>