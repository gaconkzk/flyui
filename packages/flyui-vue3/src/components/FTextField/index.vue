<template>
  <div class="f-form-text-field">
    <label v-if="!!label" class="f-label">
      {{ label }}
      <span v-if="required" class="f-invalid">*</span>
    </label>
    <div class="f-input-group">
      <span v-if="isPrepend" class="prepend-container" :class="inputClasses">
        <slot name="prepend" />
      </span>
      <input
        class="f-input"
        required
        :value="value"
        :class="inputClasses"
        :disabled="disabled"
        :readOnly="readOnly"
        :placeholder="placeholder"
        :type="type"
        v-bind="$attrs"
        :invalid="invalid || !!message"
        @input="callback"
      />
      <span v-if="isAppend" class="append-container" :class="inputClasses">
        <slot name="append" />
      </span>
    </div>

    <span
      class="f-invalid error-message"
      :class="{ 'xyz-in': !!message, 'xyz-out': !message, 'no-label': !label }"
      xyz="fade up"
      >{{ message }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FTextField',
  props: {
    value: { type: [String, Number], default: () => '' },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    message: {
      type: String,
      default: '',
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:value'],
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    isPrepend(): boolean {
      return !!this.$slots.prepend
    },
    isAppend(): boolean {
      return !!this.$slots.append
    },
    inputClasses(): string[] {
      return [
        this.disabled ? 'disabled' : '',
        this.invalid || !!this.message ? 'invalid' : '',
        !!this.$slots.prepend ? 'prepend' : '',
        !!this.$slots.append ? 'append' : '',
      ]
    },
  },
  methods: {
    callback(e: any): void {
      this.$emit(
        'update:value',
        this.type !== 'file' ? e.target.value : e.target.files,
      )
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@gaconkzk/core/styles/components/ftextfield.scss';
</style>
