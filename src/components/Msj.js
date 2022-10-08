const Msj = ({children, type}) => {
    return (
      <div className={`alerta ${type}`}>
          {children}
      </div>
    )
  }
  
  export default Msj