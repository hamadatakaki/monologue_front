<template>
    <div>
        <p>your id: {{ uuid }}</p>
    </div>
</template>
<style lang="scss" src="./scss/profile.scss"></style>
<script>
    import controller from "./js/controller";

    export default {
        data() {
            return {
                res: null
            };
        },
        props: ['uuid']
    } // TODO GO FOR IT!
</script>
