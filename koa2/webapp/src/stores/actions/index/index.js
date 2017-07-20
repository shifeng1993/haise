import * as types from '../../constants/ActionTypes';
import axios from 'axios';

// 读取商品数组
function fetchGoods() {
  return axios.get('http://localhost:3333/api/goods');
}
export function getGoods() {
  return function (dispatch) {
    return fetchGoods().then((res) => {
      if (res.status === 200) {
        dispatch(setGoods(res.data));
      } else {
        console.log('获取数据失败，请刷新页面')
      }
    });
  };
}

// 设置商品数组
export function setGoods(data) {
  return {type: types.SET_GOODS, data};
}

// 查询单个产品
export function getGood(goodid) {
  return function (dispatch, getState) {
    const goods = getState().index.goods;
    let arr = [];
    for (let i = 0; i < goods.length; i++) {
        arr.push(goods[i].id);
    }
    let index = arr.indexOf(parseInt(goodid,10));
    if(index !== -1){
       dispatch(setGood(goods[index]));
    }
  };
}

// 设置单个商品到全局state
export function setGood(data) {
  return {type: types.SET_GOOD, data};
}
