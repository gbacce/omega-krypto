import React, {useState} from 'react';
import FileUploader from './FileUploader';
// import ControlledInput from './ControlledInput';


function Demo() {
    const [file, setFile] = useState();
    const [encryptionType, setEncryptionType] = useState('alphabetic');
    const [primaryKey, setPrimaryKey] = useState('');
    const [primaryKeyInputText, setPrimaryKeyInputText] = useState('');
    const [secondaryKey, setSecondaryKey] = useState('');
    const [blockSize, setBlockSize] = useState('1');
    const [encryptionMode, setEncryptionMode] = useState(true);
    const [inputTextAreaValue, setInputTextAreaValue] = useState('');
    const [isInputReadOnly, setInputReadOnly] = useState(false);
    
    // function handleChange(event) {
    //     setFile(event.target.files[0])
    //   }const [value, setValue] = useState('');

    const handleSetEncryptionType = (e) => {
        console.log(e.target.value);
        setEncryptionType(e.target.value);
    }

    const onSetPrimaryKey = (e) => {
        setPrimaryKey(e.target.value);
    }

    const onSetSecondaryKey = (e) => {
        setSecondaryKey(e.target.value);
    }

    const onSetBlockSize = (e) => {
        setBlockSize(e.target.value);
    }

    const selectEncrypt = () => {
        if(encryptionMode) {
            setEncryptionType('alphabetic');
            setPrimaryKey('');
            setSecondaryKey('');
            setBlockSize('1');
        }

        setEncryptionMode(true);
    }

    const selectDecrypt = () => {
        if(!encryptionMode) {
            setEncryptionType('alphabetic');
            setPrimaryKey('');
            setSecondaryKey('');
            setBlockSize('1');
        }

        setEncryptionMode(false);
    }

    const handleClearFile = () => {
        setFile();
        setInputTextAreaValue('')
    }

    const SRC_MAX_FILE_SIZE = 5 * 1024 * 1024; // unit is byte
const KEY_MAX_FILE_SIZE = 50 * 1024 * 1024;
const METHOD_MAX_FILE_SIZE = 50 * 1024 * 1024;

// Define Alphabets
var A1 = "JMHjmhPARTYSKEWpartyskewfingFINGZBxcvlQUODXCVLzbquod";
A1 = new TextEncoder().encode(A1);
var A2 = "JMH jmhPARTYSKEWpartyskewfingFINGZBxcvlQUODXCVLzbquod";
A2 = new TextEncoder().encode(A2);
var A3 = "3678540912";
A3 = new TextEncoder().encode(A3);

var B0 =
  "88, 64, 89, 239, 160, 222, 76, 167, 85, 154, 182, 251, 255, 207, 180, 164, 71, 210, 96, 43, 38, 194, 47, 187, 206, 48, 113, 178, 50, 101, 99, 25, 209, 171, 168, 193, 41, 241, 73, 195, 213, 55, 16, 130, 132, 203, 141, 72, 98, 169, 90, 249, 12, 104, 150, 191, 115, 93, 100, 51, 170, 78, 181, 4, 35, 165, 45, 200, 233, 212, 59, 9, 231, 234, 14, 123, 111, 108, 232, 5, 106, 15, 131, 253, 197, 56, 92, 120, 32, 103, 34, 225, 6, 125, 110, 86, 127, 112, 109, 128, 214, 177, 248, 37, 221, 129, 245, 119, 149, 224, 19, 192, 223, 155, 114, 107, 179, 24, 227, 31, 247, 162, 205, 70, 58, 36, 74, 60, 83, 17, 236, 244, 2, 53, 242, 67, 8, 219, 172, 148, 94, 46, 138, 105, 27, 29, 217, 135, 52, 145, 49, 237, 174, 157, 250, 80, 121, 158, 65, 118, 63, 185, 218, 189, 201, 229, 82, 196, 7, 208, 136, 13, 102, 235, 153, 79, 126, 228, 124, 23, 66, 140, 243, 147, 159, 216, 33, 156, 252, 173, 42, 69, 186, 39, 184, 3, 133, 215, 163, 240, 30, 0, 44, 166, 117, 1, 202, 95, 190, 91, 175, 199, 142, 134, 204, 176, 10, 81, 183, 211, 18, 188, 26, 198, 116, 144, 20, 87, 161, 139, 77, 137, 152, 143, 11, 230, 84, 28, 40, 146, 21, 254, 57, 22, 238, 220, 62, 68, 122, 54, 226, 151, 75, 61, 246, 97";
var B1 = B0.split(", ");
var A4 = new Uint8Array(B1.map((item) => parseInt(item)));

var A = A1;
var M = A.length;

var array1_txt =
  "121, 694, 520, 84, 151, 209, 233, 370, 564, 21, 528, 395, 692, 46, 269, 147, 488, 179, 13, 168, 565, 303, 77, 213, 347, 83, 474, 375, 144, 562, 446, 275, 599, 592, 229, 334, 530, 336, 61, 343, 450, 605, 265, 349, 28, 246, 371, 268, 426, 25, 508, 284, 43, 157, 295, 143, 210, 369, 591, 333, 378, 391, 523, 89, 321, 750, 628, 207, 567, 634, 214, 465, 663, 572, 270, 122, 686, 90, 609, 596, 382, 296, 444, 33, 738, 142, 98, 623, 514, 732, 316, 460, 470, 159, 552, 541, 486, 440, 513, 291, 189, 705, 182, 627, 17, 647, 23, 187, 248, 568, 606, 678, 475, 659, 420, 384, 344, 445, 719, 638, 739, 726, 44, 608, 443, 195, 682, 272, 561, 108, 525, 676, 385, 456, 614, 690, 185, 227, 704, 163, 621, 756, 41, 236, 97, 217, 352, 345, 685, 63, 319, 99, 251, 753, 484, 307, 332, 356, 717, 466, 32, 672, 145, 152, 244, 636, 361, 496, 405, 367, 309, 472, 409, 240, 308, 180, 531, 366, 731, 237, 490, 612, 75, 560, 661, 416, 727, 410, 52, 413, 335, 280, 29, 101, 767, 746, 6, 594, 639, 749, 377, 94, 724, 735, 383, 194, 153, 242, 578, 329, 566, 522, 761, 363, 156, 148, 730, 146, 162, 238, 256, 432, 404, 493, 139, 543, 178, 681, 707, 287, 683, 728, 618, 697, 668, 758, 292, 540, 96, 509, 550, 341, 326, 59, 580, 587, 22, 387, 449, 224, 65, 288, 559, 408, 654, 106";
var array1 = array1_txt.split(", ");
array1 = array1.map((item) => parseInt(item));

var array2_txt =
  "180, 101, 94, 46, 208, 240, 23, 97, 79, 87, 75, 63, 178, 91, 52, 187, 122, 233, 192, 105, 7, 203, 129, 159, 53, 254, 193, 40, 142, 6, 205, 82, 177, 50, 3, 227, 100, 81, 45, 197, 168, 83, 241, 220, 17, 149, 237, 204, 89, 34, 231, 117, 170, 44, 90, 191, 115, 239, 92, 111, 31, 108, 57, 162, 186, 62, 250, 146, 225, 98, 95, 140, 16, 139, 253, 54, 35, 252, 24, 64, 219, 175, 72, 28, 163, 26, 70, 59, 5, 138, 127, 85, 109, 123, 244, 198, 229, 56, 124, 153, 245, 212, 96, 151, 238, 22, 2, 80, 103, 190, 166, 1, 184, 206, 128, 48, 10, 145, 39, 29, 84, 102, 37, 125, 165, 213, 179, 207, 73, 188, 216, 0, 143, 136, 234, 189, 86, 4, 9, 21, 42, 66, 211, 167, 246, 33, 126, 161, 18, 176, 104, 164, 235, 182, 55, 200, 65, 173, 155, 120, 147, 214, 41, 152, 110, 223, 13, 25, 12, 181, 156, 135, 169, 221, 249, 243, 217, 11, 38, 196, 228, 32, 148, 150, 247, 131, 183, 93, 160, 113, 144, 222, 132, 15, 118, 19, 218, 141, 14, 174, 158, 68, 36, 78, 106, 134, 224, 30, 60, 99, 215, 88, 255, 157, 74, 137, 185, 236, 119, 76, 210, 43, 232, 242, 209, 51, 251, 107, 194, 112, 199, 172, 230, 171, 49, 69, 154, 61, 67, 58, 27, 114, 116, 248, 20, 133, 77, 201, 121, 8, 47, 195, 226, 71, 202, 130";
var array2_origin = array2_txt.split(", ");
array2_origin = array2_origin.map((item) => parseInt(item));

var E = true;
var key = new Uint8Array();
var method = new Uint8Array();
var block_sizes = new Uint8Array();
var input_txt = new Uint8Array();
var output_txt = new Uint8Array();
var input_mime_type = "";
var REST_STRING = "... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...";

var entire_input_len = 0;
var key_len = 0;
var method_len = 0;

function setAlphaByIdx(idx) {
    idx = Number(idx);
    switch (idx) {
      case 0:
        A = A1;
        break;
      case 1:
        A = A2;
        break;
      case 2:
        A = A3;
        break;
      case 3:
        A = A4;
        break;
      default:
        A = A1;
    }
    M = A.length;
  }

  function handle_alpha_change(e) {
    setAlphaByIdx(e.value);
}
  
    function numberWithCommas(z) {
        z = z.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(z)) z = z.replace(pattern, "$1,$2");
        return z;
    }

    function merge_uint8_array(array1, array2) {
        let mergedLength = array1.length + array2.length;
        let mergedArray = new Uint8Array(mergedLength);
        mergedArray.set(array1);
        mergedArray.set(array2, array1.length);
        return mergedArray;
    }

    const handleSourceFileUpload = (file )=> {
        setFile(file);
        entire_input_len = file.size;
        if (!file) {
            console.log("No file selected");
            return;
        }

        if (file.size > SRC_MAX_FILE_SIZE) {
            entire_input_len = SRC_MAX_FILE_SIZE;
        }

        setInputReadOnly(true);
        input_mime_type = file.type;

        const reader = file.stream().getReader();
        // const decoder = new TextDecoder("utf-8");
        let bytesRead = 0;
        input_txt = new Uint8Array();
        reader.read().then(function processText({ done, value }) {
            if (done) {
            console.log("Source stream complete");
            let tmp = new TextDecoder().decode(input_txt.slice(0, 1000));
            setInputTextAreaValue(input_txt.length > 1000 ? tmp + REST_STRING : tmp);
            return;
            }

            if (bytesRead >= entire_input_len) {
            input_txt = input_txt.slice(0, SRC_MAX_FILE_SIZE);
            console.log("Source loading finished");
            let tmp = new TextDecoder().decode(input_txt.slice(0, 1000));
            setInputTextAreaValue(input_txt.length > 1000 ? tmp + REST_STRING : tmp);
            return;
            } else {
            input_txt = merge_uint8_array(input_txt, value);
            bytesRead += value.length;
            }
            // console.log(`Received ${bytesRead} bytes of data so far`);
            return reader.read().then(processText);
            });
    }

    const handleKeyFileUpload = (file) => {
        key_len = file.size;
        if (!file) {
            console.log("No file selected");
            return;
        }

        if (file.size > KEY_MAX_FILE_SIZE) {
            // if file size is more than 50MB
            key_len = KEY_MAX_FILE_SIZE;
        }

        // key_close_btn_el.style.display = "block";
        // key_select_btn_el.style.display = "none";
        // key_text_input_el.value = file.name.slice(0, 20);
        // key_text_input_el.setAttribute("readonly", "true");

        const reader = file.stream().getReader();
        let bytesRead = 0;
        key = new Uint8Array();
        reader.read().then(function processText({ done, value }) {
            if (done) {
            console.log("Key stream complete");
            return;
            }

            if (bytesRead >= KEY_MAX_FILE_SIZE) {
                key = key.slice(0, KEY_MAX_FILE_SIZE);
                setPrimaryKey(key);
                console.log("Key loading finished");
            return;
            } else {
                key = merge_uint8_array(key, value);
                setPrimaryKey(key);
                bytesRead += value.length;
            }
            // console.log(`Received ${bytesRead} bytes of data so far`);
            return reader.read().then(processText);
        });
    }

    

    function checkBlockIsValid() {
        if (blockSize.length == 0) {
          throw new Error("Please input block sizes");
        }
        let blocks = blockSize.split(",");
        blocks = blocks.map((item) => Number(item));
        let isValid = blocks.every(
          (item) => typeof Number(item) === "number" && Number(item) > 0
        );
        if (isValid) {
          return blocks;
        }
        throw new Error("Please input block sizes with valid format");
      }

    const reverseString = (str) => {
        return str.split("").reverse().join("");
    }

    const Cipher = (P, K, S, M, encryptionMode) => {
        let F = Math.floor(S / 256);
        let V = S % 256;
        let Result = 0;
        if (V < 0) V += 256;
        if (F == 0) {
          if (encryptionMode) Result = (P + K + V) % M;
          else Result = (P - K - V) % M;
        } else if (F == 1) {
          if (encryptionMode) Result = (P - K + V) % M;
          else Result = (P + K - V) % M;
        } else {
          Result = (K - P + V) % M;
        }
        if (Result < 0) Result += M;
        return Result;
      }

    const reorder_array2 = (array2, last_character, last_substitution) => {
        let new_arr = [...array2];
        for (let i = 0; i < 256; i++) {
        new_arr[i] = Cipher(
            last_character,
            array2[i],
            last_substitution,
            256,
            true
        );
        }
        return new_arr;
    }
    
    return <div className='demo'>
        <div className='demoInput'>
            <div className='demoHeader'>
                <h2>Input</h2>
                {/* <input type='file' placeholder='Import from file' /> */}
                {/* <input type="file" onChange={handleChange}/> */}
                {
                    file ? <button className='importBtn' onClick={handleClearFile}>Clear file</button> : <FileUploader handleFile={handleSourceFileUpload} text='Upload file' name='importBtn'></FileUploader>
                }
            </div>
                <textarea value={inputTextAreaValue}></textarea>
        </div>
        <div className='demoParameters'>
            <div className='demoHeader'>
                <div className={`encryptBtn ${encryptionMode ? 'selected' : ''}`} onClick={selectEncrypt}>
                    <h2>Encrypt</h2>
                </div>
                <div className={`decryptBtn ${!encryptionMode ? 'selected' : ''}`} onClick={selectDecrypt}>
                    <h2>Decrypt</h2>
                </div>
            </div>
            <div className='parameterContent'>
            <div className='parameter'>
                <div className='inputLabel'>
                    <label>{encryptionMode ? `Encryption` : `Decryption`} type</label>
                </div>
                <select className='inputSelect'onChange={handleSetEncryptionType } >
                    <option value="alphabetic">Alphabetic-only FPE</option>
                    <option value="alphabeticSpace">Alphabetic + Space FPE</option>
                    <option value="numeric">Numeric Only FPE</option>
                    <option value="nonFPE">Non-FPE</option>
                </select>
            </div>
            <div className='parameter'>
                <div className='inputLabel'>
                    <label>Primary key</label>
                </div>
                <div className='inputRow'>
                    <input className='inputRowInput' value={primaryKey} onChange={onSetPrimaryKey} />
                    <button className='inputBtn' onClick={handleKeyFileUpload}>Select</button>
                </div>
            </div>
            <div className='parameter'>
                <div className='inputLabel'>
                    <label>Secondary key</label>
                </div>
                <div className='inputRow'>
                    <input className='inputRowInput' value={secondaryKey} onChange={onSetSecondaryKey} />
                    <button className='inputBtn'>Select</button>
                </div>
            </div>
            <div className='parameter'>
                <div className='inputLabel'>
                    <label>Block size or sizes</label>
                </div>
                <div className='inputRow'>
                    <input className='inputRowInput' value={blockSize} onChange={onSetBlockSize} type='text'  />
                </div>
            </div>
            <button className='convertBtn'>Convert</button>
            </div>
        </div>
        <div className='demoInput'>
            <div className='demoHeader'>
                <h2>Output</h2>
            </div>
                <textarea readOnly></textarea>
            </div>
    </div>
}

export default Demo;