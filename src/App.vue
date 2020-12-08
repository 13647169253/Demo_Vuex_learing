<template>
  <div>
    <my-addition></my-addition>
    <br />
    <hr />
    <br />
    <my-subtract></my-subtract>
  </div>
</template>

<script>
import addition from './components/Addition'
import subtract from './components/Subtraction'

export default {
  data() {
    return {}
  },
  components: {
    'my-addition': addition,
    'my-subtract': subtract,
  },
}
</script>

<style>
</style>
