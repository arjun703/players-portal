import React, {useState} from 'react';

import {
  DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors,
} from '@dnd-kit/core';

import {
  arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy
} from '@dnd-kit/sortable';

import { horizontalListSortingStrategy } from '@dnd-kit/sortable';

import {useSortable} from '@dnd-kit/sortable';

import {CSS} from '@dnd-kit/utilities';

import { Paper, IconButton, Typography, Button } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddNewVideoForm from './add_new_video_form';
import Grow from '@mui/material/Grow';
import {Grid} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import DialogBox from './dialog';

export default function Videos() {
  const [videos, setVideos] = useState([{id: 1, title: 'Video f sfdsddfsf', thumbnail: '/files/t1.jpg' }, {id: 2, title: 'Video 2', thumbnail: '/files/t2.jpg'}]);
  const [addingNewVideo, setAddingNewVideo] = useState(false)
  const [haveDragChagesBeenMade, setHaveDragChagesBeenMade] = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setHaveDragChagesBeenMade(true)
      setVideos((videos) => {
        console.log(active.id, over.id)
        const oldIndex = videos.indexOf(videos.filter(video => video.id === active.id)[0]);
        const newIndex = videos.indexOf(videos.filter(video => video.id === over.id)[0]);
        console.log(oldIndex, newIndex)
        const reOrderedVideos = arrayMove(videos, oldIndex, newIndex);
        console.log(reOrderedVideos)
        return reOrderedVideos
      });
    }
  }
  
  const handleSaveDragChanges = () => {

    alert("Drag Changes Saved")
    setHaveDragChagesBeenMade(false)

  }
  
  const handleAddNewVideo = () => {
    setAddingNewVideo(true);
  }

  const saveAddedNewVideo = (videoTitle, videoURL, videoType) => {
    setAddingNewVideo(!addingNewVideo)
    setTimeout(()=>{
      setVideos(prevVideos => [
        { id: prevVideos.length + 1, title: videoTitle, url: videoURL, videoType },
        ...prevVideos
      ]);
    }, 1000)
  }

  const handleCancelAddNewVideo = () => {
    setAddingNewVideo(false)
  }

  const handleDelete = (id)=>{
    setVideos(prevVideos => prevVideos.filter(pv => pv.id !== id ))
  }

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >

    {
      addingNewVideo
        && (
          <AddNewVideoForm 
            handleCancelAddNewVideo={handleCancelAddNewVideo} 
            handleAddNewVideo={saveAddedNewVideo} 
          />
        )
    }

      { videos.length && !addingNewVideo
          ? (
              <SortableContext 
                items={videos}
                strategy={verticalListSortingStrategy}
              >
                <Paper sx={{ p: {xs: '10px 5px', md: 3}, marginTop: {md: '20px', xs: '0px'}}}>
                  <Grid container  sx={{alignItems: 'center'}}>
                    <Grid item xs style={{marginBottom: 0, padding: '0 10px', paddingRight: '20px'}}>
                      <Divider></Divider>
                    </Grid>
                    <Grid  item auto>
                      {
                        haveDragChagesBeenMade && (
                          <div>
                            <Grow in={true}>
                              <Button onClick={()=>setHaveDragChagesBeenMade(false)} sx={{boxShadow: 'none', borderRadius: '20px'}}  >Cancel</Button>
                            </Grow>
                            <Grow in={true} onClick={handleSaveDragChanges}>
                              <Button sx={{boxShadow: 'none', borderRadius: '20px'}} variant="contained" >Save Changes</Button>
                            </Grow>
                          </div>
                        )
                      }
                      { !haveDragChagesBeenMade && 
                        <div onClick={handleAddNewVideo} >
                          <Tooltip title="Add New Video">
                              <IconButton sx={{':hover': { color: 'blue'}, backgroundColor: 'blue', color: 'white', border: '1px solid blue'}}><LibraryAddIcon /></IconButton>
                          </Tooltip>
                        </div>
                      }
                    </Grid>
                  </Grid>
                  <TransitionGroup>
                    {
                      videos
                      .map((video,index) => 
                        <Collapse key={video.id} >
                          <SortableVideoItem handleDelete={handleDelete} video={video} key={'video-'+video.id}  id={'video-'+video.id} />
                        </Collapse>
                      )
                    }
                  </TransitionGroup>
                </Paper>
              </SortableContext>
          )
          : ( !addingNewVideo &&
            <DisplayNoVideos />
          )
        }
    </DndContext>
  );
  

}

function DisplayNoVideos(){
  return(
    <>
      No Videos
    </>
  )
}


export function SortableVideoItem({video, handleDelete}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: video.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  console.log(video)

  const handleDeleteInner = (id) => {
    handleDelete(id)
  }
  
  const [isWaitingForConfirmation, setIsWaitingForConfimation] = useState({waiting: false, id: false})

  const displayPrompt = (id) => {
    setIsWaitingForConfimation({waiting: true, id: id })
  }

  const handleCancel = () => {
    setIsWaitingForConfimation({waiting: false, id: false })
  }

  return (
    <div style={style} >
      <Grid container sx={{alignItems: 'center', marginTop: '10px'}}>
        <Grid item auto>
          <div ref={setNodeRef} {...attributes} {...listeners}>
            <IconButton aria-label="share">
              <DragIndicatorIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item auto>
          <div>
            {
              video.thumbnail?.length > 0 
              ? <img src={video.thumbnail} alt="Thumbnail"  style={{borderRadius: '15px', marginRight: '15px', maxWidth: '150px', maxHeight: '150px' }} />
              : <img src={'/default.png'} alt="Thumbnail"  style={{borderRadius: '15px', marginRight: '15px', maxWidth: '150px', maxHeight: '150px' }} />
              
            }
          </div>
        </Grid>
        <Grid item xs>
          <div>
            <Typography variant="body2" color="text.secondary">
              {video.title}
            </Typography>
          </div>
        </Grid>
        <Grid item auto sx={{justifyContent: 'flex-end', paddingLeft: '5px'}}>
          <div >
            <IconButton><DeleteIcon onClick={()=>{displayPrompt(video.id)}} /></IconButton>
          </div>
        </Grid>
      </Grid>
      {
        isWaitingForConfirmation.waiting && 
        <DialogBox 
          handleConfirm = {() => {handleDeleteInner(isWaitingForConfirmation.id)}}
          handleCancel = {handleCancel}
        />
      }
    </div>
  );
}