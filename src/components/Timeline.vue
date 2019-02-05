<template src="./html/timeline.html"></template>
<style lang="scss" src="./scss/timeline.scss"></style>
<script>
    import axios from 'axios'

    let ep = process.env.ENDPOINT

    export default {
        name: 'timeline',
        data () {
            return {
                endpoint: process.env.ENDPOINT,
                res: "hoe"
            }
        },
        methods: {

        },
        created: function() {
            axios
                .get(ep+"saids")
                .then(response => this.res = response["data"])
        }
    }
</script>
