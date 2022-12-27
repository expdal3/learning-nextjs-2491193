import {useRouter} from 'next/router';
import topics from '../api/topics'

export default function Learn() {
    const router = useRouter();
    const { name } = router.query
    const topic = topics.find(topic => topic.id === name) //get the `topic` object where topic.id = name when
                                                          // finding within `topics` array
    
    return (
    <>
    <h1>Learn {topic.id}</h1>
    <p>{topic.about}</p>
    </>
    )
  }
  