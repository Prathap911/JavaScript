const itemInput = document.getElementById('item-input');
const itemForm = document.getElementById('item-form');
const filter = document.getElementById('filter');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');






function AddItem(e){
    e.preventDefault();

    const newItem=itemInput.value;

    if(newItem.trim()===''){
        alert('please enter an item');
        return;
    }

    const li=document.createElement('li');
    li.textContent=newItem;

    const button=document.createElement('button');
    button.classList.add('remove-item','btn-link','text-red');
    button.innerHTML='<i class="fa-solid fa-xmark"></i>';

    button.addEventListener('click',RemoveItem);

    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value='';
}

function RemoveItem(e){
    e.target.closest('li').remove();
}

function clearItems(){
    itemList.innerHTML='';
}

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const items = document.querySelectorAll('#item-list li');
  
    items.forEach((item) => {
      const itemName = item.firstChild.textContent.toLowerCase();
      if (itemName.indexOf(text) != -1) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
}

//Event listners

itemForm.addEventListener('submit',AddItem);
clearButton.addEventListener('click',clearItems);
filter.addEventListener('keyup', filterItems);

