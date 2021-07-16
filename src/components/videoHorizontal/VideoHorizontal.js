import React, {useEffect, useState} from 'react'
import './_videoHorizontal.scss'

import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {Row,Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const VideoHorizontal = ({video}) => {

    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails:{medium},
        },
    } = video

       const [views, setViews] = useState(null)
    const [duration,setDuration] = useState(null)
    const [channelIcon,setChannelIcon] = useState(null)

    useEffect(() => {
        const get_video_details = async () => {
            const  {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId,
                },
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [id])

     useEffect(() => {
      const get_channel_icon = async () => {
         const {
            data: { items },
         } = await request('/channels', {
            params: {
               part: 'snippet',
               id: channelId,
            },
         })
         setChannelIcon(items[0].snippet.thumbnails.default)
      }
      get_channel_icon()
   }, [channelId])



    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 100).format("mm:ss")

    const history = useHistory()
    const handleClick = () => {
        // TODO handle channel click
        history.push(`/watch/${id.videoId}`)
    } 

    return (
        /*//TODO Refractor grid */
      <Row className="videoHorizontal m-1 py-2 align-align-items-center">
            <Col xs={6} md={6} className='videoHorizontal__left'>

                <LazyLoadImage 
                    src={medium.url}
                effect="blur"
                className='videoHorizontal__thumbnail'
                wrapperClassName='videoHorizontal__thumbnail-wrapper'
                />
                <span className="video__top__duration">{_duration}</span>

            </Col>

            <Col xs={6} md={6} className='videoHorizontal__left'>
                <p className='videoHorizontal__title mb-1'>
                   {title}
                </p>
                <div className="videoHorizontal__details">
                    
                        <AiFillEye /> {numeral(views).format('0.a')} Views •
                   
                     {moment(publishedAt).fromNow()}
                </div>

                <div className="my-1 videoHorizontal__channel d-flex align-items-center ">
                {/* //TODO show in search screen */}
                    <p className="mb-0">{channelTitle} </p>
                </div>


            </Col>
      </Row>
    )
}

export default VideoHorizontal 
