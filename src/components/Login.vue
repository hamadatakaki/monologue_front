<template>
    <div>
        <div v-if="isLogined">
            <h1>すでにLoginしています</h1>
            <router-link :to="{ name: 'timeline' }">Timelineへ</router-link>
        </div>
        <div v-else>
            <h1>Log in</h1>
            <form>
                <label>account ID:<input type="text" v-model="accountName"></label><br>
                <label>password:<input type="password" v-model="password"></label><br>
                <input type="button" @click="login">
            </form>
            <div class="list">
                {{ message }}
            </div>
            <router-link :to="{ name: 'registration' }">アカウント登録へ</router-link>
        </div>
    </div>
</template>
<style lang="scss" src="./scss/login.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        name: 'login',
        data: function () {
            return {
                isLogined: localStorage.getItem('token') || "",
                accountName: "",
                password: "",
                message: "ログインしてください"
            };
        },
        methods: {
            login() {
                let params = {}
                params.username = this.accountName
                params.password = this.password

                controller.axios
                    .post("auth/login/", params)
                    .then(res => {
                        localStorage.token = res.data.key
                        localStorage.accountName = params.username
                        this.$router.push({ "name": "timeline" })
                    }).catch(() => this.message = "アカウントID、もしくはパスワードが違います")
            }
        }
    }
</script>
