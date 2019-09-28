<template>
    <div class="sidebar">
        <img src="@/assets/logo.png" class="logo">
        <div class="links">
            <router-link to="/clients" class="link">
                <font-awesome-icon :icon="['fa', 'users']" />
                Clients
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        width: 200px;
        background-color: #000;
        padding: 20px 10px;
        .logo {
            display: block;
            width: 80%;
            margin: 0 auto;
        }
        .links {
            margin-top: 30px;
            .link {
                text-decoration: none;
                color: #fff;
                display: block;
                height: 40px;
                line-height: 40px;
                cursor: pointer;
            }
        }
    }
</style>