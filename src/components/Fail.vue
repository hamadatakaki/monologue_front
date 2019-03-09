<template>
    <div>
        <h1 class="panel-heading">this is fail page</h1>
        <router-link :to="{ name: 'timeline' }">Timelineへ</router-link>
    </div>
</template>
<script>
    export default {
        name: 'login'
    }
</script>
