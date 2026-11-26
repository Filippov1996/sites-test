const Posts = (props)=>{
return(
   <section class="events">
           <div class="wrapper">
                {props.list.map((item,index)=>(
                    <div class="events__item" key={index}>
                   <div class="events__item-top">
                       <div class="events__item-td">
                           <span class="title">{item.title}</span>
                           <span class="date">{item.date}</span>
                       </div>
                       <span class="place">
                           {item.label}
                       </span>
                   </div>
                   <div class="events__item-tags">
                        {item.tags.map((tag)=>(
                            <span class="tag">{tag}</span>
                        ))}
                   </div>
                   <span class="events__item-desc">
                       {item.description}
                   </span>
                   <div class="events__data">
                       <span class="item">
                           <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.52188" cy="2.52188" r="2.52188" fill="#0D38CE"/>
                            </svg>
                            {item.status && "Есть отбор"}
                       </span>
                       <span class="item">
                           <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.52188" cy="2.52188" r="2.52188" fill="#0D38CE"/>
                            </svg>
                            Регистрация до {item.date_reg}
                       </span>
                   </div>
               </div>
                ))}

           </div>
    </section>
);

}
export default Posts;