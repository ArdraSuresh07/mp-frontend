import { commonAPI } from "./commonAPI.JS"
import { SERVER_URL } from "./serverurl"


// upload new video

export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// get allUploadedVideos

export const getAllUploadedVideosAPI=async()=>{//no need to pass parameters in async.bcz we need to get all the videos
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// get a single video

export const getSingleVideoAPI=async(id)=>{//we use id bcz id is unique.so even if we give same videoname for multiple videos,we can get a single video
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

// add video to history

export const addVideoHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// get history

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history/`,"")
}

// delete history

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})//last curly brases represents object.bcz while deleting,we need to delete the entire object of data of the particular video.in json,the datas are stored in object format
}

// delete video

export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// add videos to category

export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}

// get category

export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

// delete category

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}

// update video to category

export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}