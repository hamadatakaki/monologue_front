<template>
    <div>
        <h1 class="panel-heading">投稿する</h1>
        <form class="control">
            <label>本文
                <textarea class="textarea" v-model="text" :rows="rows"></textarea>
            </label>
            <label>アクション
                <vue-simple-suggest v-model="action" :list="suggestAction" :filter-by-query="true"></vue-simple-suggest>
            </label>
            <label>エモーション
                <vue-simple-suggest v-model="emotion" :list="suggestEmotion" :filter-by-query="true"></vue-simple-suggest>
            </label>
            <router-link :to="{ name: 'timeline' }">
                <br>
                <input class="button is-primary" type="submit" :disabled="isPushed" @click="say">
                <br>
            </router-link>
        </form>
    </div>
</template>

<script>
    import controller from "./js/controller"
    import VueSimpleSuggest from 'vue-simple-suggest'
    import 'vue-simple-suggest/dist/styles.css'

    let tokenHeader = { 'Authorization': "Token "+localStorage.getItem('token') }

    export default {
        name: 'Say',
        components: { VueSimpleSuggest },
        data: function () {
            return {
                text: "",
                actions: [],
                action: "",
                emotions: [],
                emotion: "",
                disabled: "disabled"
            }
        },
        computed: {
            rows: function () {
                return this.text.split("\n").length + 3
            },
            isPushed: function () {
                return this.text === ""
            }
        },
        methods: {
            say: function() {
                let params = {}
                params.text = this.text
                params.action = this.action
                params.emotion = this.emotion

                controller.axios
                    .post('say/', params, { headers: tokenHeader })
                    .then(() => this.$router.go({ "name": "timeline" }))
            },
            suggestAction: function () {
                return this.actions
            },
            suggestEmotion: function () {
                return this.emotions
            }
        },
        watch: {
            $route: {
                handler: function(newer, older) {
                    controller.axios
                        .get('actions/', { headers: tokenHeader })
                        .then(res => res.data.map(data => {
                            this.actions.push(data.action)
                            this.action = this.actions[0]
                        }))
                    controller.axios
                        .get('emotions/', { headers: tokenHeader })
                        .then(res => res.data.map(data => {
                            this.emotions.push(data.emotion)
                            this.emotion = this.emotions[0]
                        }))
                }, immediate: true
            }
        }
    }
</script>

