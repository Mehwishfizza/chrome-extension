let emty_array=[];
const input_EL= document.getElementById("input_el");
const buttonclick= document.getElementById("input_button");
let unor_list= document.getElementById("list")
const buttondelete= document.getElementById("delete");
const save_btn= document.getElementById("save");
let localemtyarray= JSON.parse( localStorage.getItem("emty_array"));
if(localemtyarray){
  emty_array=localemtyarray
  render(emty_array)
}
function render(lead){
    let items="";

    for(let i=0; i<lead.length; i++){
      items+=`
       <li>
          <a target='_black' href=${lead[i] }>
            ${lead[i]}
          </a>
       </li>`
    }
     unor_list.innerHTML=items;
}
buttonclick.addEventListener("click",function(){
    
    emty_array.push(input_EL.value);
    input_EL.value=" "
    localStorage.setItem("emty_array",JSON.stringify(emty_array))
    render(emty_array);
})


buttondelete.addEventListener('dblclick', function() {
   localStorage.clear()
   emty_array=[]
   render(emty_array)
  });
save_btn.addEventListener('click', function() {
    chrome.tabs.guery({"active" : true , currentWindow : true }, function(tabs) {
      emty_array.push(tabs[0].url);
      localStorage.setItem("emty_array",JSON.stringify(emty_array))
      render(emty_array);
    })
    });