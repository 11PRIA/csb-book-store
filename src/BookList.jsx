import Book from "./Book";
const bookData=[
{   id:1,
    title:"let us C",
    author:"Priyanka kumari",
    imgLink:"https://m.media-amazon.com/images/I/81Ls+SBCLiL._SL1500_.jpg",
    price:454.9,
},
{   id:2,
    title:"Ikigai ",
    author:"Francesc Miralles",
    imgLink:"https://m.media-amazon.com/images/I/51sx4eLa6NL._SY445_SX342_.jpg",
    price:234,
},
{   id:3,
    title:"The Power of Your Subconscious Mind",    
    author:" Joseph Murphy",
    imgLink:"https://m.media-amazon.com/images/I/71HMJiEu7JL._SY425_.jpg",
    price:324,
},
{   id:4,
    title:"The Silent Patient",
    author:" Alex Michaelides",
    imgLink:"https://m.media-amazon.com/images/I/51QnuLIY2uL._SY445_SX342_.jpg",
    price:324,
},
];

const BookList=()=>{
return (
<div className="booklist">
     {/* <Book {...bookData[0]}/>
     {
        bookData.map((b)=>{
            return <Book{...b}/>;
        })
     } */}
    
     {
        bookData.map((b)=>(
            <Book {...b} key={b.id}/>
        ))
     }
     
     {/* <Book {...bookData[1]}/>
     <Book {...bookData[2]}/>
     <Book {...bookData[3]}/> */}


</div>

);
};
export default BookList;

