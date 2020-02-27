<template>
    <div>
        <div class="modal" id="modal-add-discount" tabindex="-1" role="dialog">
            <div class="modal-dialog" v-if="discountingUser">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            Add Discount ({{ discountingUser.name }})
                        </h5>
                    </div>

                    <div class="modal-body">
                        <!-- Current Discount -->
                        <div class="alert alert-success" v-if="currentDiscount">
                            <span v-if="currentDiscount.duration=='repeating' && currentDiscount.duration_in_months > 1">This user has a discount of {{ formattedDiscount(currentDiscount) }} for all invoices during the next {{currentDiscount.duration_in_months}} months.</span>
                            <span v-if="currentDiscount.duration=='repeating' && currentDiscount.duration_in_months == 1">This user has a discount of {{formattedDiscount(currentDiscount)}} for all invoices during the next month.</span>
                            <span v-if="currentDiscount.duration=='forever'">This user has a discount of {{formattedDiscount(currentDiscount)}} forever.</span>
                            <span v-if="currentDiscount.duration=='once'">This user has a discount of {{formattedDiscount(currentDiscount)}} for a single invoice.</span>
                        </div>

                        <!-- Add Discount Form -->
                        <form role="form">
                            <!-- Discount Type -->
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label text-md-right">Type</label>

                                <div class="col-sm-8 pt-2">
                                    <div class="radio">
                                        <label>
                                            <input type="radio" value="amount" v-model="form.type">&nbsp;&nbsp;Amount
                                        </label>
                                    </div>

                                    <div class="radio">
                                        <label>
                                            <input type="radio" value="percent" v-model="form.type">&nbsp;&nbsp;Percentage
                                        </label>
                                    </div>

                                    <span class="invalid-feedback" v-show="form.errors.has('type')">
                                        {{ form.errors.get('type') }}
                                    </span>
                                </div>
                            </div>

                            <!-- Discount Value -->
                            <div class="form-group row">
                                <label class="col-md-3 col-form-label text-md-right">
                                    <span v-if="form.type == 'percent'">Percentage</span>

                                    <span v-if="form.type == 'amount'">Amount</span>
                                </label>

                                <div class="col-md-8">
                                    <input type="text" class="form-control" v-model="form.value" :class="{'is-invalid': form.errors.has('value')}">

                                    <span class="invalid-feedback" v-show="form.errors.has('value')">
                                        {{ form.errors.get('value') }}
                                    </span>
                                </div>
                            </div>

                            <!-- Discount Duration -->
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label text-md-right">Duration</label>

                                <div class="col-sm-8 pt-2">
                                    <div class="radio">
                                        <label>
                                            <input type="radio" value="once" v-model="form.duration">&nbsp;&nbsp;Once
                                        </label>
                                    </div>

                                    <div class="radio">
                                        <label>
                                            <input type="radio" value="forever" v-model="form.duration">&nbsp;&nbsp;Forever
                                        </label>
                                    </div>

                                    <div class="radio">
                                        <label>
                                            <input type="radio" value="repeating" v-model="form.duration">&nbsp;&nbsp;Multiple Months
                                        </label>
                                    </div>

                                    <span class="invalid-feedback" v-show="form.errors.has('duration')">
                                        {{ form.errors.get('duration') }}
                                    </span>
                                </div>
                            </div>

                            <!-- Duration Months -->
                            <div class="form-group row" v-if="form.duration == 'repeating'">
                                <label class="col-md-3 col-form-label text-md-right">
                                    Months
                                </label>

                                <div class="col-md-8">
                                    <input type="text" class="form-control" v-model="form.months" :class="{'is-invalid': form.errors.has('months')}">

                                    <span class="invalid-feedback" v-show="form.errors.has('months')">
                                        {{ form.errors.get('months') }}
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- Modal Actions -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>

                        <button type="button" class="btn btn-primary" @click="applyDiscount" :disabled="form.busy">
                            <span v-if="form.busy">
                                <i class="fa fa-btn fa-spinner fa-spin"></i> Applying
                            </span>

                            <span v-else>
                                Apply Discount
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const base = require('kiosk/add-discount');

    export default {
        name: "add-discount",
        mixins: [base]
    }
</script>

<style scoped>

</style>