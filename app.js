new p5();
let count = 0;
let mainTitle;
let kabanikaAkabanika;
let JiwaAnu;
let subTitles;
let full;
let cls;
let next;
let pre;
let ctrlsState=0;
let vid;
let width;
let hight;
let topHider;
let bottomHider;
function preload(){
     mainTitle=select("#main_title");
     kabanikaAkabanika=select("#kabanikaAkabanika");
     JiwaAnu=select("#JiwaAnu");
     subTitles=selectAll(".sub-titles");
     full=select("#fullscreen");
     cls=select("#close");
     next=select("#next");
     pre=select("#pre");
     vid=select("#videos");
     topHider=select("#top");
     bottomHider=select("#bottom");
}
function setup() {
 if(windowWidth > 700){
    hight=40;
    mainTitle.style("fontSize:2em;");
    kabanikaAkabanika.style("fontSize:1.4em");
    JiwaAnu.style("fontSize:1em");
    vid.style("height:40em");
    topHider.style("height:10em;position:relative;top:10em;")
    bottomHider.style("height:10em;position:relative;top:-10em;")
    next.style("top:-20em;")
    pre.style("top:-20em;")
    full.style("top:-20em;")
    cls.style("top:-12em;")
    subTitles.forEach(element => {
        element.style("fontSize:1.5em");
    });
}else{
    hight=20;
    mainTitle.style("color:black;");
    JiwaAnu.style("fontSize:0.7em");
}

  next.mousePressed(() => {
    if (count < 10) {
      console.log("clicked");
      count++;
      console.log(count);
    } else {
      console.log(count);
    }
  });

  pre.mousePressed(() => {
    if (count > 0) {
      console.log("clicked");
      count--;
      console.log(count);
    } else {
      console.log(count);
    }
  });
  cls.mouseOver(()=>{
    cls.style("backgroundColor:red;opacity:1")
  })
  cls.mouseOut(()=>{
    cls.style("backgroundColor:white;opacity:0.5;color:black;")
  })
  cls.mousePressed(()=>{
      if(ctrlsState % 2 == 0){
      cls.style("backgroundColor:red;opacity:0.7;color:black")
      pre.style("width:0;padding:0;border:none;")
      next.style("width:0;padding:0;border:none;")
      full.style("width:0;padding:0;border:none;")
      ctrlsState++;
      }else{
        cls.style("backgroundColor:white;opacity:0.7;color:black")
        pre.style("width: 20%;padding:0.5em;border:white solid 0.3em;")
        next.style("width:20%;padding:0.5em;border:white solid 0.3em;")
        full.style("width:20%;padding:0.5em;border:white solid 0.3em;")
        ctrlsState++;
      }
  })
  full.mousePressed(()=>{
         let fl=fullscreen();
         fullscreen(!fl);
         if(!fl){
         vid.style("zIndex:2;width:100%;height:100%;position:absolute;top:0;left:0;bottom:0;right:0;");
         topHider.style("zIndex:3;width:100%;height:25%;position:absolute;top:0;bottom:75%;");
         bottomHider.style("zIndex:3;width:100%;height:25%;position:absolute;bottom:0;top:75%;");
         pre.style("position:absolute;bottom:0;top:90%;left:0;");
         next.style("position:absolute;bottom:0;top:90%;left:25%;");
         full.style("position:absolute;bottom:0;top:90%;right:25%;");
         cls.style("position:absolute;bottom:0;top:90%;right:0;");

        }else{
            vid.style("zIndex:0;width:100%;height:"+hight+"em;position:relative;");
            topHider.style("width:100%;height:"+hight/4+"em;position:relative;top:"+hight/4+"em;");
            bottomHider.style("width:100%;height:"+hight/4+"em;position:relative;top:"+-hight/4+"em;");
            pre.style("position:relative;top:-10em;left:0;");
            next.style("position:relative;top:-10em;left:0;");
            full.style("position:relative;top:-10em;right:0;");
            cls.style("position:relative;top:-6em;right:0;");
        }
  })

  
}
