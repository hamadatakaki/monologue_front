<template>
    <div>
        <h1 class="panel-heading">Timeline</h1>
        <div id="user-saids">
            <div v-for="said in saids">
                <said :said="said"></said>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    #user-saids {
        border-right: 400px;
        border-left: 400px;
    }
</style>
<script>
    import controller from './js/controller'
    import Said from './Said'

    export default {
        name: 'timeline',
        data: function () {
            return {
                saids: null
            }
        },
        components: { Said },
        created: function () {
            let tokenHeader = { 'Authorization': "Token " + localStorage.token };
            controller.axios
                .get('timeline/', { headers: tokenHeader })
                .then(response => {
                    this.saids = response.data;
                })
                .catch(badStatus => {
                    let res = badStatus.response
                    if (res.status === 403 || res.statusText === "Forbidden") {
                        localStorage.token = ""
                    }
                    this.$router.push({ "name": "login" })
                })
        }
    }
</script>
