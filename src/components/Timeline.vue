<template src="./html/timeline.html"></template>
<style lang="scss" src="./scss/timeline.scss"></style>
<script>
    import controller from './js/controller'
    import Said from './Said'

    export default {
        name: 'timeline',
        data: function () {
            return {
                saids: null,
            }
        },
        components: {
            Said
        },
        created: function() {
            let tokenHeader = {
                'Authorization': "Token " + localStorage.token
            };
            controller.axios
                .get('timeline/', { headers: tokenHeader })
                .then(response => {
                    this.saids = response.data;
                })
        }
    }
</script>
