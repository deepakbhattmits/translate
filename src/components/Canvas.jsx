import React,{ Component } from 'react';

class Canvas extends Component {
    componentDidMount(){
        const canvas = document.querySelector(`#canvas`);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const c = canvas.getContext(`2d`);
        // c.fillStyle = `purple`;
        // c.fillRect(50,30,200,200);
        // c.fillStyle = `silver`;
        // c.fillRect(270,200,200,200);

        // Line 
        // c.beginPath();
        // c.moveTo(150,200);
        // c.strokeStyle= `blue`;
        // c.lineTo(200,350);
        // c.strokeStyle= `yellow`;
        // c.lineTo(400,370);
      
        // c.stroke();
        // // arc
        // for(var i = 0; i<100 ; i++) {
        //     var x = Math.random() * window.innerWidth;
        //     var y = Math.random() * window.innerHeight;
            
        //     c.beginPath();
        //     c.fillStyle = "blue"; //red
        //     c.arc(x,y,25,0,360,false);
        //     c.fill();
        // }
        function Circle(x,y,dx,dy,rad) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.rad = rad;
            this.draw = function() {
                c.beginPath();
                c.fillStyle= `green`;
                c.arc(this.x,this.y,this.rad,0,Math.PI * 2 ,false);
                c.fill();
            };
            this.update = function() {
                if(this.x + this.rad > window.innerWidth || this.x - this.rad < 0) {
                    this.dx = -this.dx;
                }
                if(this.y + this.rad > window.innerHeight || this.y - this.rad < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;
                this.draw();
            }
        }
       
        var circleArray = [];
        for(var i= 0; i<100;i++) {
            var rad = 20;
            var x = Math.random() * ( window.innerWidth - rad * 2 ) + rad;
            var y = Math.random() * ( window.innerHeight - rad * 2 ) + rad ;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5) ;
           
            //var circle = new Circle(x,y,dx,dy,rad);
            circleArray.push(new Circle(x,y,dx,dy,rad));
        }
        console.log(circleArray);
       function animation(){
         
           requestAnimationFrame(animation);
            c.clearRect(0,0,window.innerWidth,window.innerHeight);
            for(let i= 0; i < circleArray.length;i++){
                    circleArray[i].update(); 
            }
            // circle.update();
       }
       animation();
    }
    render () {
        return (
            <div>
                <canvas 
                    id='canvas' 
                    style={{ backgroundColor: 'cyan' ,
                            border:'1px solid #000'
                            }}></canvas>
            </div>
        );
    }
};
export default Canvas;