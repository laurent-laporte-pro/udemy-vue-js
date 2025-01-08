<script setup lang="ts">

const props = defineProps({
  title: String,
  color: {
    type: String,
    default: 'rebeccapurple',
    required: false
  }
})

const emit = defineEmits<(e: 'sub-component-event', msg: string) => void>()

const handleClick = () => {
  console.log('Button clicked: ', props.title)
  emit('sub-component-event', `Button clicked: ${props.title} from sub component`)
}

</script>

<template>
  <h2 :style="{color: color}">{{ props.title }}</h2>
  <button @click="handleClick">Click</button>
</template>
