
var projectName = '校园疫情防控系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '疫情动态',
	url: './pages/yiqingdongtai/list.html'
}, 
{
	name: '知识信息',
	url: './pages/zhishixinxi/list.html'
}, 
{
	name: '防疫教育',
	url: './pages/fangyijiaoyu/list.html'
}, 

{
	name: '交流论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '疫情公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbootm94q1/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除","查看评论"],"menu":"疫情动态","menuJump":"列表","tableName":"yiqingdongtai"}],"menu":"疫情动态管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"知识信息","menuJump":"列表","tableName":"zhishixinxi"}],"menu":"知识信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","查看评论"],"menu":"防疫教育","menuJump":"列表","tableName":"fangyijiaoyu"}],"menu":"防疫教育管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除","报表"],"menu":"健康打卡","menuJump":"列表","tableName":"jiankangdaka"}],"menu":"健康打卡管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除","审核"],"menu":"请假申请","menuJump":"列表","tableName":"qingjiashenqing"}],"menu":"请假申请管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"出校登记","menuJump":"列表","tableName":"chuxiaodengji"}],"menu":"出校登记管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"入校登记","menuJump":"列表","tableName":"ruxiaodengji"}],"menu":"入校登记管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看","删除"],"menu":"核酸报告","menuJump":"列表","tableName":"hesuanbaogao"}],"menu":"核酸报告管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["新增","查看","修改","删除"],"menu":"交流论坛","tableName":"forum"}],"menu":"交流论坛"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"疫情公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"疫情动态列表","menuJump":"列表","tableName":"yiqingdongtai"}],"menu":"疫情动态模块"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看"],"menu":"知识信息列表","menuJump":"列表","tableName":"zhishixinxi"}],"menu":"知识信息模块"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"防疫教育列表","menuJump":"列表","tableName":"fangyijiaoyu"}],"menu":"防疫教育模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"健康打卡","menuJump":"列表","tableName":"jiankangdaka"}],"menu":"健康打卡管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"请假申请","menuJump":"列表","tableName":"qingjiashenqing"}],"menu":"请假申请管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"核酸报告","menuJump":"列表","tableName":"hesuanbaogao"}],"menu":"核酸报告管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["查看"],"menu":"疫情动态列表","menuJump":"列表","tableName":"yiqingdongtai"}],"menu":"疫情动态模块"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看"],"menu":"知识信息列表","menuJump":"列表","tableName":"zhishixinxi"}],"menu":"知识信息模块"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"防疫教育列表","menuJump":"列表","tableName":"fangyijiaoyu"}],"menu":"防疫教育模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
