<template>
    <div id="layout">
        <LayoutHeader />
        <LayoutMain />
        <LayoutNav />
    </div>
</template>

<script>
    import LayoutHeader from './Compoments/Header'
    import LayoutNav from './Compoments/Nav'
    import LayoutMain from './Compoments/Main'
    export default {
        name:'layout',
        components:{
            LayoutHeader,
            LayoutNav,
            LayoutMain
        },
        setup(){

        }
    }
</script>

<style lang="scss" scoped>
#layout{
    background-color: #f7f7f7;
}
</style>