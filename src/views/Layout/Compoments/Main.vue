<template>
    <div id="main-wrap">
        <router-view />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "../../../style/config.scss";
#main-wrap{
    position: fixed;
    top: 75px;
    left: $navMenu;
    right: 0;
    bottom: 0;
    border: 30px solid #f7f7f7;
    border-bottom: none;
    // padding: 75px 0 0 250px;
}
</style>