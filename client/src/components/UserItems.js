import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'

export const UserItems = ({currentUser}) => {
  const [items, setItems] = useState([]);
  let fetchString = "";

    fetchString = `/userpage/${currentUser.id}`;

  useEffect(() => {
    fetch(fetchString)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [fetchString]);

  return (
    <div><ItemList items={items}/></div>
  )
}
