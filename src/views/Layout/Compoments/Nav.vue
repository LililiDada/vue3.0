<template>
    <div id="nav-warp">
        菜单
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "../../../style/config.scss";
#nav-warp{
    position: fixed;
    top: 0;
    left: 0;
    width: $navMenu;
    height: 100vh;
    background-color: #344a5f;
}
</style>