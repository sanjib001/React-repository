// const Button = (porps) =>{
//     //const name= {name}
//     return(
//         <button>{porps.name}</button>
//     )
// }

// const Button = ({name}) =>{
//     //const name= {name}
//     return(
//         <button>{name}</button>
//     )
// }

// const Button = (porps) =>{
//     const {name} = porps;
//     return(
//         <button>{name}</button>
//     )
// }

const Button = (porps) => {
    const { children } = porps;
    //children is reserved word
    return (
        <button>{children}</button>
    )
}


export default Button;