<template>
    <div>
        <h2>this is fail page</h2>
        <router-link :to="{ name: 'timeline' }">Timelineへ</router-link>
    </div>
</template>
<script>
    export default {
        name: 'login'
    }
</script>
