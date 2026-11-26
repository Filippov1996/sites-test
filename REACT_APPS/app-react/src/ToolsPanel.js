const ToolsPanel = (props)=>{
return(
    <div class="tools-panel">
           <a href="#" class="icon">
               <img src={props.icon1} alt=""/>
           </a>
           <a href="#" class="icon">
               <img src={props.icon2} alt=""/>
           </a>
           <a href="#" class="icon">
               <img src={props.icon3} alt=""/>
           </a>
       </div>
);

}
export default ToolsPanel;