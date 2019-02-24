<template>
    <div>
        <div v-if="is_logouted">
            <h1>Log in</h1>
            <form>
                <label>account name:<input type="text" v-model="accountName"></label><br>
                <label>password:<input type="password" v-model="password"></label><br>

                <input type="button" @click="login">
            </form>
            <div class="list">
                {{ message }}
            </div>
        </div>
        <div v-else>
            <h1>すでにLoginしています</h1>
            <a href="/">Timelineに戻る</a>
        </div>
    </div>
</template>
<style lang="scss" src="./scss/login.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        name: 'login',
        data() {
            return {
                accountName: "",
                password: "",
                message: "ログインしてください",
                is_logouted: !controller.is_logined()
            };
        },
        methods: {
            login() {
                let param = {}
                param.username = this.accountName
                param.password = this.password

                controller.axios
                    .post("auth/login/", param)
                    .then(res => {
                        localStorage.token = res.data.key
                        this.$router.push({ "name": "timeline" })
                    }).catch(() => this.message = "アカウントID、もしくはパスワードが違います")
            }
        }
    }
</script>
