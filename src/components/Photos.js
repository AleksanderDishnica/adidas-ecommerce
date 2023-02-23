import { Img } from "./Img.js";

export function Photos() {
  return (
    <div className="relative rounded-xl overflow-auto p-8">
      <div className="relative rounded-xl overflow-auto p-8">
        <div className="relative">
          <div className="absolute inset-0 -top-8 -bottom-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-stripes-blue opacity-75 w-full h-full"></div>
            <div className="hidden sm:block bg-stripes-blue opacity-75 w-full h-full"></div>
            <div className="hidden sm:block bg-stripes-blue opacity-75 w-full h-full"></div>
          </div>
          <div className="relative lg:columns-5 sm:columns-3 sm:gap-8">
            <Img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7551255300143bf9149aebb010d070b_9366/mexico-22-home-jersey.jpg" />
            <Img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5917ade1ca3d4153808aaf5b00df3481_9366/Superstar_Shoes_White_HQ1918_01_standard.jpg" />
            <Img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2929f97960b04ddfa4a5aead00a1f44a_9366/Predator_Edge_League_Gloves_White_HF9736_41_detail_hover.jpg" />
            <Img src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9cb369a9114645ef92c1aeed01129650_9366/Mexico_Pre-Match_Jersey_Green_HF1370_25_model.jpg" />
            <Img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c6d83fbd88548ca857caf030093483d_9366/Snake_Graphic_Baseball_Cap_Multicolor_IC8286_01_standard.jpg" />
            <Img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ba4b1ffb070e42d69025ac6400c35b5d_9366/Stan_Smith_Crib_Shoes_White_FY7892_01_standard.jpg" />
            <Img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e265e2b32e14481a446ae02000c4602_9366/NMD_R1_Shoes_Orange_GV9439_01_standard.jpg" />
            <Img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f7652bd04b74b46adcfada1012e64ab_9366/Adicolor_Essentials_Rib_Tank_Top_Black_HF3399_21_model.jpg" />
            <Img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c86d9f3f92e4d35ac53ae89018b2094_9366/Diablo_Small_Duffel_White_GA5599_01_standard.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
