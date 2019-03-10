<template>
    <div>
        <h1 class="panel-heading">{{ screen_name }}<span>@{{ accountID }}</span></h1>
        <article class="message">
            <div class="message-body is-white">
                <p>{{ bio }}</p>
            </div>
        </article>
        <div v-if="isNotMe">
            <input class="button is-primary" type="button" value="unfollow" v-if="alreadyFollow" @click="unfollow">
            <input class="button is-primary" type="button" value="follow" v-if="!alreadyFollow" @click="follow">
        </div>
        <div v-else>
            <router-link :to="{ name: 'edit-profile' }"><button class="button is-primary">プロフィールを編集する</button></router-link>
        </div>

        <div v-for="said in saids">
            <said :said="said"></said>
        </div>
    </div>
</template>
<style lang="scss" src="./scss/profile.scss"></style>
<script>
    import controller from "./js/controller";
    import Said from './Said';

    let tokenHeader = { 'Authorization': "Token "+localStorage.getItem('token') }

    export default {
        name: "profile",
        data: function () {
            return {
                screen_name: "",
                accountID: "",
                bio: "",
                saids: null,
                followers: []
            }
        },
        computed: {
            alreadyFollow: function () {
                let me = localStorage.getItem('accountName')
                return this.followers.find(follower => follower === me)
            },
            isNotMe: function () {
                let me = localStorage.getItem('accountName')
                return this.$route.params.account !== me
            }
        },
        methods: {
            follow: function () {
                let params = {}
                params.accountID = this.$route.params.account
                controller.axios
                    .post('follow/', params, { headers: tokenHeader })
                    .then(() => this.$router.go({
                        name: "profile",
                        params: { account: params.accountID }
                    }))
            },
            unfollow: function () {
                let params = {}
                params.accountID = this.$route.params.account
                controller.axios
                    .post('unfollow/', params, { headers: tokenHeader })
                    .then(() => this.$router.go({
                        name: "profile",
                        params: { account: params.accountID }
                    }))
            }
        },
        components: { Said },
        props: ['account'],
        watch: {
            $route: {
                handler: function(newer, older) {
                    let tokenHeader = { 'Authorization': "Token "+localStorage.getItem('token') }
                    controller.axios
                        .get('accounts/'+this.$route.params.account+'/info/', { headers: tokenHeader })
                        .then(res => {
                            this.screen_name = res.data.screen_name
                            this.accountID = res.data.username
                            this.bio = res.data.bio
                            this.saids = res.data.saids.reverse()
                        })
                    controller.axios
                        .get('accounts/'+this.$route.params.account+"/followers/", { headers: tokenHeader })
                        .then(res => {
                            let tmp = res.data.followers
                            tmp.map(fo => this.followers.push(fo.username))
                        })
                }, immediate: true
            }
        }
    }
</script>
