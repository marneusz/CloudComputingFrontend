import React from 'react';
import conf from './conf.json' 

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


class FileInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    async handleSubmit(event) {
      event.preventDefault();
      const file =  this.fileInput.current.files[0]
      console.log(this.props)
      const resp = await fetch(conf.uploadUrl + `?fname=${this.props.username}&type=${this.fileInput.current.files[0].type}`)
      .then(resp => resp.json()) 
      fetch(resp.uploadURL, {
        method: 'PUT',
        headers: {
        'Content-Type': resp.ContentType,
       },
        body: file,
      }).then(function (response) {
         console.log(response);
        })
         .catch(function (error) {
          console.log(error);
       });    
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  };
  export default FileInput;