<template>
    <div>
        <h1>{{ screen_name }}<span>@{{ accountID }}</span></h1>
        <p>{{ bio }}</p>
        <div v-for="said in saids">
            <said :said="said"></said>
        </div>
    </div>
</template>
<style lang="scss" src="./scss/profile.scss"></style>
<script>
    import controller from "./js/controller";
    import Said from './Said';

    export default {
        name: "profile",
        data: function () {
            return {
                screen_name: "",
                accountID: "",
                bio: "",
                saids: null,
            }
        },
        components: { Said },
        props: ['account'],
        watch: {
            account: {
                handler: function(newer, older) {
                    let tokenHeader = { 'Authorization': "Token "+localStorage.getItem('token') }
                    controller.axios
                        .get('accounts/info/'+localStorage.getItem('accountName')+'/', { headers: tokenHeader })
                        .then(res => {
                            this.screen_name = res.data.screen_name
                            this.accountID = res.data.username
                            this.bio = res.data.bio
                            this.saids = res.data.saids.reverse()
                        })
                }, immediate: true
            }
        }
    }
</script>
