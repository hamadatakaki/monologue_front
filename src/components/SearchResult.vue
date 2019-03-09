<template>
    <div>
        <h1 class="panel-heading">Searching result page: {{ $route.params.query }}</h1>
        <div id="user-saids">
            <div v-for="said in saids">
                <said :said="said"></said>
            </div>
        </div>
        <p v-if="saidsIsEmpty">1件もヒットしませんでした</p>
    </div>
</template>

<script>
    import controller from './js/controller'
    import Said from './Said'

    export default {
        name: 'search-result',
        data: function () {
            return {
                saids: null
            }
        },
        computed: {
            saidsIsEmpty: function () {
                return !this.saids.length
            }
        },
        components: { Said },
        watch: {
            $route: {
                handler: function(newer, older) {
                    let tokenHeader = { 'Authorization': "Token "+localStorage.getItem('token') }
                    controller.axios
                        .get('saids/?text='+this.$route.params.query, { headers: tokenHeader })
                        .then(res => this.saids = res.data)
                }, immediate: true
            }
        }
    }
</script>
