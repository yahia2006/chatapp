let usersay=document.getElementById('user')
let inner=document.getElementById('chattext')
let time=2000
let bot={
    myname:"my name is ai bot im here to help you",
    res1:"im fine sir how i can help you",
    frontendMap:"to be a front end you must learn html and css and bootstrap<br> then you must build some projects then you must learned javascript then build some projects <br>after that you should learn frame work like React or nodejs",
    thankbot: "Sure im always for help you ❤❤"

}
const btn=document.getElementById('sendval')
btn.addEventListener('click',function(){
    inner.innerHTML+=`
    <div class="user-say">
    <div>
        <img src="imgs/user.png" id="body">
    </div>
    
    <div>
        <p class="buser" id="textuser">${usersay.value}</p>

    </div>
    

   </div>

    `
    if(usersay.value=="hi how are you"){
        function res1(){
            inner.innerHTML+=`
            <div class="bot-res">
            <div>
                <img src="imgs/robot.png" id="robo">
    
            </div>
           
            <div>
                <p class="bbot">${bot.res1}</p>
            </div>
           
    
           </div>
            
            
            `

        }
        setTimeout(res1,time)
       
    }
    if(usersay.value=="How i can be a front end"){
        function res1(){
            inner.innerHTML+=`
            <div class="bot-res">
            <div>
                <img src="imgs/robot.png" id="robo">
    
            </div>
           
            <div>
                <p class="bbot">${bot.frontendMap}</p>
            </div>
           
    
           </div>
            
            
            `

        }
        setTimeout(res1,time)

    }
    if(usersay.value=="thank you"){
        function res1(){
            inner.innerHTML+=`
            <div class="bot-res">
            <div>
                <img src="imgs/robot.png" id="robo">
    
            </div>
           
            <div>
                <p class="bbot">${bot.thankbot}</p>
            </div>
           
    
           </div>
            
            
            `

        }
        setTimeout(res1,time)

    }
    
})