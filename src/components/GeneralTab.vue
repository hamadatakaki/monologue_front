<template>
    <div>
        <header>
            <ul>
                <li><router-link :to="{ name: 'timeline' }">Timeline</router-link></li>
                <li v-if="isLogined">
                    <router-link :to="{ name: 'profile', params: { uuid: uuid } }">Profile</router-link>
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
                uuid: "",
                isLogined: controller.isLogined()
            }
        },
        created: function () {
            let tokenHeader = { 'Authorization': "Token "+localStorage.token }
            controller.axios
                .get('accounts/'+this.accountID+'/uuid/', { headers: tokenHeader })
                .then(response => this.uuid = response.data.uuid)
        },
        watch: {
            '$route': function() {
                this.isLogined = controller.isLogined()
            }
        }
    }
</script>
