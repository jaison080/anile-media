import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import {useRouter} from 'next/router';

export default function HomeCard(props) {
    const router = useRouter();
      
    
      function htmlToLength(html, length) {
        const trimmedNode = htmlToNodeWithLength(html, length);
      
        const container = document.createElement("div");
        container.appendChild(trimmedNode);
        return container.innerHTML;
      }
      
      function htmlToNodeWithLength(html, length) {
        // Only for measurement. Never added to DOM.
        const container = document.createElement("div");
        container.innerHTML = html;
      
        const fullRange = document.createRange();
        fullRange.setStart(container, 0);
        fullRange.setEnd(container, 1);
      
        const range = findRangeWithLength(fullRange, length);
        return range.cloneContents();
      }
      
      function findRangeWithLength(range, length) {
        if (rangeLength(range) < length) return range;
      
        // Find the childNode with at least length content.
        for (const childNode of range.endContainer.childNodes) {
          range.setEnd(childNode, lastEndOffset(childNode));
          if (rangeLength(range) >= length) {
            return findRangeWithLength(range, length);
          }
        }
      
        // There are no child nodes long enough. It's a text node.
        const diff = length - rangeLength(range) + range.endOffset;
        range.setEnd(range.endContainer, diff);
        return range;
      }
      
      function lastEndOffset(node) {
        return node.childNodes.length || node.textContent.length;
      }
      
      function rangeLength(range) {
        return range.toString().length;
      }

     

    console.log(props.post);
  
  return (
      <>
      {props.loading ? (
        <Card >
             <Skeleton variant="rectangular" height={140} />

        </Card>
      ):

    (<Card elevation={10} >
        
      <CardActionArea
       onClick={()=>{
           
        router.push(`/posts/${props.post.id}`);
    }}>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {props.post.title}
          </Typography>
          <Typography gutterBottom variant="body3" component="div">
            {props.post.author}
          </Typography>
          <div style={{overflow: "hidden", textOverflow: "ellipsis", maxHeight: "150px"}}> 
          <Typography  variant="body2" color="text.secondary"  gutterBottom =  {true}>
          <div dangerouslySetInnerHTML={{__html: props.post.content}} />
          </Typography>
          
          </div>
        </CardContent>
      </CardActionArea>
    </Card>)}
    </>
  );
}