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

  input[type='text']:focus,
  input[type='email']:focus,
  input[type='url']:focus,
  input[type='password']:focus,
  input[type='number']:focus,
  input[type='date']:focus,
  input[type='datetime-local']:focus,
  input[type='month']:focus,
  input[type='search']:focus,
  input[type='tel']:focus,
  input[type='time']:focus,
  input[type='week']:focus,
  input[multiple]:focus,
  textarea:focus,
  select:focus {
    @apply nm-inset-$f-primary-sm outline-$f-primary;
    outline: solid 0.5px;
    outline-offset: -0.5px;
  }

  input[type='text']:not(.disabled):not(.invalid),
  input[type='number']:not(.disabled):not(.invalid),
  input[type='email']:not(.disabled):not(.invalid),
  input[type='password']:not(.disabled):not(.invalid),
  input[type='time']:not(.disabled):not(.invalid) {
    @apply nm-inset-$f-primary border-$f-primary rounded-md h-10;

    &.append {
      @apply pr-8;
    }

    &.prepend {
      @apply pl-8;
    }
  }

  input[type='text'].invalid,
  input[type='number'].invalid,
  input[type='email'].invalid,
  input[type='password'].invalid,
  input[type='time'].invalid {
    @apply nm-inset-$f-primary border-$f-error rounded-md h-10 ring-0 ring-current outline-current outline-none;

    &:hover:not(.disabled):not(:read-only),
    &:focus:not(.disabled):not(:read-only) {
      @apply outline-$f-error-dark;
      outline: var(--f-error) solid 0.5px;
      outline-offset: -0.5px;
    }
    &.append {
      @apply pr-8;
    }

    &.prepend {
      @apply pl-8;
    }
  }

  .f-label {
    @apply mx-1 text-sm;
  }

  // Should have space for display error - and dont break layout
  .f-invalid {
    @apply text-$f-error text-xs mx-1;
    &.error-message {
      // do not take original space - use absolute
      @apply absolute -bottom-3;
    }
  }

  .f-input-group {
    @apply flex w-full items-stretch;
    .f-input {
      @apply relative nm-inset-$f-primary-sm border-$f-primary my-1 cursor-text rounded-md w-full px-2;

      &.disabled,
      &.disabled:focus,
      &.disabled:hover {
        @apply bg-opacity-20 text-opacity-40 cursor-not-allowed opacity-60;
      }

      &.invalid,
      &.invalid:focus,
      &.invalid:hover {
        @apply border-$f-error border-opacity-60;
      }
    }

    .append-container {
      @apply absolute  z-50 nm-inset-$f-primary right-0 h-10 items-center flex my-1 py-2 px-1.5  border-l-0 border-r border-t border-b border-solid rounded-r-lg;

      &.invalid {
        @apply border-$f-error text-$f-error border-opacity-60;
      }

      &.disabled {
        @apply cursor-not-allowed;
      }
    }

    .prepend-container {
      @apply absolute z-50 nm-inset-$f-primary left-0 h-10 items-center  my-1 py-2 px-1.5 border-r-0 border-l border-t border-b border-solid rounded-l-lg;

      &.invalid {
        @apply border-$f-error text-$f-error border-opacity-60;
      }

      &.disabled {
        @apply cursor-not-allowed;
      }
    }
  }
}
</style>
