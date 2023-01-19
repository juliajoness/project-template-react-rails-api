import React, { useState, useEffect } from "react";

function Feed () {
    const [feed, setFeed] = useState([]);


    useEffect(() => {
        fetch("/steps")
          .then(res => {
           if(res.ok) {
             res.json()
             .then(feed => {
               setFeed(feed)
             })
           }
         })
      }, []);
    return (
        <div>
            {/* Feed.steps_count
            Feed.user.username
            Feed.date */}
        </div>
    )
}

export default Feed;