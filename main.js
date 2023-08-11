//a532c5a63a8df10299280d7ac1770bd4

// let weather = {
//     fetchWeather: function () {
//         const apiUrl = ''; 
//         fetch(apiUrl)
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data); 
//             })
//             // .catch((error) => {
//             //     console.log('Error fetching weather data:');
//             // });
//     },
// };

// weather.fetchWeather();



// Fetch the JSON response from the IPinfo API
fetch("https://ipinfo.io/json?token=955c6f7efbbb24")
    .then(response => response.json())
    .then(jsonResponse => {
        // Get the city from the JSON response
        const city = jsonResponse.city;

        // Log the retrieved city
        console.log("City:", city);

        // Call the search function with the retrieved city
        search(city);
    })
    .catch(error => {
        console.error("Error fetching IP data:", error);
    });

   
  let locationInput;
function search(country){


  
     locationInput = document.getElementById('searcher').value;
    country = locationInput
    
    const apiKey = '6ce81b100397401ba1a131730230608';
    const apiUrl = `    https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${country}&days=3  `;





    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.current.temp_c;
        const weatherCondition = data.current.condition.text;

        const name = data.location.name     
      function formatDate(date) {
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];    
          const dayNumber = date.getDay();
          const dayName = daysOfWeek[dayNumber];   
          const dateOfMonth = date.getDate();    
          const monthNumber = date.getMonth();
          const monthName = months[monthNumber];     
          return `${dayName} ${dateOfMonth}${monthName}`;
        }  

        const dateElement = document.getElementById('date');    
        const date = new Date(data.location.localtime);
        const formattedDate = formatDate(date);    
        dateElement.textContent = formattedDate;

        function formattedDay(date) {
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const dayNumber = date.getDay();
          const dayName = daysOfWeek[dayNumber];   
          return `${dayName}`;
        }  



        const iconsweather = data.current.condition.icon;
        const imgsElement = document.getElementById('imgs');
        imgsElement.setAttribute('src', `https:${iconsweather}`);


        const secondimg = document.getElementById('secondimg');
       secondimg.setAttribute('src' , `https:${data.forecast.forecastday[1].day.condition.icon}`) 

       const tempsecond = document.getElementById('tempsecond');
       tempsecond.innerHTML=(`${data.forecast.forecastday[1].day.maxtemp_c }°C`)


       const min2 = document.getElementById('min2')
       min2.innerHTML=(`${data.forecast.forecastday[1].day.mintemp_c}°C`)
             
       const weatherpar = document.getElementById('weatherpar')
       weatherpar.innerHTML=(`${data.forecast.forecastday[1].day.condition.text}`)
       const day2 = document.getElementById('day2');
       const date2 = new Date(data.forecast.forecastday[1].date);
       const formattedDate2 = formattedDay(date2);
       day2.textContent = formattedDate2;









    

       const thirdimg = document.getElementById('thirdimg');
       thirdimg.setAttribute('src' , `https:${data.forecast.forecastday[2].day.condition.icon}`) 

       const tempthird = document.getElementById('tempthird');
       tempthird.innerHTML=(`${data.forecast.forecastday[2].day.maxtemp_c }°C`)


       const min3 = document.getElementById('min3')
       min3.innerHTML=(`${data.forecast.forecastday[2].day.mintemp_c}°C`)
             
       const weatherpar3 = document.getElementById('weatherpar3')
       weatherpar3.innerHTML=(`${data.forecast.forecastday[2].day.condition.text}`)






       const day3 = document.getElementById('day3');
       const date3 = new Date(data.forecast.forecastday[2].date);
       const formattedDate3 = formattedDay(date3);
       day3.textContent = formattedDate3;



        
  document.getElementById('showname').innerHTML= name
  const hour = date.getHours();
console.log(hour);
  
  document.getElementById('iconsweather').classList.replace('d-none', 'd-block')
  document.getElementById('showcard').classList.replace('d-none', 'd-block')
  document.getElementById('secondcard').classList.remove('d-none')
  document.getElementById('thirdcard').classList.remove('d-none')


  
  
  
   var box = `     <h2 class="display-2 fw-bold mx-2">${temperature}°C
   </h2>
   <p class="card-text text-info fw-light fs-6 py-3 small">${weatherCondition}</p>`
  
  
   
   document.getElementById("show").innerHTML=box
      })

}


document.querySelector("#searcher").addEventListener('input',function () {
  search(locationInput)
  
})




// searchButton.addEventListener('click', () => {
//   const locationInput = document.getElementById('searcher').value;
//   const apiKey = '6ce81b100397401ba1a131730230608';
//   const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}`;
  
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const temperature = data.current.temp_c;
//       const weatherCondition = data.current.condition.text;
//       const name = data.location.name     
//     function formatDate(date) {
//         const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];    
//         const dayNumber = date.getDay();
//         const dayName = daysOfWeek[dayNumber];   
//         const dateOfMonth = date.getDate();    
//         const monthNumber = date.getMonth();
//         const monthName = months[monthNumber];     
//         return `${dayName} ${dateOfMonth}${monthName}`;
//       }  
//       const dateElement = document.getElementById('date');    
//       const date = new Date(data.location.localtime);
//       const formattedDate = formatDate(date);    
//       dateElement.textContent = formattedDate;

// document.getElementById('showname').innerHTML= name

// if (weatherCondition=='Sunny') {
// document.getElementById('sae').setAttribute('src','113.png')
    
// }

// if (weatherCondition=='Partly Cloudy') {
//     document.getElementById('sae').setAttribute('src','116d.png')
        
//     }
//     if (weatherCondition=='Clear') {
//         document.getElementById('sae').setAttribute('src','weather icons/64x64/night/113.png')
            
//         }
// document.getElementById('iconsweather').classList.replace('d-none', 'd-block')
// document.getElementById('showcard').classList.replace('d-none', 'd-block')




//  var box = `     <h2 class="display-2 fw-bold mx-2">${temperature}°C
//  </h2>
//  <p class="card-text text-info fw-light fs-6 py-3 small">${weatherCondition}</p>`


 
//  document.getElementById("show").innerHTML=box
//     })
//     // .catch(error => {
//     //   console.error('Error fetching weather data:', error);
//     // });
// });

 class person{
  constructor(name,age){
  this.name= name
  this.age = age
 }
}
function display()
{

  console.log("name",`${this.name}`);
  console.log("age",`${this.age}`);
}


let person1 = new person('ahmed',19)
let person2 = new person ('mohamed',20)
console.log("person 1");
person1.display()


console.log("person 2");
person2.display()