function Game(){

     this.canvas = document.getElementById('canvas');
     this.ctx = this.canvas.getContext('2d');
   

     var allimages = [
       {'alias':'bird','path':'images/bird.png'},
       {'alias':'bg','path':'images/background.png'},
       {'alias':'pipe','path':'images/pipe.png'},
       {'alias':'land','path':'images/ground.png'}
     ];

     this.R={

     };
     var self = this;

     this.ctx.font='40px 微软雅黑';
     this.ctx.textAlign = 'center';

     for(let i = 0; i< allimages.length;i++){
         (function(i){
             //创建一个图片对象
            var img =new Image();
            //监听图片的onload事件
            img.onload = function(){
                //加载好一个图片，就给R对象设置一个和alias同名的属性
                 self.R[allimages[i].alias]=img;
                 
                 self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);

                 self.ctx.fillText(
                     '正在加载图片'+Object.keys(self.R).length + '/' + allimages.length,
                     self.canvas.width/2,
                     self.canvas.height/2
                 )

               

                 if(Object.keys(self.R).length==allimages.length){
                    self.start();
                 }
            }
            //设置图片的src属性
            img.src = allimages[i].path;
         })(i);
        
     }
}
Game.prototype.start = function(){
    var self = this;

    this.f = -1;

    this.ctx.textAlign = 'left';
    
    this.ctx.font = '20px 宋体';

    this.land = new Land();

  

    setInterval(function(){
        self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);

        self.f++;
        self.ctx.fillText(
            self.f,10,20
        );

       self.ctx.drawImage(self.R['bg'],0,0,self.canvas.width, self.canvas.height-80);
          self.land.update();
          self.land.render();


       
    },20);

}