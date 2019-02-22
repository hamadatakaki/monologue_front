<template>
    <div>
        <h1>Sign in</h1>
        <form>
            <label>user name:<input type="text" v-model="userName"></label><br>
            <label>password:<input type="text" v-model="password"></label><br>

            <input type="button" @click="login">
        </form>
        <div class="list">
            {{ is_logined }}<br>
            {{ res }}
        </div>
        <a href="#/">to timeline</a>
    </div>
</template>
<style lang="scss" src="./scss/signin.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        data() {
            return {
                userName: "",
                password: "",
                is_logined: controller.is_logined(),
                res: null
            };
        },
        methods: {
            login() {
                let param = {}
                param.username = this.userName
                param.password = this.password

                controller.axios
                    .post("auth/login/", param)
                    .then(res => {
                        this.res = res
                        localStorage.token = res.data.key
                    })

                // TODO searching how to redirect to timeline.
            }
        }
    }
</script>
