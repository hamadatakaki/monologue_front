<template>
    <div>
        <h1>{{ screen_name }}<span>@{{ accountID }}</span></h1>
        <p>{{ bio }}</p>
        <p>current action: {{ action }}</p>
        <p>current emotion: {{ emotion }}</p>
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
        data: function () {
            return {
                res: null,
                screen_name: "",
                accountID: "",
                bio: "",
                saids: null,
                action: null,
                emotion: ""
            }
        },
        components: { Said },
        props: ['uuid'],
        watch: {
            uuid: {
                handler: function(newer, older) {
                    let tokenHeader = { 'Authorization': "Token "+localStorage.token }
                    controller.axios
                        .get('accounts/'+newer, { headers: tokenHeader })
                        .then(response => {
                            let datas = response.data
                            this.res = datas
                            this.screen_name = datas.screen_name
                            this.accountID = datas.username
                            this.bio = datas.bio
                            this.saids = datas.saids.reverse()
                            this.action = datas.action.action
                            this.emotion = datas.emotion.emotion
                        })
                        .catch(badstatus => {
                            let res = badstatus.response
                            if (res.status === 403 || res.statusText === "Forbidden") {
                                localStorage.token = ""
                            }

                            this.$router.push({ "name": "login" })
                        })
                }, immediate: true
            }
        }
    }
</script>
