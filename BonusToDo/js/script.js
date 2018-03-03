var add= document.getElementById('add');
var removeall= document.getElementById('removeall');
var list= document.getElementById('todo');

//remove all
removeall.onclick= function(){
    list.innerHTML= '';
}

//adding a new list element

add.onclick = function(){
    addlis(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
}

function addlis(targetUl){
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');
    
    if(inputText !== ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = ' &times; ';
        removeButton.setAttribute('onclick', 'removeMe(this)');
        
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    } else {
        alert("Please enter a todo");
    }
    
    
    
    
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}
