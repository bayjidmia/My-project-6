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
           <button onclick="loadbtn(${post.id})" class="flex color-btn font-xl">${post.category_name}</button>
    
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
          
         const display =document.getElementById('card')
          display.innerHTML='';

          for(const plant of plants){
            
            const plantdiv=document.createElement('div')
            plantdiv.innerHTML=`  
               <div class="bg-white shadow-md rounded-xl p-5 w-64 m-3">
        <div class="h-40 bg-gray-200 rounded-md flex items-center justify-center mb-4">
          <img src="${plant.image}" alt="${plant.name}" class="max-h-full w-full object-cover rounded-md">
        </div>
        <h3 class="text-lg font-semibold mb-1">${plant.name}</h3>
        <p class="text-sm text-gray-600 mb-2 h-28">${plant.description}</p>
        <div class="flex items-center justify-between mb-5">
          <span class="text-xs bg-green-100 text-green-700 px-2 py-1  rounded-full">${plant.category}</span>
          <span class="font-semibold">৳${plant.price}</span>
        </div>
        <button class="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg">
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
     
        const displayt =document.getElementById('card')
          displayt.innerHTML='';

          
          for(const all of alls){
            
            const plantdivs=document.createElement('div')
            plantdivs.innerHTML=`  
               <div class="bg-white shadow-md rounded-xl p-5 w-64 m-3">
        <div class="h-40 bg-gray-200 rounded-md flex items-center justify-center mb-4">
          <img src="${all.image}" alt="${all.name}" class="max-h-full w-full object-cover rounded-md">
        </div>
        <h3 class="text-lg font-semibold mb-1">${all.name}</h3>
        <p class="text-sm text-gray-600 mb-2 h-28">${all.description}</p>
        <div class="flex items-center justify-between mb-5">
          <span class="text-xs bg-green-100 text-green-700 px-2 py-1  rounded-full">${all.category}</span>
          <span class="font-semibold">৳${all.price}</span>
        </div>
        <button class="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
                
            `

            displayt.append(plantdivs)



      }}

    allloadpost()
    


   



        
    

  
loadcatagory()

 