const Book=(props)=>{
    console.log(props);
    return (
    <div className="book">
        <h2>{props.title}</h2>
        <img src={props.imgLink}/>
        <h2>{props.author}</h2>
        <h3>{props.price}</h3>
       
    </div>
    );
};
export default Book;

// const Title =()=><h2>Atomic Habits : the life-changing million-copy</h2>;
// const Price =()=>{
// return <h2>Rs. 459</h2>;
// };
// const Image =()=>{
//     return <img src="https://m.media-amazon.com/images/I/81Ls+SBCLiL._SL1500_.jpg" height="300" width="200"/>;
//  };

//     function Author(){
//         return <h2>James Clear</h2>;
//     }
