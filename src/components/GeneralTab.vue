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
