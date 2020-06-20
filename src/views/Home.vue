<template>
    <div id="app">
        <div class="layout">
            <Layout :style="{minHeight: '100vh' }" >  
                <!-- head start -->
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',height:'8vh'}" class="head">
                    <div style="margin:25px 500px 0 -50px">
                        <img src="../assets/image/logo.png" alt="Bugjin"  height="50">
                    </div>
                    
                    <div class="search">
                    <Input search placeholder="Enter something..." />
        
                    </div>
                    <div class="demo-avatar" >
                        <!-- <Avatar >USER</Avatar> -->
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size='medium'></Avatar>
                        <a href="">张三</a>
                    </div>
                </Header>
                <!-- head end -->
                <Layout style="height:90vh">
                <!-- sider start -->
                <Sider collapsible :collapsed-width="50" v-model="isCollapsed" width='140' class="aside" style="background:#eeeeee" >
                    <Menu  width="auto" :class="menuitemClasses" id="menu" style="background:#eeeeee">
                        
                        <MenuItem name="1-1" >
                        <router-link to="carousel">
                            <Icon type="ios-home" color=#2f90b9aa />
                            <span>主页</span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="1-2">
                            <router-link to="carousel">
                                <Icon type="ios-images" color=#2f90b9bb />
                                <span> 图片</span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="1-3">
                        <router-link to="carousel">
                            <Icon type="ios-nutrition" color=#2f90b9cc />
                            <span>萝贝</span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="1-4">
                        <router-link to="carousel">
                            <Icon type="ios-code" color=#2f90b9ff />
                            <span>code</span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="1-5">
                        <router-link to="carousel">
                            <Icon type="ios-musical-notes" color=#2f90b9cc />
                            <span>音乐</span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="1-6">
                        <router-link to="carousel">
                            <Icon type="ios-book" color=#2f90b9aa />
                            <span>文章</span>
                            </router-link>
                        </MenuItem>
                        <MenuItem name="1-7">
                        <router-link to="carousel">
                            <Icon type="ios-color-palette" color=#2f90b9aa />
                            <span>色彩</span>
                         </router-link>   
                        </MenuItem>
                        <MenuItem name="1-8">
                       <router-link to="cloud">
                               <Icon type="md-planet" color=#2f90b9bb />
                               <span>星空</span>
                        </router-link>
                        </MenuItem>
                        <MenuItem name="1-9">
                        <router-link to="cloud">
                            <Icon type="md-game-controller-b" color=#2f90b9aa />
                            <span>Option 1</span>
                        </router-link>   
                        </MenuItem>
                        
                    </Menu>
                </Sider>
                <!-- sider end -->
                <Content :style="{padding:'0 16px',height:'90vh'}">
                    <Breadcrumb :style="{padding:'5px',height:'5vh'}" >
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div :style="{height: '80vh',width:'20vw'}">
                            <router-view></router-view>
                        </div>
                    </Card>
                </Content>
                </Layout>
            </Layout>
        </div>
        <div v-if="!isuser">
            
        </div>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: true,
                isuser:true
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu menuitemClasses' : ''
                ]
            }
        }
    }
</script>
<style>
.head{
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content:space-between;
    align-items:center
}
.head,.aside{
    z-index:1;
}

.search{
    width: 25vw;
}
/* #menu{padding: 14px;} */
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 60px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
        
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 20px;
        padding: 0;
        margin-left: 20px;
        margin-right: 10px;
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
        padding: 0;
        margin: auto;
    }
    .demo-avatar{
        margin-right:30px;
        float: right; 
    }
</style>