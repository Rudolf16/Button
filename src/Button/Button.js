import PropTypes from 'prop-types';
import './style.scss';


App.propTypes={
  text:PropTypes.string,
  size:PropTypes.string,
  type:PropTypes.string
}
App.defaultProps={
  text:'Add',
  size:'lg',
  type:'primary'
}

function App({text,size,type}) {
  const styleSize=()=>{
    switch(size){
    case 'lg':return{
      fontSize:"15px",
      width:"120px",
      height:"48px",
      padding: "5px",
    }
    case 'sm':return{
      fontSize:"10px",
      padding: "5px",
      width: "77px",
      height: "42px",
      
    }
    default: return{
      fontSize:"12px",
      width:"150px",
      height:'35px',
      padding: "5px",
    }
  }
}

  const styleForColor=()=>{
    switch(type){
      case 'primary':return {
        border:"none",
        color: "#fff",
        backgroundImage: "linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%)",
        
      }
      case 'secondary':return {
        border:"none",
        color: "#fff",
        backgroundImage: "linear-gradient(45deg, #272424 0%, #353941 50%, #bfc9db 100%)",
      }
      case 'pOutline':return {
        color: "#007bff",
        border:"1px solid",
        backgroundColor: "inherit",
        borderColor: "#007bff",
      
      }
      case 'sOutline':return {
        color: "#6c757d",
        border:"1px solid",
        backgroundColor: "inherit",
        borderColor: "#6c757d",
      }
      default: return{}
    }
  }

  const styleForButtons={
    ...styleSize(),
    ...styleForColor(),
  }
  return (
    <>
     <button className="btnAnimate" style={styleForButtons}>{text}</button>
     </>
  );
}

export default App;
