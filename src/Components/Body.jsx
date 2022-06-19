import {BootstrapCarousel} from "./BootstrapCarousel";
import p from "./image/p.png";
import p0 from "./image/p0.png";
import p1 from "./image/p1.png";
import p2 from "./image/p2.png";
import p3 from "./image/p3.png";
import p4 from "./image/p4.png";
import p5 from "./image/p5.png";
export const Body = () => {
  return (
    <div className="body">
      <div className="firstimage">
        <img alt="prd" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2bf78b93/images/Summer2022/550mensee_junsas_hm_to.gif?yocs=s_" />
      </div>
      <br/>

      <BootstrapCarousel/>

      <br/>

      <img alt="img" src={p}/>
      <img alt="img" src={p0}/>
      <img alt="img" src={p1}/>
      <img alt="img" src={p2}/>
      <img alt="img" src={p3}/>
      <img alt="img" src={p4}/>
      <img alt="img" src={p5}/>
    
    </div>
  );
};
