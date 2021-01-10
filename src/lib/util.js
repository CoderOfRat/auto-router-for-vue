// 业务相关的 辅助方法 函数
const setTitle = (title)=> {
    if(title) document.title = title
    else document.title = 'vue_restudy'
}


// 匹配所有符合正则的文件目录
const files = require.context('../views', true, /\.vue$/)
console.dir(files.keys())
// 创建页面映射
let pagesMap = {}

files.keys().forEach(key => {
    pagesMap[key.split(/\/[a-zA-Z0-9]*.vue/)[0].substr(2)] = files(key).default || files(key)
})
console.log(pagesMap);

export {
    setTitle,
    pagesMap
}
