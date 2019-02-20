<template src="./html/timeline.html"></template>
<style lang="scss" src="./scss/timeline.scss"></style>
<script>
    import controller from './js/controller'

    export default {
        name: 'timeline',
        data: function () {
            return {
                saids: null,
            }
        },
        methods: {

        },
        created: function() {
            let tokenHeader = {
                'Authorization': "Token " + localStorage.token
            };
            controller.axios
                .get('saids/', { headers: tokenHeader })
                .then(response => {
                    this.saids = response.data;
                })
        }
    }
</script>
