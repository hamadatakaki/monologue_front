<template>
    <div>
        <form>
            <label>本文
                <textarea v-model="text" :rows="rows">
                </textarea>
            </label>
            <label>アクション
                <select name="action" v-model="action">
                    <option v-for="act in actions" :value="act">{{act}}</option>
                </select>
            </label>
            <label>エモーション
                <select name="emotion" v-model="emotion">
                    <option v-for="emo in emotions" :value="emo">{{emo}}</option>
                </select>
            </label>
            <input type="submit" @click="say">
        </form>
    </div>
</template>

<script>
    import controller from "./js/controller";

    let tokenHeader = { 'Authorization': "Token "+localStorage.getItem('token') }

    export default {
        name: 'Say',
        data: function () {
            return {
                text: "",
                actions: [],
                action: "",
                emotions: [],
                emotion: "",
                res: null
            }
        },
        computed: {
            rows: function () {
                return this.text.split("\n").length + 3
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
                    .then(res => this.res = res)
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

