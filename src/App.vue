<template>
  <div id="app">
    <div style="margin-bottom: 20px;">
      <el-button @click="addTab(editableTabsValue2)">add tab</el-button>
    </div>
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" @tab-click="handleClick">
      <el-tab-pane
              v-for="(item, index) in editableTabs2"
              :key="item.name"
              :label="item.title"
              :name="item.name">
          <template>
              <router-view
                      v-on:updateTabs="handleUpdateTabs"
                      :select-tab="editableTabsValue2"
                      :tabs-value="editableTabs2"
                      :tabs-index="tabIndex"
              ></router-view>
          </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/javascript">

    export default {
    data() {
        return {
            editableTabsValue2: '0',
            editableTabs2: [{
                title: 'Tab 1',
                name: '0',
                path:'/a'
            }, {
                title: 'Tab 2',
                name: '1',
                path:'/b'
            }],
            tabIndex: 1
        }
    },
    methods: {
        handleUpdateTabs(editableTabsValue2,editableTabs2,tabIndex){
            console.log('----');
            this.editableTabsValue2 = editableTabsValue2;
            this.editableTabs2 = editableTabs2;
            this.tabIndex = tabIndex;
        },
        handleClick(tab) {

            console.log(this.editableTabs2);
            console.log(tab.$options.propsData.name,'tab');

            this.$router.push(this.editableTabs2[tab.$options.propsData.name].path);
        },
        addTab(targetName) {
            let newTabName = ++this.tabIndex;
            this.editableTabs2.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content',
                path:'/c'
            });
            this.editableTabsValue2 = newTabName;

        },
        removeTab(targetName) {/*
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
            this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);*/
            console.log(targetName,'targetName');
            this.$router.push('/a');
        }
        }
}
</script>


