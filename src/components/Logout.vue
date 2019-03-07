<template>
    <div>
        <h1>log out</h1>
        <form>
            <input type="button" @click="logout">
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
