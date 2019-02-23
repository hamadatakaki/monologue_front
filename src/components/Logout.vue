<template>
    <div>
        <h1>log out</h1>
        <form>
            <input type="button" @click="logout">
        </form>
        <a href="#/login/">to login</a>
    </div>
</template>
<style lang="scss" src="./scss/logout.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        name: "logout",
        data() {
            return {
                userName: ""
            };
        },
        methods: {
            logout() {
                localStorage.token = "";

                this.$router.push({ "name": "login" })
            }
        }
    }
</script>
