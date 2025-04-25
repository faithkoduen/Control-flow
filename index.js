function getDayOfWeek(days){
    let day;
    switch(dayNumber){
        case "Monday": 
        console.log(`On ${day} local delivery is scheduled`)
        break;
        case "Tuesday":
        console.log(`On ${day} starndard delivery is scheduled`)
        break;
        case "Friday":
        console.log(`On ${day} local delivery is schuduled`)
        break;
        default:
        console.log(`Invalid day `)}
        
    };
    console.log(getDayOfWeek);
 

//2
    const checkBookStatus = (books) =>{
        for(let i=1;i<books.length; i++){
            if(books[i] === "Available"){
                console.log("Ready to lend")
            }else{
                console.log("Checked out")
            }
        }
    };
    const books = ['Ready to lend','Checked out','Not yet checked out']
    checkBookStatus(books);

//3
    const checkCustomerAges = (age) =>{
        for(let i=0;i<age.length; i++){
            if(age[i] > 18){
                console.log(`Adult`);
            }else{
                console.log(`Minor`);   
            } 
                
            }       
    };
    const ages = [15,45,27,7,89,57];
    checkCustomerAges(ages);
//4

const userFeedback = ['Great','Good','satisfied']
    const getFeedback = (userFeedback) =>{
        let i = 0;
        do{
            console.log(`${userFeedback}`)
            i ++;
        }while(i<userFeedback.length);
        
    };
   
    getFeedback(userFeedback);
//5
    const gameCountDown = (live) =>{
        let lives = 5;
        while(lives >0){
            console.log(`You have ${lives} lives left`)
            lives --;
        }
        console.log(`Game has ended`)
    };
    gameCountDown();


    
   
//6
    const userLogin = (statuses) =>{
        for(let i=0;i<statuses.length; i++){
            if(statuses[i]==="logged in"){
                console.log("Welcome back!");
            }else{
                console.log("Please log in");
            }
        }
    };
    const statuses =['logged in','pending','logged out'];
    userLogin(statuses);


//7
    const supportTickets = (priorities) =>{
        priorities.forEach(priority =>{
            switch(priority){
                case "Low":
                console.log("Low addressed")
                break;
                case "Medium":
                console.log("Medium addressed")
                break;
                case "High":
                console.log("High addressed")
                break;
                default:
                console.log("not addressed")
                break;
            }
        })
    };
    const priorities =['High','Low','Medium','Trial'];
    supportTickets(priorities);


//8
    const countDown = (time) =>{
        let Seconds = 10;
        while(Seconds >= 0){
            console.log(`Time remaining ${Seconds}`)
            Seconds --;
        }
    };
    countDown();

  
