<template>
    <div>
        <update-profile-photo :user="user" :form="supportForm"></update-profile-photo>
        <update-contact-information :user="user" :form="supportForm"></update-contact-information>
    </div>
</template>

<script>
    const base = require('settings/profile');

    import UpdateProfilePhoto from './profile/update-profile-photo'
    import UpdateContactInformation from './profile/update-contact-information'

    export default {
        name: "profile",
        mixin: [base],
        props: ["user","supportForm"],
        components: {UpdateContactInformation,UpdateProfilePhoto}
    }
</script>