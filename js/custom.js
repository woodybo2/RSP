'use strict';

let count = 0;
let win = 0;
let draw = 0;
let lose = 0;
function srp(e){
    // var me = ['가위', '바위','보'];
    var c = Math.floor(Math.random()*3);
    
    //내 결과는 e, 컴퓨터의 결과는 c에 들어있다.
    var me, com, str, img, img2;
    switch(e){
        case 0:
            me = '가위';
            img = 'img/sc.png';
        break;
        case 1:
            me = '바위';
            img = 'img/ro.png';
        break;
        case 2:
            me = '보';
            img = 'img/pp.png';
        break;
    }
    if(c==0){
        com ='가위';
        img2 = 'img/sc.png';
    }else if(c==1){
        com = '바위';
        img2 ='img/ro.png';

    }else{
        com = '보';
        img2 = 'img/pp.png';
    }

    
    //비기는 조건 (0,0), (1,1), (2,2)
    //이기는 조건 (0,2), (1,0), (2,1)
    //지는 조건 (0,1), (1,2), (2,0)
    if((e==0&&c==0)||(e==1&&c==1)||(e==2&&c==2)){
        str = "비겼습니다. 다시 하세요.";
        draw++;
    }else if((e==0&&c==2)||(e==1&&c==0)||(e==2&&c==1)){
        str = "이겼습니다. 축하드려요!";
        win++;
    }else{
        str = "졌습니다. 다시 도전하세요!";
        lose++;
    }
    document.getElementById("result").innerHTML = str;
    document.getElementById("me").style.backgroundImage="url("+img+")";
    document.getElementById("com").style.backgroundImage="url("+img2+")";

    // alert(me[e]+"를 내셨습니다!");
    // alert("컴퓨터는 "+me[c]+"를 냈습니다!");


    /* 전적 */
    count++;
    document.getElementById('count').innerHTML = count;

    let drawRate = (draw / count) *100;
    let winRate = (win / count) *100;
    let loseRate = (lose / count) *100;
    document.getElementById('draw').innerHTML = drawRate.toFixed(1) + '&#37;';
    document.getElementById('win').innerHTML = winRate.toFixed(1) + '&#37;';
    document.getElementById('lose').innerHTML = loseRate.toFixed(1) + '&#37;';

    let srp = document.getElementsByClassName('srp');
    let reloadBtn = document.getElementById('reload');
    if(count == 5){
        for(let i=0;i<srp.length;i++){
            srp[i].disabled = true;
        }
        if(winRate > 50){
            document.getElementById('result').innerHTML = "최종 승리하셨습니다!!";
        }else{
            document.getElementById('result').innerHTML = "최종 패배 TAT.....";
        }

        reloadBtn.style.display = 'block';
    }
    
};
function reloading(){
    let srp = document.getElementsByClassName('srp');
    let reloadBtn = document.getElementById('reload');
    for(let i=0;i<srp.length;i++){
        srp[i].disabled = false;
    }
    reloadBtn.style.display = 'none';
    count=0;
    win=0;
    draw=0;
    lose=0;
    document.getElementById('count').innerHTML = count;
    document.getElementById('win').innerHTML = win;
    document.getElementById('draw').innerHTML = draw;
    document.getElementById('lose').innerHTML = lose;
}

//클릭했을 때 srp()정보가 e에 대입된다.


