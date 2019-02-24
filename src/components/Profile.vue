<template>
    <div>
        <p>your id: {{ uuid }}</p>
        <div>
            {{ res }}
        </div>
    </div>
</template>
<style lang="scss" src="./scss/profile.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        data: function () {
            return {
                res: {}
            }
        },
        props: ['uuid'],
        watch: {
            uuid: {
                handler: function(newer, older) {
                    let tokenHeader = { 'Authorization': "Token "+localStorage.token }
                    controller.axios
                        .get('accounts/'+newer, { headers: tokenHeader })
                        .then(response => {
                            this.res = response
                            console.log(response)
                        })

                }, immediate: true
            }
        }
    } // TODO GO FOR IT!
</script>
