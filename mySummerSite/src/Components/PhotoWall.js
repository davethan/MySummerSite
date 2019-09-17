import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
//anchor tag, href attribute
function PhotoWall(props) {
    return  <div> 
                <div className="photoGrid" >
                    {props.posts
                    .sort(function(x,y) {
                    return y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
                </div>
                <Link className = "addIcon" to="/AddPhoto"> Add a Photo! </Link> 
            </div>
}
PhotoWall.propTypes = {
 posts: PropTypes.array.isRequired,
}
 export default PhotoWall