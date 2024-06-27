import { useRef } from 'react';

const FileUploader = ({handleFile, text, name}) => {

  const hiddenFileInput = useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];

    console.log(fileUploaded);
    handleFile(fileUploaded);
  };

return (
    <>
      <button className={name} onClick={handleClick} >
        {text}
      </button>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{display: 'none'}}
      />
    </>
  );

}

export default FileUploader;