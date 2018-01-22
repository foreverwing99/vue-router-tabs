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
        component:{
        },
        data() {
            return {

            }
        },
        methods: {
            toBpage(){
              /*  console.log(this.editableTabs2,'editableTabs2');
                console.log(this.tabIndex,'tabIndex');
                console.log(this.editableTabsValue2,'editableTabsValue2');

                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: 'page a',
                    name: newTabName,
                    path:'/b'
                });
                this.editableTabsValue2 = newTabName;
                this.$router.push('/b');*/
            },
            onSubmit(){
                console.log('haha');
                console.log(item.path,'item');
                this.$router.push('/a');
            },
            /*addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content',
                    path:'http://'
                });
                this.editableTabsValue2 = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            }*/
        }
    }
</script>

