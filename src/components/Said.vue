<template>
    <div class="said">
        <h3>
            <router-link :to="{ name: 'profile', params: { account: said.account.username } }">
                {{ said.account.username }}
            </router-link>
        </h3>
        <p>{{ said.datetime }}</p>
        <p>{{ said.text }}</p>
        <p>the action: {{ said.action.action }}</p>
        <p>the emotion: {{ said.emotion.emotion }}</p>
    </div>
</template>
<style lang="scss" src="./scss/said.scss"></style>
<script>
    export default {
        name: 'said',
        props: ['said']
    }
</script>
