<template>
    <div>
        <div v-if="isLogined">
            <h1 class="panel-heading">すでにLoginしています</h1>
            <router-link :to="{ name: 'timeline' }">Timelineへ</router-link>
        </div>
        <div v-else>
            <h1 class="panel-heading">Registration</h1>
            <form>
                <label>account ID:<input type="text" v-model="accountName"></label><br>
                <label>email:<input type="text" v-model="email"></label><br>
                <label>password:<input type="password" v-model="password1"></label><br>
                <label>password(confirm):<input type="password" v-model="password2"></label><br>

                <input type="button" @click="registration">
            </form>
            <div class="message">
                {{ message }}
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./scss/registration.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        name: 'registration',
        data: function () {
            return {
                isLogined: localStorage.getItem('token') || "",
                accountName: "",
                email: "",
                password1: "",
                password2: "",
                message: "登録してください",
            }
        },
        methods: {
            registration: function () {
                let params = {}
                params.username = this.accountName
                params.email = this.email
                params.password1 = this.password1
                params.password2 = this.password2

                controller.axios
                    .post("auth/registration/", params)
                    .then(response => {
                        localStorage.token = response.data.key
                        localStorage.accountName = params.username
                        this.$router.push({ "name": "timeline" })
                    })
                    .catch(() => this.message = "data is invalid")
            }
        }
    }
</script>

