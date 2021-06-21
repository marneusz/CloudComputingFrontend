import React, { useContext } from 'react';
import conf from './conf.json' 
import { AccountContext } from './components/Accounts';
import axios from 'axios'

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


class FileInput extends React.Component {
    static contextType = AccountContext;
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    async handleSubmit(event) {
      const { getSession } = this.context;
      getSession().then(async ({ headers }) => {
        event.preventDefault();
        const file =  this.fileInput.current.files[0]
        console.log(this.props)
        var token = headers.Authorization
        console.log(token)
        const resp = await fetch(conf.uploadUrl + `?fname=${this.props.username}&type=${this.fileInput.current.files[0].type}`, { headers: {
          'Authorization': token
        }})
        .then(resp => resp.json()) 
        fetch(resp.uploadURL, {
          method: 'PUT',
          headers: {
          'Content-Type': resp.ContentType
        },
          body: file,
        }).then(function (response) {
          console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        })
        const getUrl = resp.uploadURL.split('?')[0]
        console.log(getUrl)
        const body = {
            "fullname": this.props.userData.FullName,
            "company": this.props.userData.Company,
            "username": this.props.username,
            "SoundUri": getUrl
        }
        console.log(headers)
        console.log(body)
        axios.post(conf.apiUrl, body, {headers: headers}).catch(e=> console.log(e));
      

        ;    
    })
        
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