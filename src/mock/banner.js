import Mock from 'mockjs';
import banner1 from '../../public/image/banner1.jpeg';
import banner2 from '../../public/image/banner2.jpeg';
import banner3 from '../../public/image/banner3.jpeg';
console.log(banner1)
const data = {
    code:0,
    mes:'success',
    data:[
      {
        bigImg: banner1,
        midImg: banner1,
        id: '1',
        title: '凛冬将至',
        description: "人唯有恐惧的时候方能勇敢",
    },
    {
        bigImg: banner2,
        midImg: banner2,
        id: '2',
        title: '血火同源',
        description: "如果我回头，一切都完了",
    },
    {
        midImg: banner3,
        bigImg: banner3,
        id: '3',
        title: '听我怒吼',
        description: "兰尼斯特有债必偿",
    }     
      ]
}

Mock.mock('/api/banner','get',data)



