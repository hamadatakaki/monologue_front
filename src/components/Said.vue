<template>
    <div class="said">
        <h3>
            <router-link :to="{ name: 'profile', params: { uuid: said.account.uuid} }">
                {{ said.account.username }}
            </router-link>
        </h3>
        <p>{{ said.datetime }}</p>
        <p>{{ said.text }}</p>
    </div>
</template>
<style lang="scss" src="./scss/said.scss"></style>
<script>
    export default {
        name: 'said',
        props: ['said']
    }
</script>
