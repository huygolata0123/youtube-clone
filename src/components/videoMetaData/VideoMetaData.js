import React,{useEffect} from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'

import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import {getChannelDetails} from '../../redux/actions/channel.action'

const VideoMetaData = () => { 

    // const { channelId, channelTitle, description, title, publishedAt }=snippet
    // const {viewCount,likeCount,dislikeCount} = statistics;
    
    // const dispatch = useDispatch()

    const subscriptionStatus = useSelector(
        state => state.channelDetails.subscriptionStatus
    )


    // useEffect(() => {
    //     dispatch(getChannelDetails(channelId))
    // },[dispatch, channelId])
    

    return ( 
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-1"> 
                      <span>
                        {numeral(10000).format('0.a')} Views •{' '}
                        {moment('2020-06-6').fromNow()}
                    </span>
              </div>
              <div className='mr-3'>
                  <span>
                      <MdThumbUp size={26} /> 
                      {numeral(10000).format('0.a')}
                  </span>
                  <span className='mr-3'>
                      <MdThumbDown size={26}/> 
                      {numeral(10000).format('0.a')}
                  </span>
              </div>
              

            </div>
                <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3 ">
                    <div className='d-flex'>
                        <img 
                        src="https://cdn.statically.io/img/st2.depositphotos.com/5934840/11872/v/950/depositphotos_118723450-stock-illustration-boy-anime-male-manga-cartoon.jpg  "
                        alt=' '
                        className="rounder-circle mr-3"
                        />
                        <div className="d-flex flex-column">
                            <span>Backench Coder</span>
                            <span> {numeral(10000).format('0.a')} Subscribers</span>
                        </div>
                    </div>
                
                <button className={` p-2 m-2 border-0 btn ${
                    subscriptionStatus && 'btn-gray'
                }`}>
                {subscriptionStatus ? 'Subscribed' : 'Subscribe'}</button>
                </div>
            <div className="videoMetaDat__description">
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    onchorClass='showMoreText'
                    expanded={false}
                    >
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
