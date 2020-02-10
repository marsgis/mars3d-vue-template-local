//地图创建处理js


//地图创建  
export function createMap(id, config) {
  var viewer = mars3d.createMap({
    id: id,
    data: config.map3d,
    serverURL: config.serverURL,
  });
  
  initWork(viewer);

  return viewer;
}

//当前页面业务相关
function initWork(viewer) {



}