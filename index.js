

const form = document.querySelector("form");
const h2=document.querySelector("h2");
const todos = [];

const render = () => {
   
  const section = document.querySelector(".section2");
  section.innerHTML = '';

 
  
	todos.forEach((todo) => {
        h2.innerHTML="MY TO DO List" 
		var div = document.createElement("div");

		let card =div.classList.add("card2");
	
        
		div.innerHTML = `
        
        <span> ${todo.title}</span>
        <span> ${todo.date}</span>
        <div class="actions">
          <button class="delete"><i class="fa-solid fa-trash"></i></button>
          <label class="custom-checkbox" tab-index="0" aria-label="Checkbox Label">
          <input type="checkbox">
          <span class="checkmark"></span>
          
          
          </label>
        </div>
    `;

    section.appendChild(div);
    
    
   
  });
  // var del=document.querySelector(".delete")
  // del.addEventListener("click",()=>{
  //   card.remove()
  // })
};

const addTodo = (e) => {
  e.preventDefault();
  const input = e.target.children[0]
  const todoTitle = input.value;
	const date = new Date().toLocaleDateString("en-US");
	const time = new Date().toLocaleTimeString("en-US");
	const todo = {
		title: todoTitle,
		date: `${date}, ${time}`,
	};
  todos.push(todo);
  input.value = '';
  render();
};

form.addEventListener("submit", addTodo);




