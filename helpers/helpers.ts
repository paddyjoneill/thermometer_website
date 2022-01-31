export const tagsListToString = (tags: string[]) => {
    let tagsString = ""
    for(let i = 0; i < tags.length; i++){
        tagsString = tagsString + " " + tags[i]
        if(i !== tags.length - 1){
            tagsString = tagsString + ","
        }
    }
    return tagsString
}