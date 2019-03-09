<template>
    <div>
        <header>
            <ul>
                <li><router-link :to="{ name: 'timeline' }">Timeline</router-link></li>
                <li v-if="isLogined">
                    <router-link :to="{ name: 'profile', params: { account: accountName } }">Profile</router-link>
                </li>
                <li v-if="isLogined">
                    <router-link :to="{ name: 'say' }">Say</router-link>
                </li>
                <li v-if="isLogined">
                    <router-link :to="{ name: 'logout' }">Logout</router-link>
                </li>
            </ul>
        </header>
        <router-view></router-view>
        <footer>
            <p>
                何かバグがあればTwitterで<a href="https://twitter.com/hmd03230101">@hmd03230101</a>までメッセージをください<br>
                コンフェス中でも直します
            </p>
            <p>
                ソースコードはだいたいGitHubにあります<br>
                <a href="https://github.com/hamadatakaki/monologue_server">バックエンド</a>はこれ<br>
                <a href="https://github.com/hamadatakaki/monologue_front">フロントエンド</a>はこれ
            </p>
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
                accountName: localStorage.getItem('accountName') || ''
            }
        },
        created: function(){
            this.accountName = localStorage.getItem('accountName') || ''
        },
        watch: {
            '$route': function() {
                this.isLogined = localStorage.getItem('token') || ''
                this.accountName = localStorage.getItem('accountName') || ''
            }
        }
    }
</script>
