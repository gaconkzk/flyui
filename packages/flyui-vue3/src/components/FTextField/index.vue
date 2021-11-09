<template>
  <div class="f-form-text-field">
    <label v-if="!!label" class="f-label">
      {{ label }}
      <span v-if="required" class="f-invalid">*</span>
    </label>
    <div class="f-input-group" :class="inputClasses">
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
    >
      {{ message }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { TextFieldType } from '../../@types/forms/textField'

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
  setup(props: TextFieldType, { emit, slots }) {
    const loading = ref<boolean>(false)
    const isPrepend = computed(() => !!slots.prepend)
    const isAppend = computed(() => !!slots.append)
    const inputClasses = computed(() => [
      props.disabled ? 'disabled' : '',
      props.readOnly ? 'read-only' : '',
      props.invalid || !!props.message ? 'invalid' : '',
      !!slots.prepend ? 'prepend' : '',
      !!slots.append ? 'append' : '',
    ])
    const callback = (e: any) => {
      console.log(e.target.value)
      emit(
        'update:value',
        props.type !== 'file' ? e.target.value : e.target.files,
      )
    }
    return { loading, isPrepend, isAppend, inputClasses, callback, ...props }
  },
})
</script>

<style lang="scss" scoped>
@import '@gaconkzk/core/styles/components/ftextfield.scss';
</style>
