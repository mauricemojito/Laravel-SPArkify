<template>
    <div class="card card-default">
        <div class="card-header">{{ $t("Redeem Coupon") }}</div>

        <div class="card-body">
            <div class="alert alert-success" v-if="form.successful">
                {{ $t("Coupon accepted! The discount will be applied to your next invoice.") }}
            </div>

            <form role="form">
                <!-- Coupon Code -->
                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">{{ $t("Coupon Code") }}</label>

                    <div class="col-md-6">
                        <input type="text" class="form-control" name="coupon" v-model="form.coupon" :class="{'is-invalid': form.errors.has('coupon')}">

                        <span class="invalid-feedback" v-show="form.errors.has('coupon')">
                            {{ form.errors.get('coupon') }}
                        </span>
                    </div>
                </div>

                <!-- Redeem Button -->
                <div class="form-group row mb-0">
                    <div class="offset-md-4 col-md-6">
                        <button type="submit" class="btn btn-primary"
                                @click.prevent="redeem"
                                :disabled="form.busy">

                            <span v-if="form.busy">
                                <i class="fa fa-btn fa-spinner fa-spin"></i> {{ $t("Redeeming") }}
                            </span>

                            <span v-else>
                                {{ $t("Redeem") }}
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    const base = require('settings/payment-method/redeem-coupon');

    export default {
        name: "redeem-coupon",
        props: ["user", "team","billableType"],
        mixins: [base]
    }
</script>

<i18n>
{
    "en": {
        "Redeem Coupon": "Redeem Coupon",
        "Coupon accepted":  "Coupon accepted! The discount will be applied to your next invoice.",
        "Coupon Code": "Coupon Code",
        "Redeeming": "Redeeming",
        "Redeem": "Redeem"
    },
    "de": {
        "Redeem Coupon": "Gutschein einlösen",
        "Coupon accepted":  "Gutschein akzeptiert! Der Rabatt wird auf Ihre nächste Rechnung angewendet.",
        "Coupon Code": "Gutscheincode",
        "Redeeming": "Einlösung",
        "Redeem": "Einlösen"
    },
    "ru": {
        "Redeem Coupon": "Использовать купон",
        "Coupon accepted":  "Купон принят! Скидка будет применена к следующему счету",
        "Coupon Code": "Код купона",
        "Redeeming": "Использование",
        "Redeem": "Использовать"
    },
    "ua": {
        "Redeem Coupon": "Використовувати купон",
        "Coupon accepted":  "Купон прийнятий! Знижка буде застосована до наступного рахунку",
        "Coupon Code": "Код купона",
        "Redeeming": "Використання",
        "Redeem": "Використовувати"
    }
}
</i18n>