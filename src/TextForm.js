import React,{useState} from 'react'




const TextForm = (props) => {

    const clickon = () =>{
      console.log('UpperCase Was Clicked' + text)
      let newText = text.toUpperCase();
      setText(newText);

    }
    
    const handleOnChange = (event) =>{
      console.log('On Change')
      setText(event.target.value)
    }

    const[text,setText]= useState('Enter Text Here...')
    
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 mt-5'>
                    <h2>{props.title}</h2>
                    <br/>
                            <div className="input-group mb-3">
                <textarea id='myBox' rows="8" onChange={handleOnChange} className='form-control' value={text} ></textarea>
            </div>

            <button type="" className='btn btn-primary' onClick={clickon}>Convert To UpperCase</button>
 
             </div>
            </div>            
        </div>
    </div>
  )
}

export default TextForm