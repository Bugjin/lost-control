<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header style="display:flex" :style="{Height: '7vh'}">
                
               
                <div class="layout-nav">
                    <portraits></portraits> 
                </div>
            </Header>
            <!-- 头部 end -->
            <!-- body start -->
            <Layout id="layout" :style="{minHeight: '93vh'}">


                <Sider  :style="{background: '#fff',maxHeight: '92vh'}"
                collapsible :collapsed-width="78"
                 v-model="isCollapsed" >
                            <Menu active-name="1-2" theme="light" width="auto" :class="menuitemClasses">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        Item 1
                                    </template>
                                    <MenuItem name="1-1"><router-link to="/user/cloud">demo2</router-link>星云</MenuItem>
                                    <MenuItem name="1-2">Option 2</MenuItem>
                                    <MenuItem name="1-3">Option 3</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Item 2
                                    </template>
                                    <MenuItem name="2-1">Option 1</MenuItem>
                                    <MenuItem name="2-2">Option 2</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                                <MenuItem name="1-3">
                                <Icon type="settings"></Icon>
                                <span>Option 3</span>
                                </MenuItem>
                            </Menu>
                            
                </Sider>

<!-- <Sider   ">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="search"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="settings"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
            </Sider> -->



                <!-- content strat -->
                <Layout :style="{padding: '0 24px 24px',maxHeight: '92vh'}">
                    <!-- <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb> -->
                    <Content :style="{padding: '24px', minHeight: '280px', marginTop:'24px',background: '#fff'}">
                        
                        <router-view :style="{padding: '24px', minHeight: '280px', marginTop:'24px',background: '#fff'}"></router-view>
                        
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
    
  
  </div>
</template>
<script>
import Carousel from '@/components/Carousel'
import {mapState,mapComputed} from "vuex";
import Portraits from '@/components/Portraits'
   export default {
        data () {
            return {
                isCollapsed: false,
                
            };
        },
        components:{
          Portraits
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>


<style >


  html,body,#app{
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #564e58;
    background:#f2f4f6;
    height: 100%;
    width: 100%;
    background-color: #eef7f2;
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #26b3cc;
  position: relative;
}

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.content{
     position: absolute;
    /* z-index: 2; */
    top: 25px;
    left: 25%;
    width: 50%;
    text-align: center;
    pointer-events: none;
}
 .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

</style>
<script>