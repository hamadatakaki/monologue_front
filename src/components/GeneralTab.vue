<template>
    <div>
        <nav class="navbar has-shadow" v-if="isLogined">
            <div class="container">
                <div class="navbar-brand" >
                    <label><input class="navbar-item" type="text" v-model="searchQuery"/></label>
                    <label><button class="navbar-item" type='submit' @click="search">検索</button></label>

                    <!--<a class="navbar-item" href="../"><img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"/></a>-->
                    <div class="navbar-burger burger" data-target="navMenu"><span></span><span></span><span></span></div>
                </div>
                <div class="navbar-menu" id="navMenu">
                    <div class="navbar-end" v-if="isLogined">
                        <router-link class="navbar-item" :to="{ name: 'say' }">Say</router-link>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">{{ accountName }}</a>
                            <div class="navbar-dropdown">
                                <router-link class="navbar-item" :to="{ name: 'timeline' }">Timeline</router-link>
                                <router-link class="navbar-item" :to="{ name: 'profile', params: { account: accountName } }">Profile</router-link>
                                <hr class="navbar-divider" />
                                <router-link :to="{ name: 'logout' }">Logout</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <router-view></router-view>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    何かバグがあればTwitterで<a href="https://twitter.com/hmd03230101">@hmd03230101</a>までメッセージをください<br>
                    コンフェス中でも直します
                </p>
                <p>
                    ソースコードはだいたいGitHubにあります<br>
                    <a href="https://github.com/hamadatakaki/monologue_server">バックエンド</a>はこれ<br>
                    <a href="https://github.com/hamadatakaki/monologue_front">フロントエンド</a>はこれ
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    import controller from './js/controller'

    export default {
        name: 'GeneralTab',
        data: function() {
            return {
                isLogined: localStorage.getItem('token') || '',
                accountName: localStorage.getItem('accountName') || '',
                searchQuery: ""
            }
        },
        created: function(){
            this.accountName = localStorage.getItem('accountName') || ''
        },
        methods: {
            search: function () {
                if(this.searchQuery){
                    let query = this.searchQuery
                    this.$router.push({ name: 'search-result', params: { query: query } })
                }
            }
        },
        watch: {
            '$route': function() {
                this.searchQuery = ""
                this.isLogined = localStorage.getItem('token') || ''
                this.accountName = localStorage.getItem('accountName') || ''
            }
        }
    }
</script>

<style scoped></style>
