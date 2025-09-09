const loadcatagory=()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=>res.json())
    .then((json)=>displaycatagory(json.categories))

}

const displaycatagory =(posts)=>{
   
    const levelcontainer=document.getElementById('level-container')
        levelcontainer.innerHTML="";

  for(const post of posts){
        
    
    const btndiv=document.createElement('div')

    btndiv.innerHTML=`
           <button  onclick="loadbtn(${post.id})" class="flex color-btn hover:bg-green-700 font-xl">${post.category_name}</button>
    
    `
    levelcontainer.append(btndiv)
    }}


    const loadbtn =(id)=>{
        const url =`https://openapi.programming-hero.com/api/category/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>displayplants(data.plants))

        
    }

    const displayplants =(plants)=>{
          
         const display =document.getElementById('card1')
          display.innerHTML='';

          for(const plant of plants){
            
            const plantdiv=document.createElement('div')
            plantdiv.innerHTML=`  
               <div class="bg-white shadow-md rounded-xl p-5 w-64 m-3">
        <div class="h-40 bg-gray-200 rounded-md flex items-center justify-center mb-4">
          <img src="${plant.image}" alt="${plant.name}" class="max-h-full w-full object-cover rounded-md">
        </div>
        <h3 onclick="showdetails(${plant.id})" class="text-lg font-semibold mb-1">${plant.name}</h3>
        <p class="text-sm text-gray-600 mb-2 h-28">${plant.description}</p>
        <div class="flex items-center justify-between mb-5">
          <span class="text-xs bg-green-100 text-green-700 px-2 py-1  rounded-full">${plant.category}</span>
          <span class="font-semibold">৳${plant.price}</span>
        </div>
        <button onclick="addToHistory('${plant.name}', '${plant.price}')" class="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
                
            `

            display.append(plantdiv)



          }
    }

   
  
    const allloadpost =()=>{

     const url =`https://openapi.programming-hero.com/api/plants`
      fetch(url)
      .then(res=>res.json())
      .then(data=>displayallplants(data.plants))

    }

    const displayallplants =(alls)=>{
     
        const displayt =document.getElementById('card1')
          displayt.innerHTML='';

          
          for(const all of alls){
            
            const plantdivs=document.createElement('div')
            plantdivs.innerHTML=`  
               <div class="bg-white shadow-md rounded-xl p-5 w-64 m-3">
        <div class="h-40 bg-gray-200 rounded-md flex items-center justify-center mb-4">
          <img src="${all.image}" alt="${all.name}" class="max-h-full w-full object-cover rounded-md">
        </div>
        <h3 onclick="showdetails(${all.id})" class="text-lg font-semibold mb-1">${all.name}</h3>
        <p class="text-sm text-gray-600 mb-2 h-28">${all.description}</p>
        <div class="flex items-center justify-between mb-5">
          <span class="text-xs bg-green-100 text-green-700 px-2 py-1  rounded-full">${all.category}</span>
          <span class="font-semibold">৳${all.price}</span>
        </div>
        <button onclick="addToHistory('${all.name}', '${all.price}')" class="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg">
          Add to Cart
        </button>
      </div>`
                 displayt.append(plantdivs)

         

      }}

    allloadpost()
    

    let totaltrees =0;
    let total =0;
    const historyCount=[];
   const  addToHistory =(name,price)=>{
     totaltrees=1;
     
     total=Number(total) +Number(price)
        
    const history =document.getElementById('history')

    
    const historydiv =document.createElement('div')

    historydiv.innerHTML=`
      <div class="card bg-[#F0FDF4] flex justify-between h-[100px] flex-row ml-2 mr-2 mt-3">
       
       <div class="flex flex-col justify-center items-center text-center ml-2">
         <h1 class="font-bold">'${name}'</h1>
          <div class="flex">
            <p>${price}<p>
           <p><i class="fa-solid fa-xmark"></i></p>
             <p>${totaltrees}</p>
          </div>
       </div>
        <div class=" flex items-center text-center mr-2"><button class="clear-btn"><i class="fa-solid fa-xmark text-gray-300"></i></button></div>
    </div>
      <div class="history2 border-t border-gray-400 mt-3">
          <div>
            <div class="flex gap-3 justify-end mr-3">
              <h1>total</h1>
              <p>=</p>
               <p id='total-value'>${total}</p>
            </div>
          </div>
        </div>
    
    
    `

    history.appendChild(historydiv)

   }





document.addEventListener('click', function (e){
  if (e.target.closest('.clear-btn')) {
    
    e.target.closest('.card').remove();}})
    
  


 const showdetails=(id)=>{
   fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
   .then(res=>res.json())
   .then(json=>displaydetals(json.plants))
 }

  const displaydetals =(ip)=>{

     const container = document.getElementById('details-container');
      const content = document.getElementById('details-content');

      
      content.innerHTML = '';

      
      const card = document.createElement('div');
      card.innerHTML = `
        
        <img src="${ip.image}" alt="${ip.name}" class="w-full mb-2 rounded">
         <h2 class="text-xl font-bold mb-2">${ip.name}</h2>
        <p>${ip.description}</p>
        <p class="mt-2 font-semibold">৳${ip.price}</p>
      `;

      content.appendChild(card);

      
      container.classList.remove('hidden');

   
const closeBtn = document.getElementById('close-btn');
const detailsContainer = document.getElementById('details-container');

closeBtn.addEventListener('click', () => {
  detailsContainer.classList.add('hidden'); 
});



  }
  

         
 



        
    

  
loadcatagory()

 



