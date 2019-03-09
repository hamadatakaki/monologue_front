<template>
    <div>
        <h1>Profile Edit</h1>
        <form>
            <label>account name:<input type="text" v-model="screen_name"></label><br>
            <label>bio:<textarea v-model="bio"></textarea></label><br>
            <input type="button" @click="edit">
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
