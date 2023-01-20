import {useEffect, useState} from "react";
import { Label } from 'semantic-ui-react'


function AddCategory () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/categories")
            .then(res => {
                if(res.ok) {
                    res.json().then(setCategories)
                }
            })
    }, []);

    const categoriesArray = categories.map(category => {
        return <Label as='a' >{category.category_tag}</Label>
     });
 

    return (
        <div>
            {categoriesArray}
    {/* <Label as='a' tag>
      Hiking
    </Label>
    <Label as='a' color='red' tag>
      Lesiure
    </Label>
    <Label as='a' color='teal' tag>
      Running
    </Label> */}
  </div>
    )
}

export default AddCategory;