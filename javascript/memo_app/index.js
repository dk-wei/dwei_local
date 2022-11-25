//前端布鲁斯教学：https://www.youtube.com/watch?v=1pYtVwIAvhY

//抓取关心的信息
const input = document.getElementById('content')
const dateInfo = document.getElementById('date')
const timeInfo = document.getElementById('time')
const addedButton = document.getElementById('addedBtn')
const deleteButton = document.getElementById('deletedBtn')
const list1 = document.getElementById('list')

const ListContent = []

// class写法
class RenderFeature{
    append(){

    }
    render(){
    let htmlStr = ''
    ListContent.forEach((item)=>{
        htmlStr = htmlStr + `
        <div class="item">
        <div>
          <p>內容：${item.input}</p>
          <p>時間：${item.dateInfo + ' ' + item.timeInfo}</p>
        </div>
      </div>
        `
    
    console.log(htmlStr)
    list1.innerHTML = htmlStr  // 改变网页的方式就是改变list里面的html
    })
    }
}

// function写法
// function render(){
//     let htmlStr = ''
//     ListContent.forEach((item)=>{
//         htmlStr = htmlStr + `
//         <div class="item">
//         <div>
//           <p>內容：${item.input}</p>
//           <p>時間：${item.dateInfo + ' ' + item.timeInfo}</p>
//         </div>
//       </div>
//         `
    
//     console.log(htmlStr)
//     list1.innerHTML = ht
//     })
// }

const r1 = new RenderFeature()

// 收集click时候的信息
addedButton.addEventListener('click', () => {

    console.log(input.value)
    console.log(dateInfo.value)
    console.log(timeInfo.value)

    let content = {
        input: input.value,
        dateInfo: dateInfo.value,
        timeInfo: timeInfo.value
    }
    
    //ListContent.push(content)
    ListContent.unshift(content)   //每次新增加到最前面
    //console.log(ListContent)
    r1.render()

}
)



deleteButton.addEventListener('click', () => {
    //ListContent.pop()
    ListContent.shift()   //删除最前面

    r1.render()

})