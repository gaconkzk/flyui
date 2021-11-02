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
.f-form-text-field {
  @apply flex flex-col flex-wrap relative h-20;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    appearance: none;
  }

  // Firefox
  input[type='number'] {
    appearance: textfield;
  }

  input[type='text'],
  input[type='email'],
  input[type='url'],
  input[type='password'],
  input[type='number'],
  input[type='date'],
  input[type='datetime-local'],
  input[type='month'],
  input[type='search'],
  input[type='tel'],
  input[type='time'],
  input[type='week'],
  input[multiple],
  textarea,
  select {
    &:focus,
    &:hover {
      @apply ring-0 ring-current outline-current outline-none;
    }
  }

  input[type='text']:not(.disabled):not(.invalid),
  input[type='number']:not(.disabled):not(.invalid),
  input[type='email']:not(.disabled):not(.invalid),
  input[type='password']:not(.disabled):not(.invalid),
  input[type='time']:not(.disabled):not(.invalid) {
    @apply nm-inset-$f-primary border-$f-primary h-10;
  }

  input[type='text'].invalid,
  input[type='number'].invalid,
  input[type='email'].invalid,
  input[type='password'].invalid,
  input[type='time'].invalid {
    @apply nm-inset-$f-primary h-10 ring-0 ring-current outline-current outline-none;

    &.append {
      @apply rounded-br-none rounded-tr-none border-r-0;
    }

    &.prepend {
      @apply rounded-bl-none rounded-tl-none border-l-0;
    }
  }

  .f-label {
    @apply mx-1 text-sm;
  }

  // Should have space for display error - and dont break layout
  .f-invalid {
    @apply text-red-500 text-xs mx-1;
    &.error-message {
      // do not take original space - use absolute
      @apply absolute -bottom-3;
    }
  }

  .f-input-group {
    @apply flex w-full items-stretch rounded-lg;
    border: 1px solid var(--f-primary-lighter);

    &:hover,
    &:focus {
      &:not(.invalid) {
        border: 1px solid var(--f-primary-highlight);
      }
      &.invalid:not(.disabled):not(.read-only) {
        border: 1px solid red;
      }
    }

    .f-input {
      @apply nm-inset-$f-primary cursor-text rounded-md w-full px-2;

      &:read-only {
        cursor: pointer;
      }
      &.disabled,
      &.disabled:focus,
      &.disabled:hover {
        @apply bg-opacity-20 text-opacity-40 cursor-not-allowed opacity-60;
      }

      &.invalid,
      &.invalid:focus,
      &.invalid:hover {
        @apply border-red-700 border-opacity-60;
      }

      &.append {
        @apply rounded-tr-none rounded-br-none border-r-0;
      }

      &.prepend {
        @apply rounded-tl-none rounded-bl-none border-l-0;
      }
    }

    .append-container {
      @apply h-10 items-center flex py-2 px-1.5 border-l-0 border-r border-t border-b border-solid rounded-r-lg;
      border: 1px solid var(--f-primary-lighter);

      &.invalid {
        @apply border-red-700 text-red-500 border-opacity-60;
      }

      &.disabled {
        @apply cursor-not-allowed;
      }
    }

    .prepend-container {
      @apply h-10 items-center flex py-2 px-1.5 border-r-0 border-l border-t border-b border-solid rounded-l-lg;

      border: 1px solid var(--f-primary-lighter);

      &.invalid {
        @apply border-red-700 text-red-500 border-opacity-60;
      }

      &.disabled {
        @apply cursor-not-allowed;
      }
    }
  }
}
</style>
