// use zenStackdB
/*inserting topics*/
db.topics.insertMany([
    {   
        topicid: 1,
        topic: "HTML",
        topic_date: new Date("2020-10-15"),
		task:{
				task_date:new Date("2020-10-19")
			}
    },
     {
         topicid: 2,
        topic: "CSS",
       topic_date: new Date("2020-10-24"),
		task:{
				task_date:new Date("2020-10-24")
			}
    },
     {
         topicid: 3,
        topic: "JavaScript",
       topic_date: new Date("2020-10-31"),
		task:{
				task_date:new Date("2020-10-29")
			}
    },
     {
         topicid: 4,
        topic: "ReactJS",
        topic_date: new Date("2020-11-5"),
		task:{
				task_date:new Date("2020-11-1")
			}
    }, 

	{
        topicid: 5,
        topic: "MongoDB",
         topic_date: new Date("2020-11-10"),
		task:{
				task_date:new Date("2020-11-9")
			}
    },
	 {
        topicid: 6,
        topic: "NodeJS",
        topic_date: new Date("2020-11-15"),
		task:{
				task_date:new Date("2020-11-19")
			}
    }
    ])

//To show inserted Topics
db.topics.find().pretty();

/*-------------------------------------------------------------------------------------------*/
// insert task collection	

db.tasks.insertMany(
    [{  
      task_id: 1,
       topicid: 1,
      name: "HTML",
      date:new Date("2020-10-15")
    },
    {  
      task_id: 2,
       topicid: 1,
      name: "CSS",
      date:new Date("2020-10-18")
    },
    {  
      task_id: 3,
       topicid: 1,
      name: "HTML + CSS ",
       date:new Date("2020-10-20")
    },
    {  
      task_id: 4,
       topicid: 2,
      name: "JavaScript",
      date:new Date("2020-10-27")
    },
    {  
      task_id: 5,
      topicid: 3,
      name: "React UI",
       date:new Date("2020-10-29")
    }
    ]
    )
//To show inserted Tasks
db.tasks.find().pretty();


// insert collection company_drives

db.company_drives.insertMany([
    {
        company_id: 1,
        drive_date: new Date("2020-10-15"),
        company: "Amazon"
    },
   
  {
        company_id: 2,
         drive_date: new Date("2020-10-20"),
        company: "Google"
    },
     {
        company_id: 3,
         drive_date: new Date("2020-10-26"),
        company: "Accenture"
    },
     {
        company_id: 4,
        drive_date: new Date("2020-10-30"),
        company: "TCS-Tata Consultancy Services."
    },
     {
        company_id: 5,
        drive_date: new Date("2020-11-15"),
        company: "Alphabet Inc"
    }
    ])
//To show inserted Company_drives
db.company_drives.find().pretty();

// insert codekata collection

db.codekata.insertMany([
    {
        q_id:1,
        category:"HTML",
        problems_statement: "Sample problem statement"
    },
    {
        q_id:2,
        category:"CSS",
        problems_statement: "Sample problem statement"
     },
    {
       q_id:3,
      category:"JavaScript",
      problems_statement: "Sample problem statement"
    },
    {
       q_id:4,
       category:"ReactJS", 
       problems_statement: "Sample problem statement"
    },
    {
       q_id:5,
       category:"NodeJS",
       problems_statement: "Sample problem statement"
    },
    ])

db.codekata.find().pretty();

	  
	 /* -----------------------------------------------------------------------------------------*/

	// inserting mentors collection
	
    db.mentors.insertMany(
        [
        {
        id:1,
        mentor_name : "RagavKumar",
        email:"RagavK@gmail.com",
        mentee_count:10
        },
          {
        id:2,
        mentor_name : "Ranjini",
        email:"ranjini@gmail.com",
        mentee_list:19
        },
           {
        id:3,
        mentor_name : "Sai Mohan",
        email:"Sai@gmail.com",
        mentee_list:25
        },
           
        ]
        )

 db.mentors.find().pretty();

 	 /* ------------------------------------------------------------------------------------------*/

    //  inserting users collection
db.users.insertMany([
    {
        userid: 1,
        name: "Prathamesh Kamble",
        email: "prathamesh@gmail.com", 
		absent_on:[],
		company_drives : [],
		codekata_problems : [1,2,3],
		submitted_task : [
		{
		task_id :1,
		submitted_date:new Date("17-oct-2020")
		}
		]
    },
     {
        userid: 2,
        name: "Aniket",
        email: "aniket@gmail.com",
		absent_on:[new Date("27-oct-2020")
		],
		company_drives : [1,2],
		codekata_problems : [1,3,4,5],
		submitted_task : [
		{
		task_id :5  ,
		submitted_date:new Date("15-oct-2020")
		}
		]
    },
     {
        userid: 3,
        name: "Spider",
        email: "spider@gmail.com",
		absent_on:[],
		company_drives : [1],
		codekata_problems : [1,5],
		submitted_task : [	
		]
    },
  {
        userid: 4,
        name: "Mayuresh",
        email: "mayur@gmail.com",
		absent_on:[new Date("20-oct-2020")
		],
		company_drives : [2],
		codekata_problems : [1,2,5],
		submitted_task : [
		{
		task_id :2,
		submitted_date:new Date("17-nov-2020")
		}
		]
    },
     {
        userid: 5,
        name: "Rohit",
        email: "rohit@gmail.com",
		absent_on:[],
		company_drives : [1,2],
		codekata_problems : [1,2],
		submitted_task : [
		{
		task_id :3,
		submitted_date:new Date("07-oct-2020")
		}
		]
    } 
    ])

db.users.find().pretty();
// Find all the topics and tasks which are thought in the month of October
db.zenStackdB.find({})
//To delete a record
db.users.deleteMany({"name":"Prathamesh Kamble"})