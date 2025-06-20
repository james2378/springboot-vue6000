
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
	name: '出入登记',
	url: './pages/churudengji/list.html'
}, 
{
	name: '疫情知识',
	url: './pages/yiqingzhishi/list.html'
}, 

{
	name: '论坛信息',
	url: './pages/forum/list.html'
}, 
{
	name: '疫情公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot81644/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"核酸检测","menuJump":"列表","tableName":"hesuanjiance"}],"menu":"核酸检测管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"体温状态","menuJump":"列表","tableName":"tiwenzhuangtai"}],"menu":"体温状态管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"学生状态","menuJump":"列表","tableName":"xueshengzhuangtai"}],"menu":"学生状态管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"休假申请","menuJump":"列表","tableName":"xiujiashenqing"}],"menu":"休假申请管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"出入登记","menuJump":"列表","tableName":"churudengji"}],"menu":"出入登记管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"疫情知识","menuJump":"列表","tableName":"yiqingzhishi"}],"menu":"疫情知识管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"论坛管理","tableName":"forum"}],"menu":"论坛管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"疫情公告","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"客服管理","tableName":"chat"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","新增"],"menu":"出入登记列表","menuJump":"列表","tableName":"churudengji"}],"menu":"出入登记模块"},{"child":[{"buttons":["查看"],"menu":"疫情知识列表","menuJump":"列表","tableName":"yiqingzhishi"}],"menu":"疫情知识模块"}],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生状态","menuJump":"列表","tableName":"xueshengzhuangtai"}],"menu":"学生状态管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"休假申请","menuJump":"列表","tableName":"xiujiashenqing"}],"menu":"休假申请管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"出入登记","menuJump":"列表","tableName":"churudengji"}],"menu":"出入登记管理"}],"frontMenu":[{"child":[{"buttons":["查看","新增"],"menu":"出入登记列表","menuJump":"列表","tableName":"churudengji"}],"menu":"出入登记模块"},{"child":[{"buttons":["查看"],"menu":"疫情知识列表","menuJump":"列表","tableName":"yiqingzhishi"}],"menu":"疫情知识模块"}],"roleName":"学生","tableName":"xuesheng"}]


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
