import axios from 'axios'
import qs from 'qs'


const baseUrl = '/api'

axios.interceptors.response.use(res => {
    console.log(res);
    return res
})

export const reqMenuAdd = (data) => {
    return axios({
        url: baseUrl + '/api/menuadd ',
        method: 'post',
        data: data
    })
}

export const reqMenuList = (data) => {
    return axios({
        url: baseUrl + '/api/menulist',
        method: 'get',
        params: data
    })
}

// 获取一条数据
// 菜单列表
export const reqMenuListOne = (data) => {
    return axios({
        url: baseUrl + '/api/menuinfo',
        method: 'get',
        params: data
    })
}


// 菜单编辑
export const reqMenuEdit = (data) => {
    return axios({
        url: baseUrl + '/api/menuedit',
        method: 'post',
        data: data
    })
}



// 菜单删除
export const reqMenuDel = (data) => {
    return axios({
        url: baseUrl + '/api/menudelete',
        method: 'post',
        data: data
    })
}

/////////////////////角色管理///////////////////////////

// 角色添加
export const reqRoleAdd = (data) => {
    return axios({
        url: baseUrl + '/api/roleadd',
        method: 'post',
        data: data
    })
}


// 角色列表
export const reqRoleList = () => {
    return axios({
        url: baseUrl + '/api/rolelist',
        method: 'get',
    })
}



// 角色一条数据
export const reqRoleListOne = (id) => {
    return axios({
        url: baseUrl + '/api/roleinfo',
        method: 'get',
        params: id
    })
}

// 角色编辑
export const reqRoleEdit = (id) => {
    return axios({
        url: baseUrl + '/api/roleedit',
        method: 'post',
        data: id
    })
}


// 角色删除
export const reqRoleDel = (id) => {
    return axios({
        url: baseUrl + '/api/roledelete',
        method: 'post',
        data: id
    })
}





/////////////////////管理员管理///////////////////////////

// 管理员添加
export const reqUserAdd = (data) => {
    return axios({
        url: baseUrl + '/api/useradd',
        method: 'post',
        data: qs.stringify(data)
    })
}


// 管理员列表
export const reqUserList = (params) => {
    return axios({
        url: baseUrl + '/api/userlist',
        method: 'get',
        params: params
    })
}



// 管理员一条数据
export const reqUserListOne = (id) => {
    return axios({
        url: baseUrl + '/api/userinfo',
        method: 'get',
        params: id
    })
}

// 管理员编辑
export const reqUserEdit = (id) => {
    return axios({
        url: baseUrl + '/api/useredit',
        method: 'post',
        data: id
    })
}


// 管理员删除
export const reqUserDel = (id) => {
    return axios({
        url: baseUrl + '/api/userdelete',
        method: 'post',
        data: id
    })
}


// 管理员总数
export const reqUserCount = () => {
    return axios({
        url: baseUrl + '/api/usercount',
        method: 'get',
    })
}




/////////////////////商品分类管理///////////////////////////

// 商品分类添加
export const reqCateAdd = (data) => {
    // 由于上传的是文件，所以用qs转一下
    var form = new FormData()
    // {id:1,catename,img.status}
    for (var i in data) {
        form.append(i, data[i])
    }

    return axios({
        url: baseUrl + '/api/cateadd',
        method: 'post',
        data: form
    })
}


// 商品分类列表
export const reqCateList = (params) => {
    return axios({
        url: baseUrl + '/api/catelist',
        method: 'get',
        params: params
    })
}



// 商品分类一条数据
export const reqCateListOne = (id) => {
    return axios({
        url: baseUrl + '/api/cateinfo',
        method: 'get',
        params: id
    })
}

// 商品分类编辑
export const reqCateEdit = (data) => {

    // 由于上传的是文件，所以用qs转一下
    var form = new FormData()
    // {id:1,catename,img.status}
    for (var i in data) {
        form.append(i, data[i])
    }

    return axios({
        url: baseUrl + '/api/cateedit',
        method: 'post',
        data: form  
    })
}


// 商品分类删除
export const reqCateDel = (id) => {
    return axios({
        url: baseUrl + '/api/catedelete',
        method: 'post',
        data: id
    })
}




/////////////////////商品规格管理///////////////////////////

// 商品规格添加
export const reqSpecsAdd = (data) => {

    return axios({
        url: baseUrl + '/api/specsadd',
        method: 'post',
        data: data
    })
}


// 商品规格列表
export const reqSpecsList = (params) => {
    return axios({
        url: baseUrl + '/api/specslist',
        method: 'get',
        params: params
    })
}



// 商品规格一条数据
export const reqSpecsListOne = (id) => {
    return axios({
        url: baseUrl + '/api/specsinfo',
        method: 'get',
        params: id
    })
}

// 商品规格编辑
export const reqSpecsEdit = (data) => {
    return axios({
        url: baseUrl + '/api/specsedit',
        method: 'post',
        data: data  
    })
}


// 商品规格删除
export const reqSpecsDel = (id) => {
    return axios({
        url: baseUrl + '/api/specsdelete',
        method: 'post',
        data: id
    })
}
