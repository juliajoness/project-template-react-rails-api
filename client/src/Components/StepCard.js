import { Card } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
function StepCard({date, step_count, id, removeStep, step, showChosenStep}) {


    const handleTrash = () => {
        fetch(`/steps/${id}`, {method: "DELETE",});
        removeStep(step)
}
console.log(showChosenStep)

    return (
        <div>
            <Card.Group>
                <Card> date: {date} steps: {step_count} </Card>
                <div class="ui buttons">
                  <button onClick={handleTrash} class="ui button">
                    Discard
                  </button>
                  <div class="or"></div>
                  <button> 
                  <NavLink className="button" to={`/step/${id}`}
                    class="ui positive button">
                      Add Category
                  </NavLink>
                  </button>
              </div>
            </Card.Group>
          </div>

//  {/* <button onClick={handleTrash} class= "ui primary button">
//                   Discard
//                 </button>
//                 <h1> {''} </h1>
//         <NavLink className="button" to={`/step/${id}`}>
//           <button class ="ui primary button" >
//               Add Categroy
//           </button>
//         </NavLink> */}


            // <div class="ui buttons">
            //       <button onClick={handleTrash} class="ui button">
            //         Discard
            //       </button>
            //       <div class="or"></div>
            //       <NavLink className="button" to={`/step/${id}`}
            //       <button> 
            //         class="ui positive button">Add Category</button>
            //       </NavLink>
            //   </div>



        //     {/* <button onClick={handleTrash} className="emoji-button delete">
        //   🗑
        // </button> */}
        // {/* <NavLink className="button" to={`/step/${id}`}>
        //   <button className ="ui primary labeled icon button" >        
        //       <i className= "hand point right outline"></i>
        //       Add Categroy
        //   </button>
    
        // </NavLink> */}
        

/* <div>
    
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{date}</Statistic.Value>
        <Statistic.Label>Date</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{step_count}</Statistic.Value>
        <Statistic.Label>Step Count</Statistic.Label>
      </Statistic>
    </Statistic.Group>

  </div> */
  

//         <Item.Group>
//     <Item>
//       <Item.Content verticalAlign='middle'>
//         <Item.Header as='a'>{date}: {step_count} steps</Item.Header>
//       </Item.Content>
//     </Item>
//   </Item.Group>



            // <div>
            //     <h3>{date}: {step_count} steps</h3>
            // </div>


        )
}

export default StepCard;