
window.dom = {
    find(nodes) {
        return document.querySelectorAll(nodes)
    },
    style(node, property, type) {
        node.style[property] = type
    },
    each(nodes, fn) {
        let array = []
        for (let i = 0; i < nodes.length; i++){
            array.push(nodes[i])
        }
        array.forEach(fn)
    }
}

const ele = dom.find('#block')[0] // 获取对应的元素
console.log(ele)
dom.style(ele,'color','red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素