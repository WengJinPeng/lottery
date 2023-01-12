/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "一等奖",
    title: "XiaoMi 12Pro",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "二等奖",
    title: "Tissot Watch（天梭手表）",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 3,
    text: "三等奖",
    title: "28 inch Luggage",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 10,
    text: "入围奖",
    title: "Big Duffel Bag",
    img: "../img/ipad.jpg"
  },
  {
    type: 5,
    count: 10,
    text: "入围奖",
    title: "Xiaomi Powerbank",
    img: "../img/spark.jpg"
  },
  {
    type: 6,
    count: 10,
    text: "入围奖",
    title: "MINI Electric Shaver",
    img: "../img/kindle.jpg"
  },
  {
    type: 7,
    count: 10,
    text: "入围奖",
    title: "SONY Headset",
    img: "../img/edifier.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 3, 10, 10, 10, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "GOLDEN SANDS CONSTRUCTION & ENGINEERING PTE LTD";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
