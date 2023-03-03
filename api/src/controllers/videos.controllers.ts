
import { RequestHandler } from "express";
import Video from '../models/Videos'

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find({});
        return res.json(videos)
    } catch (error) {
        res.json( error );
    }
}
export const createVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findOne( { url: req.body.url } );
        if (videoFound) {
            return res.status(301).json({message: "The URL already exists"})
        }
    
        const video = new Video(req.body);
        const savedVideo  = await video.save();
        res.json(savedVideo);
        
    } catch (error) {
        res.json( error );
    }
}
export const getVideo: RequestHandler = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if(video) {
            return res.json(video)
        }
        return res.status(204).json()
        
    } catch (error) {
        res.json( error );
    }
}
export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const video = await Video.findByIdAndDelete(req.params.id);
        if (!video) {
            return res.status(204).json()
        }
        return res.json(video)
        
    } catch (error) {
        res.json( error );
    }
}
export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updatedVideo) {
            return res.status(204).json();
        }
        return res.json(updatedVideo);
    } catch (error) {
        res.json( error );
    }
}
