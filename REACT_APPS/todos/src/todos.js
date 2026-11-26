const date1 = new Date(2024,6,18,10,24);
const date2 = new Date(2024,6,19,14,47);

const todos =[
            {
                title:"Изучить React",
                description:"Да поскорее!",
                image:"",
                done:true,
                createdAt:date1.toLocaleDateString(),
                key:date1.getTime()
            },
            {
                title:"Написать первое Rеасt-приложение",
                description:"Список запланированных дел",
                image:"",
                done:false,
                createdAt:date2.toLocaleDateString(),
                key:date2.getTime()
            }
];

export default todos;