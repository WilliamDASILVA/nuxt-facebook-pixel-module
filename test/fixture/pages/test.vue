<template>
  <div>
    hello
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$fb.disable()
      this.$fb.track()
    }
  }
</script>
