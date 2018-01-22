<template>
    <div>
        hahas,我是a页面
        <el-button type="success" @click="toBpage">成功按钮</el-button>
    </div>
</template>

<script>
    import ElementUI from 'element-ui'
    Vue.use(ElementUI)
    import Vue from 'vue'
    import ElButton from 'element-ui'
    Vue.use(ElButton)

    export default {
        props:{
            selectTab:String,
            tabsValue:Array,
            tabsIndex:Number
        },
        component:{
        },
        data() {
            return {

            }
        },
        methods: {
            toBpage(){
/*

            :select-tab="editableTabsValue2"
            :tabs-value="editableTabs2"
            :tabs-index="tabIndex"
*/

                var seltab = this.selectTab; //String
                var Index = this.tabsIndex; //Number
                var newTabName =  ++Index + '';
                var tabs = this.tabsValue.concat({
                    title: 'page c',
                    name: newTabName,
                    path:'/c'
                });
                seltab = newTabName + '';
                console.log(seltab,'seltab');
                console.log(tabs,'tabs');
                console.log(Index,'Index');
                /*console.log(typeof seltab,'seltab');
                console.log(typeof Index,'Index');*/

                this.$emit('updateTabs',seltab,tabs,Index);
                // this.$emit('updateTabs',2,tabs,'2');
                // this.$emit('updateTabs',Index,tabs,seltab);
                this.$router.push('/c');

            },
            onSubmit(){
                console.log('haha');
                console.log(item.path,'item');
                this.$router.push('/a');
            }
        }
    }
</script>

