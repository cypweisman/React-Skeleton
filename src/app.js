var React = require('react');
var ReactDOM = require('react-dom');
//require compnents file is any (var [name of compnent] = require('./src/components/[component.js]'))

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Cy, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
  //takes 2 params: what ur replacing, and what u want to be there instead
  <CommentBox />,
  document.getElementById('app')
  );