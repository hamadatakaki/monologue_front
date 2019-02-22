<template>
    <div>
        <h1>Sign out</h1>
        <form>
            <input type="button" @click="logout">
        </form>
        <a href="#/signin/">to signin</a>
    </div>
</template>
<style lang="scss" src="./scss/signin.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        data() {
            return {
                userName: ""
            };
        },
        methods: {
            logout() {
                localStorage.token = ""
            }
        }
    }
</script>
