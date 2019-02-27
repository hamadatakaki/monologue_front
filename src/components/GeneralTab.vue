<template>
    <div>
        <header>
            <ul>
                <li><router-link :to="{ name: 'timeline' }">Timeline</router-link></li>
                <li v-if="!!accountID">
                    <router-link :to="{ name: 'profile', params: { uuid: accountID } }">Profile</router-link>
                </li>
            </ul>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'GeneralTab',
        computed: {
            accountID: function () {
                if (localStorage.accountName === null) {
                    console.log(localStorage.accountName)
                    return false
                } else {
                    return localStorage.accountName
                }
            }
        }
    }
</script>
