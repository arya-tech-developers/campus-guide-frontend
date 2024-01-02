const conf = {
    AppwriteURL: String(process.env.REACT_APP_APPWRITE_URL),
    ProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    DatabaseId: String(process.env.REACT_APP_DATABASE_ID),
    CollectionId:String(process.env.REACT_APP_COLLECTION_ID),
    StorageId:String(process.env.REACT_APP_BUCKET_ID),

}


console.log(process.env.REACT_APP_APPWRITE_URL,conf.AppwriteURL,conf.ProjectId,conf.DatabaseId,conf.CollectionId,conf.StorageId)

export default conf;