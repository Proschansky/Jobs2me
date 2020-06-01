import React from 'react'
import { Editor } from '@tinymce/tinymce-react';

export default class EmailArea extends React.Component{

    handleEditorChange = (content, editor) => {
      console.log('Content was updated:', content);
    }
 
    render() {
      return (
        <Editor
          init={{
            height: 300,
            browser_spellcheck : true,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview hr anchor pagebreak',
              'searchreplace wordcount visualblocks visualchars fullscreen',
              'insertdatetime media nonbreaking save table contextmenu directionality',
              'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
            ],
            toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media',
            entity_encoding : "raw",
            templates: [
              {title: '200+', description: '200+ Applies', content: 'jobdescription'}
            ],
            image_advtab: true,
		        encoding: 'xml',
            entity_encoding : "numeric",
            formats: {
            removeformat: [
              {selector: '*', remove : 'all', split : true, expand : false, block_expand: true, deep : true},
              {selector: '*', attributes : ['style', 'class'], remove : 'empty', split : true, expand : false, deep : true},
              {selector: '*', attributes : ['style', 'class'], split : false, expand : false, deep : true}
            ]
			      }
          }}
          onEditorChange={this.handleEditorChange}
        />
      );
    }
  }