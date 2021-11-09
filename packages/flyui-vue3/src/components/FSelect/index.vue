<template>
  <div class="f-select-form" :tabindex="tabindex" @blur="open = false">
    <label v-if="!!label" class="f-label">
      {{ label }}
      <span v-if="required" class="f-invalid">*</span>
    </label>
    <div class="f-select">
      <div class="f-select-group">
        <div v-if="isPrepend" class="prepend-container" :class="selectClasses">
          <slot name="prepend" />
        </div>
        <div
          class="selected flex items-center"
          :class="{ open, ...selectClasses }"
          @click="open = !open"
        >
          <span class="display-selected">
            {{ displayValue }}
          </span>
        </div>
        <div
          v-if="!hideAppend || isAppend"
          class="append-container"
          :class="selectClasses"
        >
          <slot v-if="isAppend" name="append" />
          <div v-if="!hideAppend">
            <f-icon
              :class="[open && 'chevron-up']"
              name="chevron-down"
              width="16px"
              height="16px"
            />
          </div>
        </div>
      </div>
      <div
        v-if="!disabled && !readOnly"
        ref="itemsContainer"
        class="items w-full ss-container"
        :class="{
          selectHide: !delayOpen,
          'xyz-in': open,
          'xyz-out': !open,
        }"
        xyz="flip-down origin-top"
      >
        <div class="wrapper">
          <div v-if="!!placeholder" class="default">
            {{ placeholder || 'Choose ...' }}
          </div>
          <div
            v-for="option in options"
            :key="option?.value || option"
            :class="[
              ((option?.value && option.value === selected) ||
                option === selected) &&
                'selected',
            ]"
            @click="() => optionClicked(option)"
          >
            {{ option?.label || option }}
          </div>
        </div>
      </div>

      <span
        class="f-invalid error-message"
        :class="{ 'xyz-in': !!message, 'xyz-out': !message }"
        xyz="fade up"
      >
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { FScrollable } from '@gaconkzk/core/utils/FScrollable'
import {
  computed,
  defineComponent,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import { SelectType } from '../../@types/forms/select'

export default defineComponent({
  name: 'FSelect',
  props: {
    selected: { type: [String, Number], default: '' },
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
    options: {
      type: Array,
      required: true,
    },
    hideAppend: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  emits: ['update:selected'],
  setup(props: SelectType, { emit, slots }) {
    const itemsContainer = ref<HTMLElement | null>(null)
    const loading = ref<boolean>(false)
    const open = ref<boolean>(false)
    const delayOpen = ref<boolean>(false)
    const selectClasses = computed(() => {
      return {
        disabled: props.disabled,
        invalid: props.invalid,
        readOnly: props.readOnly,
        prepend: !!slots.prepend,
        append: !!slots.append || !props.hideAppend,
      }
    })
    const isPrepend = computed(() => !!slots.prepend)
    const isAppend = computed(() => !!slots.append)
    const displayValue = computed(() => {
      if (!props.selected && props.placeholder) {
        return props.placeholder
      }
      const options = props.options || []
      const s: any = options.find(
        (i: any) =>
          (i?.value && i.value === props.selected) || i === props.selected,
      )
      return s?.label || s
    })
    const callback = (e: any) => {
      open.value = false
      emit('update:selected', e.target.value)
    }
    const optionClicked = (option: any) => {
      open.value = false
      emit('update:selected', option?.value ?? option)
    }
    watch(open, (v) => {
      if (!v) {
        setTimeout(() => {
          delayOpen.value = v
        }, 500)
      } else {
        delayOpen.value = v
      }
    })

    onMounted(() => {
      if (itemsContainer.value) {
        Object.defineProperty(itemsContainer.value, 'data-f-scrollable', {
          value: new FScrollable(itemsContainer.value),
          configurable: true,
        })
      }
    })

    onBeforeUnmount(() => {
      if (
        !Object.prototype.hasOwnProperty.call(
          itemsContainer.value,
          'data-f-scrollable',
        )
      )
        return

      if (itemsContainer.value) {
        const cnode: HTMLElement & { 'data-f-scrollable'?: FScrollable } =
          itemsContainer.value
        cnode['data-f-scrollable']?.unBind()
        delete cnode['data-f-scrollable']
      }
    })

    return {
      selectClasses,
      loading,
      open,
      delayOpen,
      isPrepend,
      isAppend,
      displayValue,
      callback,
      optionClicked,
      itemsContainer,
      ...props,
    }
  },
})
</script>

<style lang="scss" scoped>
.f-select-form {
  @apply w-full focus:outline-none;

  .f-select {
    @apply appearance-none mt-2 flex flex-col flex-wrap relative text-left outline-none border-charcoal;

    .f-select-group {
      @apply w-full flex flex-row items-stretch rounded-lg;

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

      .selected {
        @apply relative items-center flex-grow px-4 flex-grow nm-inset-$f-primary border-charcoal cursor-pointer rounded-lg h-10;

        .display-selected {
          @apply truncate;
        }
        &.read-only {
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
        @apply h-10 flex items-center px-2 border-l-0 border-r border-t border-b border-solid rounded-r-lg;
        border: 1px solid var(--f-primary-lighter);
        &.invalid {
          @apply border-red-700 text-red-500 border-opacity-60;
        }

        &.disabled {
          @apply cursor-not-allowed;
        }
        .chevron-up {
          transform: rotate(180deg);
        }
      }

      .prepend-container {
        @apply h-10 flex flex items-center px-2 border-r-0 border-l border-t border-b border-solid rounded-l-lg;

        border: 1px solid var(--f-primary-lighter);

        &.invalid {
          @apply border-red-700 text-red-500 border-opacity-60;
        }

        &.disabled {
          @apply cursor-not-allowed;
        }
      }
    }

    .items {
      @apply nm-flat-$f-primary border-red-200 border-solid absolute left-0 right-0 top-11 min-h-40 h-60 max-h-80 w-full rounded-lg rounded-t-none px-2 py-2 my-2;

      z-index: 1000;

      .wrapper {
        @apply h-full;

        div {
          @apply nm-flat-$f-primary truncate p-2 m-2 rounded-lg text-t-primary cursor-pointer select-none duration-100;

          transition-duration: 0.2s;
          transition-property: color;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

          &.selected {
            @apply nm-inset-$f-primary text-brand bg-opacity-70;
          }

          &.default {
            @apply border-2 border-transparent border-solid;
          }

          &:hover {
            @apply nm-inset-$f-primary text-t-primary-actived;
            &.selected {
              @apply text-brand bg-opacity-70;
            }
          }
        }
      }
    }
  }

  .selectHide {
    @apply hidden;
  }

  .f-invalid {
    @apply text-t-error text-xs mx-1;
    &.error-message {
      @apply absolute -bottom-4 left-1;
    }
  }
}
</style>
