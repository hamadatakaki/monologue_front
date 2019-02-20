<template src="./html/signin.html"></template>
<style lang="scss" src="./scss/signin.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        data() {
            return {
                userName: "",
                email: "",
                password: "",
                res: null
            };
        } ,
        methods : {
            login() {
                let param = {}
                param.username = this.userName
                param.email = this.email
                param.password = this.password

                controller.axios
                    .post("auth/login/", param)
                    .then(res => localStorage.token = res.data.key)
                    .finally(() => {
                        this.res = localStorage.token;
                    })

                // TODO searching how to redirect to timeline.
            }
        }
    }
</script>
