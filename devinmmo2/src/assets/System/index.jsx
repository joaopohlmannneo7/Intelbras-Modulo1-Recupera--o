 const SistOp = ({item}) =>{
    if(item.minimum_system_requirements === undefined){
        return(
            null
        )
    }
return(
    <div>
          
      <p  id="content">{Object.values(item.minimum_system_requirements.os)}</p>
     <h4 id="title">Gráficos</h4>
       <p id="content">{Object.values(item.minimum_system_requirements.graphics)}</p>
       <h4 id="title">Memória</h4>
      <p  id="content">{Object.values(item.minimum_system_requirements.memory)}</p>
      <h4 id="title">Processador</h4>
      <p  id="content">{Object.values(item.minimum_system_requirements.processor)}</p>
      <h4 id="title">Espaço em disco</h4>
      <p  id="content">{Object.values(item.minimum_system_requirements.storage)}</p>
    </div>
)
}

export default SistOp;