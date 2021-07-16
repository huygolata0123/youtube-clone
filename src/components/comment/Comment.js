import React from 'react'
import moment from 'moment'
import './_comment.scss'
const Comment = ({comment}) => {

    const {
        authorDisplayName, 
        authorProfileImageUrl,
        publicshedAt,
        textDisplay,
    } = comment

    return (
        <div >
            <div className='comment d-2 d-flex'>
                <img
                    src={authorProfileImageUrl}
                    alt=' '
                    className="rounder-circle mr-3"
                />
                <div className="comment__body">
                    <p className="comment__header mb-1">
                        
                        {authorDisplayName} • {moment(publicshedAt).fromNow()}
                    </p>
                    <p className='mb-0'>{textDisplay}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
