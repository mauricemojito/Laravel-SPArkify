<template>
    <div>
        <div v-if="plans.length > 0">
            <!-- Trial Expiration Notice -->
            <trial-expiration-notice :subscription-is-on-trial="subscriptionIsOnTrial"></trial-expiration-notice>

            <!-- New Subscription -->
            <div v-if="needsSubscription">
                <div v-if="spark.billsUsingStripe">
                    <subscribe-stripe :user="user" :team="team" :plans="plans" :billable-type="billableType"></subscribe-stripe>
                </div>
                <div v-else>
                    <subscribe-braintree :user="user" :team="team" :plans="plans" :billable-type="billableType"></subscribe-braintree>
                </div>
            </div>

            <!-- Update Subscription -->
            <div v-if="subscriptionIsActive">
                <update-subscription :user="user" :team="team" :plans="plans" :billable-type="billableType"></update-subscription>
            </div>

            <!-- Resume Subscription -->
            <div v-if="subscriptionIsOnGracePeriod">
                <resume-subscription :user="user" :team="team" :plans="plans" :billable-type="billableType"></resume-subscription>
            </div>

            <!-- Cancel Subscription -->
            <div v-if="subscriptionIsActive">
                <cancel-subscription :user="user" :team="team" :billable-type="billableType"></cancel-subscription>
            </div>
        </div>

        <!-- Plan Features Modal -->
        <div class="modal fade" id="modal-plan-details" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content" v-if="detailingPlan">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ detailingPlan.name }}
                        </h5>
                    </div>

                    <!-- Modal Body -->
                    <div class="modal-body">
                        <ul class="plan-feature-list p-0 m-0">
                            <li v-for="feature in detailingPlan.features">
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TrialExpirationNotice from './subscription/trial-expiration-notice'
    import UpdateSubscription from './subscription/update-subscription'
    import ResumeSubscription from './subscription/resume-subscription'
    import CancelSubscription from './subscription/cancel-subscription'
    import SubscribeStripe from './subscription/gateways/subscribe-stripe'
    import SubscribeBraintree from './subscription/gateways/subscribe-braintree'

    var base = require('settings/subscription');

    export default {
        name: "subscription",
        props: ["user", "team", "billableType"],
        mixins: [base],
        components: { TrialExpirationNotice, UpdateSubscription, ResumeSubscription, CancelSubscription,
        SubscribeStripe, SubscribeBraintree}
    }
</script>

<style scoped>

</style>