<template>
    <div>
        <h1 class="panel-heading">Profile Edit</h1>
        <form class="control">
            <label>account name:<input class="input" type="text" v-model="screen_name"></label><br>
            <label>bio:<textarea class="textarea" v-model="bio"></textarea></label><br>
            <button class="button is-primary" @click="edit">変更する</button>
        </form>
    </div>
</template>

<script>
    import controller from "./js/controller";

    export default {
        name: 'edit-profile',
        data: function () {
            return {
                screen_name: "",
                bio: ""
            }
        },
        methods: {
            edit() {
                let tokenHeader = { 'Authorization': "Token " + localStorage.token };
                let params = {}
                params.screen_name = this.screen_name
                params.bio = this.bio

                controller.axios
                    .post('accounts/'+this.$route.params.account+'/followers/', params, { headers: tokenHeader })
                    .then(res => {
                        console.log(res)
                        this.$router.push({ name: "timeline" })

                    })
            }
        },
        watch: {
            $route: {
                handler: function(newer, older) {
                    let tokenHeader = { 'Authorization': "Token "+localStorage.getItem('token') }
                    controller.axios
                        .get('accounts/'+this.$route.params.account+'/info/', { headers: tokenHeader })
                        .then(res => {
                            this.screen_name = res.data.screen_name
                            this.bio = res.data.bio
                        })
                }, immediate: true
            }
        }
    }
</script>
