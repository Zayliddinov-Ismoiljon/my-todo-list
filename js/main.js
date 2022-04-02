const elForm=document.querySelector(".form");
const elInput=document.querySelector(".form__input");
const elAllCountResult=document.querySelector(".all-count");
const elComplateCountResult=document.querySelector(".complate-count");
const elUnComplateCountResult=document.querySelector(".uncomplate-count");

const elList= document.querySelector(".todo-list");
const elCheckedList= document.querySelector(".checked-list");
const elBookmarkList= document.querySelector(".bookmark-list");

const arrTodos=[];

const elAllCount=[];
const elComplateCount=[];
const elUnComplateCount=[];

elForm.addEventListener("submit", evt=>{
    evt.preventDefault();

    let elInputValue= elInput.value;
    const newItem= document.createElement("li");
    const newInput=document.createElement("input");
    const newBookmark= document.createElement("button");

    newItem.textContent=elInputValue;
    newItem.setAttribute("class", "todo-list__item");
    newInput.type="checkbox";
    newBookmark.textContent="Bookmark";
    newBookmark.setAttribute("class", "bookmark-btn")

    arrTodos.push(newItem);
    elAllCount.push(arrTodos.length);
    elAllCountResult.textContent=elAllCount.length;

    elUnComplateCount.push(arrTodos.length);
    elUnComplateCountResult.textContent=elUnComplateCount.length;

    newItem.appendChild(newInput);
    newItem.appendChild(newBookmark);
    elList.appendChild(newItem);

    elInput.value="";

    newItem>newInput.addEventListener("click", evt=>{
        elCheckedList.appendChild(newItem);
        elComplateCount.push(newItem);
        elComplateCountResult.textContent=elComplateCount.length;
        elUnComplateCountResult.textContent=elAllCount.length-elComplateCount.length;
    })

    newItem>newBookmark.addEventListener("click", evt=>{
        elBookmarkList.appendChild(newItem);
    })

    

})


 