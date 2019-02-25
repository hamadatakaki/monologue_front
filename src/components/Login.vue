<template>
    <div>
        <div v-if="isLogined">
            <h1>すでにLoginしています</h1>
            <a href="/">Timelineに戻る</a>
        </div>
        <div v-else>
            <h1>Log in</h1>
            <form>
                <label>account name:<input type="text" v-model="accountName"></label><br>
                <label>password:<input type="password" v-model="password"></label><br>

                <input type="button" @click="login">
            </form>
            <div class="list">
                {{ message }}
            </div>
            <a href="#/registration/">登録ページへ</a>
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
                isLogined: controller.isLogined(),
                accountName: "",
                password: "",
                message: "ログインしてください"
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
