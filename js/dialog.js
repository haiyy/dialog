class Dialog{
    constructor(title="标题党",content="今天下雪了"){
        this.title=title;
        this.content=content;
        this.init();
    }
    init(){
        this.createWrap();
    }
    addEvent(){
        let span=document.getElementsByClassName("spanbox")[0];
        let btn=document.querySelector(".success");
        let but=document.querySelector(".error");
        span.addEventListener("click",(event)=>{
            this.hide();
        },false);
        but.addEventListener("click",(event)=>{
            this.hide();
        },false);
        btn.addEventListener("click",(event)=>{
            location.href="http://www.baidu.com";
        },false)
    }
    hide(){
        let warp=document.querySelector(".warp");
        warp.style.display="none";
    }
    createButton(text,cls){
        let btn=document.createElement("button");
        btn.innerHTML=text;
        btn.className=cls;
        return btn;

    }
    createTitle(){
        let titbox=document.createElement("h2");
        let span=document.createElement("span");
        titbox.className="dialog-title";
        titbox.innerHTML=this.title;
        span.className="spanbox";
        span.innerHTML="X";
        titbox.append(span);
        return titbox;
    }
    createContent(){
       let divbox=document.createElement("div");
       divbox.className="divbox";
       divbox.innerHTML=this.content;
       return divbox;
    }
    createWrap(){
      let warp=document.createElement("div");
      warp.className="warp";
      let btn=this.createButton("确定","success");
      let but=this.createButton("取消","error");
      let cont=this.createContent();
      let tit=this.createTitle();
      cont.append(but);
      cont.append(btn);
      warp.append(tit);
      warp.append(cont);
      document.body.append(warp);
      this.addEvent()
    }
}
let dialog=new Dialog();