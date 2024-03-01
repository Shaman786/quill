"use client";
import Dropzone from 'react-dropzone'

const UploadDropzone = () = {
  return(
    <Dropzone multiple={false}>
    {({getRootProps,getInputProps,acceptedFiles})=>(<div {...getRootProps()}></div>)}
    </Dropzone>
  )
}
