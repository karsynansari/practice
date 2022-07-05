import React, {useState} from 'react'

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ]
export default function App() {
 const [filteredList, setFilteredList] = useState(list); 
 function handleSearch(e) {
    if (e.target.value === "") {
      setFilteredList(list);
    }
//if there's a value in the input field, filter the original array and return an array of results that match that condition
//set the filtered list state to the filtered list 
const searchResults = list.filter(listItem => (listItem.toUpperCase().includes(e.target.value.toUpperCase())));
setFilteredList(searchResults)

 }
 console.log(filteredList);
  return (
    <>
      <div id="box">
        <div>Searching Stuff</div>
        <input onChange={handleSearch} placeholder="type to filter" />
      </div>
     {filteredList.map((eachListItem) => (<ul>{eachListItem}</ul>))}
     </>
  );
}
