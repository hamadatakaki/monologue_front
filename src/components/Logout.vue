<template>
    <div>
        <h1 class="panel-heading">log out</h1>
        <form>
            <br>
            <input class="button is-primary" value="ログアウト" name="ログアウト" type="button" @click="logout">
        </form>
    </div>
</template>
<style lang="scss" src="./scss/logout.scss"></style>
<script>
    export default {
        name: "logout",
        data() {
            return {
                accountName: ""
            };
        },
        methods: {
            logout() {
                localStorage.token = "";
                localStorage.accountName = "";
                this.$router.push({ "name": "login" })
            }
        }
    }
</script>
