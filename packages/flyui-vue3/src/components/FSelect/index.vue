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
        class="items w-full"
        :class="{
          selectHide: !delayOpen,
          'xyz-in': open,
          'xyz-out': !open,
        }"
        xyz="flip-down origin-top"
      >
        <div class="wrapper ss-container">
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
import {
  computed,
  defineComponent,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import { SelectType } from '../../@types/forms/select'

import { FScrollable } from '$lib/core/utils/FScrollable'
import '$lib/core/styles/components/fselect.scss'

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
