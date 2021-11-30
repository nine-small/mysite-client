import Mock from 'mockjs'
const data = {
    code:0,
    mes:'success',
    data:[
      {
        bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
        midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
        id: '1',
        title: '凛冬将至',
        description: "人唯有恐惧的时候方能勇敢",
    },
    {
        bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
        midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
        id: '2',
        title: '血火同源',
        description: "如果我回头，一切都完了",
    },
    {
        midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
        bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
        id: '3',
        title: '听我怒吼',
        description: "兰尼斯特有债必偿",
    }     
      ]
}

Mock.mock('/api/banner','get',data)



