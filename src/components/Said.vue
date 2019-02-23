<template>
    <div class="said">
        <h3>
            <a :href="'#/profile/'+said.account.uuid+'/'">
                {{ said.account.username }}
            </a>
        </h3>
        <p>{{ said.datetime }}</p>
        <p>{{ said.text }}</p>
    </div>
</template>
<style lang="scss" src="./scss/said.scss"></style>
<script>
    import controller from './js/controller'

    export default {
        name: 'said',
        data: function() {
            return {

            }
        },
        props: ['said'],
        created () {

        }
    }
</script>
