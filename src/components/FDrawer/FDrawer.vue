<template>
  <div
    v-if="show"
    :ref="
      (el) => {
        thisIsMe = el as HTMLElement
      }
    "
  >
    <div :class="['overlay-drawer', bgOverlay]" @click="outsideClick" />
    <div :class="['drawer', 'animate-animated animate-fade-in', drawerClasses]">
      <slot v-if="visible" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  computed,
  onMounted,
  onUnmounted,
} from 'vue'

export default defineComponent({
  name: 'FDrawer',
  props: {
    toggle: {
      type: Function,
      default: () => {},
    },
    show: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: [String, Object, Array],
      default: '',
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    bgDrawer: {
      type: [String, Object, Array],
      default: '',
    },
    bgOverlay: {
      type: [String, Object, Array],
      default: () => '',
    },
    delay: {
      type: Number,
      default: 0,
    },
    position: {
      type: String,
      default: 'absolute',
    },
  },
  setup(props) {
    const thisIsMe = ref<HTMLElement | null>(null)
    const parentMe = ref<HTMLElement | null>(null)

    const visible = ref(props.show)

    const outsideClick = () => {
      if (!props.persistent) {
        props.toggle()
      }
    }
    const drawerClasses = computed(() => [
      props.position,
      props.classes,
      props.bgDrawer,
    ])
    const putMeAtBody = () => {
      if (thisIsMe.value) {
        parentMe.value = thisIsMe.value.parentElement
        parentMe.value?.removeChild(thisIsMe.value)

        thisIsMe.value.setAttribute('id', 'popper_modal')

        const ori = document.getElementById('popper_modal')
        const body = document.body
        if (ori) {
          body.replaceChild(thisIsMe.value, ori)
        } else {
          body.appendChild(thisIsMe.value)
        }
      }
    }

    const meBackToNormal = () => {
      if (thisIsMe.value) {
        document.body.removeChild(thisIsMe.value)
        parentMe.value?.appendChild(thisIsMe.value)
      }
    }

    watch(
      () => props.show,
      (va, vb) => {
        if (va) {
          setTimeout(() => {
            visible.value = true
          }, props.delay)
        } else {
          setTimeout(() => {
            visible.value = false
          }, props.delay)
        }
      },
    )

    watch(thisIsMe, (v) => {
      if (v) {
        putMeAtBody()
      } else {
        meBackToNormal()
      }
    })

    onMounted(() => {
      putMeAtBody()
    })

    onUnmounted(() => {
      setTimeout(() => {
        meBackToNormal()
      }, props.delay)
    })

    return {
      visible,
      outsideClick,
      drawerClasses,
      thisIsMe,
      parentMe,
    }
  },
})
</script>

<style lang="scss" scoped>
.drawer {
  @apply nm-flat-blue-500;
  --xyz-in-duration: 0.8s;
  --xyz-out-duration: 0.8s;

  z-index: 999;
}

.overlay-drawer {
  @apply fixed inset-0 opacity-30 bg-gray-400;

  z-index: 99;
}
</style>
