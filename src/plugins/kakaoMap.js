const htmlRender = () => {
  const appkey = 'd18809f0fc3795e46e98f04fcfc68158';

  return `
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}"></script>
    <div id="map" style="width:500px;height:400px;"></div>
    <script>
      const mapElem = document.querySelector('#map');
      const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      const map = new kakao.maps.Map(mapElem, mapOption);
    </script>
  `;
};

export { htmlRender };
