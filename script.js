function newElement(){
    let li=document.createElement('li');
    let inputVal=document.querySelector('#myInput').value;
    let txt=document.createTextNode(inputVal);
    document.getElementById('myInput').value="";

    //Close Button
    var closeBtn=document.createElement('button');
    closeBtn.style.float="right";
    closeBtn.innerHTML="X";
    closeBtn.addEventListener('click',function(){
            li.remove();
    });

    //check closeBtn
    var checkBtn = document.createElement("input");
    checkBtn.setAttribute("type", "checkbox");
    checkBtn.style.float="right";
    checkBtn.className="checkbtn";
    checkBtn.addEventListener('click',function(){
        li.classList.toggle('overline')
    })

    if(inputVal==""){
        alert('Enter something to add in List.');
    }
    else{
        li.appendChild(txt);
        li.appendChild(closeBtn);
        li.appendChild(checkBtn);
        document.getElementById('myUL').appendChild(li);
    }

}

let input=document.getElementById('myInput');
input.addEventListener('keyup',function(event){
    if(event.key==="Enter"){
         newElement();
    }
})

