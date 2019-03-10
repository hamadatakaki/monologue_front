<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                <router-link :to="{ name: 'profile', params: { account: said.account.username } }">
                    {{ said.account.username }}
                </router-link>
            </p>
            <p class="card-header-title"><time>{{ time }}</time></p>
        </header>

        <div class="card-content">
            <div class="content">
                <p class="title">{{ said.text }}</p>
                <p class="subtitle">アクション: {{ said.action.action }}<br>エモーション: {{ said.emotion.emotion }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
    export default {
        name: 'said',
        props: ['said'],
        computed: {
            time: function () {
                let datetime = this.said.datetime.slice(0, 19).replace("T", " ")
                return datetime
            }
        }
    }
</script>
