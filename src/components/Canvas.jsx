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
        function Rectangle (x,y,dx,dy,l,b) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.l = l;
            this.b = b;
            this.draw = () => {
                c.beginPath();
                c.fillStyle = `purple`;
                c.fillRect(this.x,this.y,this.l,this.b);
            }
            this.update = function() {
                if(this.x + this.l > window.innerWidth || this.x - this.l < 0) {
                    this.dx = -this.dx;
                }
                if(this.y + this.l > window.innerHeight || this.y - this.l < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;
                this.draw();
            }
        }
        function Circle(x,y,dx,dy,rad) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.rad = rad;
            this.draw = function() {
                c.beginPath();
                c.fillStyle= `green`;
                // c.arc(this.x,this.y,this.rad,0,Math.PI * 2 ,false);
                // Create gradient
                var gradient = c.createLinearGradient(0, 0,  window.innerWidth, 0);
                gradient.addColorStop("0"," magenta");
                gradient.addColorStop("0.5", "blue");
                gradient.addColorStop("1.0", "red");
                // Fill with gradient
                c.fillStyle = gradient;
                // c.font = "30px Georgia";
                // c.fillText("Deepak", this.x,this.y);

                c.font='30px FontAwesome';
                c.fillText(`\uF004`,this.x,this.y);
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
        var rectangleArray = [];
        for(var i= 0; i<100;i++) {  
            var rad = 20;
            var l = 50;
            var b = 50;
            var x = Math.random() * ( window.innerWidth - rad * 2 ) + rad;
            var y = Math.random() * ( window.innerHeight - rad * 2 ) + rad ;
            var rx = Math.random() * ( window.innerWidth - b  )  ;
            var ry = Math.random() * ( window.innerHeight - l  );
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5) ;
           
            circleArray.push(new Circle(x,y,dx,dy,rad));
            rectangleArray.push(new Rectangle(rx,ry,dx,dy,l,b))

        }
       //  console.log(circleArray,rectangleArray );
       function animation(){
         
           requestAnimationFrame(animation);
            c.clearRect(0,0,window.innerWidth,window.innerHeight);
            for(let i= 0; i < circleArray.length;i++){
                    circleArray[i].update(); 
            }
            for(let j = 0;j < rectangleArray.length; j++) {
                rectangleArray[j].update();
            }
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