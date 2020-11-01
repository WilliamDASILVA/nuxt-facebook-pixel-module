<template>
    <div>
        Works!
        <nuxt-link to="/test">Navigate</nuxt-link>
    </div>
</template>

<script>
    export default {
        mounted () {
            this.$fb.enable()
            this.$fb.track()
        }
    }
</script>
